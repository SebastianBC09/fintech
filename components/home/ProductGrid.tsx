'use client';
import { FC } from 'react';
import styled from 'styled-components';
import { ProductCard } from '@/components/common/ProductCard';
import { Product } from '@/types/product';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

const Grid = styled.div`
  display: grid;
  gap: 1.5rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    gap: 1.25rem;
  }

  @media (min-width: 1440px) {
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  }
`;

const ProductItem = styled(motion.div)`
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
  will-change: transform, box-shadow;
  border-radius: 16px;
  overflow: hidden;

  &:hover {
    transform: translateY(-4px);
  }
`;

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 24,
    },
  },
};

type Props = {
  products: Product[];
};

export const ProductGrid: FC<Props> = ({ products }) => {
  const router = useRouter();

  const handleViewDetails = (id: string) => {
    router.push(`/products/${id}`);
  };

  return (
    <Grid as={motion.div} variants={container} initial="hidden" animate="show">
      {products.map(product => (
        <ProductItem key={product.id} variants={item}>
          <ProductCard product={product} onViewDetails={handleViewDetails} />
        </ProductItem>
      ))}
    </Grid>
  );
};
