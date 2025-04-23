'use client';
import { useEffect } from 'react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import styled from 'styled-components';
import useProducts from '@/hooks/useProducts';
import { LoadingState } from '@/components/common/LoadingState';
import { Notification } from '@/components/common/Notification';
import { RiskIndicator } from '@/components/common/RiskIndicator';
import { categoryLabels } from '@/types/category';
import {
  ArrowLeft,
  Bank,
  CurrencyCircleDollar,
  CreditCard,
  ChartLineUp,
  ShieldCheck,
  HouseLine,
} from 'phosphor-react';

const iconMap = {
  Bank: Bank,
  CurrencyCircleDollar: CurrencyCircleDollar,
  CreditCard: CreditCard,
  ChartLineUp: ChartLineUp,
  ShieldCheck: ShieldCheck,
  HouseLine: HouseLine,
} as const;

const DEFAULT_ICON = 'Bank';

type IconName = keyof typeof iconMap;

const PageContainer = styled(motion.div)`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1.5rem;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

const BreadcrumbNav = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  color: #6b7280;
  margin-bottom: 1.5rem;
  flex-wrap: wrap;

  a {
    color: #0f4c81;
    text-decoration: none;
    transition: color 0.2s;

    &:hover {
      color: #1a365d;
      text-decoration: underline;
    }
  }

  span {
    margin: 0 0.5rem;
  }
`;

const ProductContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 2rem;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
  }
`;

const ProductInfoSection = styled(motion.div)`
  display: flex;
  flex-direction: column;
`;

const IconWrapper = styled(motion.div)`
  background: linear-gradient(135deg, #f3f7fd 0%, #e9f0f9 100%);
  border-radius: 18px;
  width: 100%;
  aspect-ratio: 16/9;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  box-shadow: 0 10px 25px rgba(15, 76, 129, 0.08);
  overflow: hidden;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 30% 30%, rgba(255, 255, 255, 0.8), transparent 70%);
    pointer-events: none;
  }

  @media (max-width: 768px) {
    aspect-ratio: 16/10;
  }
`;

const ProductTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1a202c;
  margin: 0 0 0.5rem 0;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const ProductDescription = styled.p`
  font-size: 1rem;
  color: #4a5568;
  margin-bottom: 1rem;
  line-height: 1.6;
`;

const TagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin: 1rem 0;
`;

const Tag = styled.span<{ $variant?: 'new' | 'promoted' | 'category' }>`
  padding: 0.35rem 0.75rem;
  border-radius: 2rem;
  font-size: 0.75rem;
  font-weight: 600;

  ${props => {
    switch (props.$variant) {
      case 'new':
        return `
          background-color: rgba(15, 76, 129, 0.1);
          color: #0F4C81;
        `;
      case 'promoted':
        return `
          background-color: rgba(76, 175, 80, 0.1);
          color: #388E3C;
        `;
      default:
        return `
          background-color: rgba(160, 174, 192, 0.1);
          color: #4A5568;
        `;
    }
  }}
`;

const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
`;

const Card = styled(motion.div)`
  background: #ffffff;
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  border: 1px solid rgba(226, 232, 240, 0.8);

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a202c;
  margin: 0 0 1rem 0;
`;

const DetailsList = styled.ul`
  list-style-type: disc;
  margin: 0;
  padding-left: 1.5rem;

  li {
    margin-bottom: 0.5rem;
    color: #4a5568;
    line-height: 1.5;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

const DetailItem = styled.div`
  margin-bottom: 1rem;

  &:last-child {
    margin-bottom: 0;
  }
`;

const DetailLabel = styled.span`
  display: block;
  font-weight: 600;
  color: #2d3748;
  margin-bottom: 0.25rem;
`;

const DetailValue = styled.span`
  color: #4a5568;
`;

const BackLink = styled(motion.div)`
  display: flex;
  justify-content: center;
  margin-top: 2.5rem;

  a {
    display: inline-flex;
    align-items: center;
    color: #0f4c81;
    font-weight: 600;
    text-decoration: none;
    padding: 0.5rem 1rem;
    border-radius: 8px;
    transition: all 0.2s ease;

    &:hover {
      background-color: rgba(15, 76, 129, 0.05);
      transform: translateY(-2px);
    }
  }
`;

const DetailsGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

const FullWidthDetail = styled.div`
  grid-column: 1 / -1;
`;

export default function ProductPage() {
  const params = useParams();
  let id: string | undefined;
  if (typeof params.id === 'string') {
    id = params.id;
  }

  const { getProductById, product, isLoading, error } = useProducts();

  useEffect(() => {
    if (id) getProductById(id);
  }, [id, getProductById]);

  if (isLoading) return <LoadingState fullPage />;
  if (error) return <Notification type="error" message="No se pudo cargar el producto." />;
  if (!product) {
    return <Notification type="error" message="Producto no encontrado." />;
  }

  const iconName =
    product.iconName && product.iconName in iconMap ? product.iconName : DEFAULT_ICON;
  const Icon = iconMap[iconName as IconName];

  return (
    <PageContainer initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.4 }}>
      <BreadcrumbNav>
        <Link href="/">Inicio</Link>
        <span>/</span>
        <Link href="/">{categoryLabels[product.category]}</Link>
        <span>/</span>
        <span style={{ fontWeight: 500, color: '#2D3748' }}>{product.name}</span>
      </BreadcrumbNav>

      <ProductContainer>
        <ProductInfoSection
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <IconWrapper
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Icon size={80} weight="duotone" color="#0F4C81" />
          </IconWrapper>

          <ProductTitle>{product.name}</ProductTitle>
          <ProductDescription>{product.shortDescription}</ProductDescription>

          <TagsContainer>
            {product.isNew && <Tag $variant="new">Nuevo</Tag>}
            {product.isPromoted && <Tag $variant="promoted">Promoción</Tag>}
            <Tag $variant="category">{categoryLabels[product.category]}</Tag>
          </TagsContainer>
        </ProductInfoSection>

        <DetailsContainer>
          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <CardTitle>Información general</CardTitle>
            <ProductDescription>{product.description}</ProductDescription>

            {product.interestRate != null && (
              <DetailItem>
                <DetailLabel>Tasa de interés:</DetailLabel>
                <DetailValue style={{ color: '#0F4C81', fontWeight: 600 }}>
                  {product.interestRate}%
                </DetailValue>
              </DetailItem>
            )}

            {product.riskLevel && (
              <DetailItem>
                <DetailLabel>Nivel de riesgo:</DetailLabel>
                <RiskIndicator level={product.riskLevel} />
              </DetailItem>
            )}
          </Card>

          <Card
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <CardTitle>Beneficios</CardTitle>
            <DetailsList>
              {product.benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </DetailsList>
          </Card>

          {product.details && (
            <Card
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <CardTitle>Detalles del producto</CardTitle>
              <DetailsGrid>
                {product.details.minimumAmount != null && (
                  <DetailItem>
                    <DetailLabel>Monto mínimo</DetailLabel>
                    <DetailValue>${product.details.minimumAmount.toLocaleString()}</DetailValue>
                  </DetailItem>
                )}

                {product.details.term && (
                  <DetailItem>
                    <DetailLabel>Plazo</DetailLabel>
                    <DetailValue>{product.details.term}</DetailValue>
                  </DetailItem>
                )}

                {product.details.fees && (
                  <FullWidthDetail>
                    <DetailLabel>Comisiones</DetailLabel>
                    <DetailsList>
                      {product.details.fees.map((fee, index) => (
                        <li key={index}>{fee}</li>
                      ))}
                    </DetailsList>
                  </FullWidthDetail>
                )}

                {product.details.requirements && (
                  <FullWidthDetail>
                    <DetailLabel>Requisitos</DetailLabel>
                    <DetailsList>
                      {product.details.requirements.map((requirement, index) => (
                        <li key={index}>{requirement}</li>
                      ))}
                    </DetailsList>
                  </FullWidthDetail>
                )}
              </DetailsGrid>
            </Card>
          )}
        </DetailsContainer>
      </ProductContainer>

      <BackLink
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
      >
        <Link href="/">
          <ArrowLeft size={20} weight="regular" style={{ marginRight: '0.5rem' }} />
          Volver al catálogo
        </Link>
      </BackLink>
    </PageContainer>
  );
}
