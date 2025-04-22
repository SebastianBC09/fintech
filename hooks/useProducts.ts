'use client';
import { useState } from 'react';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { products as mockProducts } from '@/data/Products';

export default function useProducts() {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [filtered, setFiltered] = useState<Product[]>(mockProducts);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filterByCategory = (category: Category) => {
    if (category === 'all') return setFiltered(products);
    setFiltered(products.filter((p) => p.category === category));
  };

  const getProductById = (id: string) => {
    setIsLoading(true);
    const product = products.find((p) => p.id === id);
    if (product) {
      setSelectedProduct(product);
      setError(null);
    } else {
      setError('Producto no encontrado');
      setSelectedProduct(null);
    }
    setIsLoading(false);
  };

  return {
    products: filtered,
    product: selectedProduct,
    isLoading,
    error,
    filterByCategory,
    getProductById,
  };
}
