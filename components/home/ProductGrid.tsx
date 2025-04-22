'use client';
import styled from 'styled-components';
import { ProductCard } from '@/components/common/ProductCard';
import { Product } from '@/types/product';

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

type Props = {
  products: Product[];
};

export default function ProductGrid({ products }: Props) {
  return (
    <Grid>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Grid>
  );
}
