import React from 'react';
import styled from 'styled-components';
import { Badge } from '@/components/common/Badge';
import RiskIndicator from '@/components/common/RiskIndicator';
import { Product } from '@/types/product';

interface ProductCardProps {
  product: Product;
  onViewDetails: (id: string) => void;
}

const Card = styled.div`
  background: white;
  border-radius: 0.5rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s;
  &:hover { transform: translateY(-4px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
`;
const ImageWrapper = styled.div`
  height: 6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #FAFAFA;
`;
const Content = styled.div`
  padding: 1rem;
  flex: 1;
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
    font-size: 1.125rem;
    margin: 0 0 0.5rem;
    color: #212121;
`;
const Rate = styled.span`
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;
const ButtonStyled = styled.button`
  margin-top: auto;
`;

const ProductCard: React.FC<ProductCardProps> = ({ product, onViewDetails }) => (
  <Card role="region" aria-label={product.name}>
    <ImageWrapper>
      <img src={product.imageUrl} alt={product.name} style={{ maxHeight: '100%', maxWidth: '100%' }} />
    </ImageWrapper>
    <Content>
      {product.isNew && <Badge variant="new" size="small">Nuevo</Badge>}
      {product.isPromoted && <Badge variant="promoted" size="small">Promo</Badge>}
      <Title>{product.name}</Title>
      {product.interestRate !== undefined && <Rate>Tasa: {product.interestRate}%</Rate>}
      {product.riskLevel && <RiskIndicator level={product.riskLevel} showText={false} />}
      <ButtonStyled onClick={() => onViewDetails(product.id)} aria-label={`Ver detalles de ${product.name}`}>Ver detalles</ButtonStyled>
    </Content>
  </Card>
);

export default ProductCard;