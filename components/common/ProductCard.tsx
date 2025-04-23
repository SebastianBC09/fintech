import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Badge } from '@/components/common/Badge';
import { RiskIndicator } from '@/components/common/RiskIndicator';
import {
  ArrowRight,
  Bank,
  ChartLineUp,
  CreditCard,
  CurrencyCircleDollar,
  HouseLine,
  ShieldCheck,
} from 'phosphor-react';
import { Product } from '@/types/product';

const iconMap = {
  Bank: Bank,
  CurrencyCircleDollar: CurrencyCircleDollar,
  CreditCard: CreditCard,
  ChartLineUp: ChartLineUp,
  ShieldCheck: ShieldCheck,
  HouseLine: HouseLine,
} as const;

type IconName = keyof typeof iconMap;

const Card = styled(motion.div)`
    background: #fff;
    border-radius: 16px;
    box-shadow: 0 4px 20px rgba(15, 76, 129, 0.08);
    display: flex;
    flex-direction: column;
    overflow: hidden;
    border: 1px solid rgba(15, 76, 129, 0.05);
    transition: all 0.3s ease;
    cursor: pointer;
    height: 100%;
    min-height: 260px;

    &:hover {
        box-shadow: 0 8px 30px rgba(15, 76, 129, 0.12);
    }
`;

const IconContainer = styled(motion.div)`
    padding: 1.25rem;
    background: linear-gradient(135deg, #f7f9fd, #f2f6fc);
    display: flex;
    justify-content: center;
    align-items: center;
    color: #0F4C81;
    height: 90px;
`;

const Body = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    flex: 1;
    gap: 0.75rem;
`;

const BadgeContainer = styled.div`
    display: flex;
    gap: 0.5rem;
    margin-bottom: 0.125rem;
`;

const Name = styled.h3`
    font-size: 1rem;
    font-weight: 600;
    color: #212121;
    margin: 0;
    line-height: 1.4;
    height: 2.8em;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

const InterestRate = styled.span`
    font-size: 0.875rem;
    font-weight: 500;
    color: #0F4C81;
    display: flex;
    align-items: center;
    height: 1.25rem;
`;

const Info = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: auto;
    padding-top: 0.75rem;
    border-top: 1px solid #f0f0f0;
`;

const ViewButton = styled(motion.button)`
    display: inline-flex;
    align-items: center;
    background: transparent;
    border: none;
    color: #0F4C81;
    font-size: 0.8125rem;
    font-weight: 600;
    padding: 0.5rem 0;
    cursor: pointer;
    transition: all 0.2s ease;

    &:hover {
        color: #4CAF50;
        transform: translateX(2px);
    }

    svg {
        margin-left: 0.375rem;
        transition: transform 0.2s ease;
    }

    &:hover svg {
        transform: translateX(3px);
    }
`;

export const ProductCard: React.FC<{ product: Product; onViewDetails: (id: string) => void }> = ({
                                                                                                   product,
                                                                                                   onViewDetails
                                                                                                 }) => {
  const Icon = iconMap[product.iconName as IconName] || (() => null);

  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -4 }}
      onClick={() => onViewDetails(product.id)}
    >
      <IconContainer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Icon size={48} weight="duotone" />
      </IconContainer>

      <Body>
        <BadgeContainer>
          {product.isNew && <Badge variant="new" size="small">Nuevo</Badge>}
          {product.isPromoted && <Badge variant="promoted" size="small">Promo</Badge>}
        </BadgeContainer>

        <Name>{product.name}</Name>

        {product.interestRate != null && (
          <InterestRate>
            Tasa {product.interestRate}%
          </InterestRate>
        )}

        {product.riskLevel && <RiskIndicator level={product.riskLevel} showText={true} />}

        <Info>
          <ViewButton
            whileTap={{ scale: 0.98 }}
            aria-label={`Ver detalles de ${product.name}`}
          >
            Ver detalles <ArrowRight size={16} />
          </ViewButton>
        </Info>
      </Body>
    </Card>
  );
};