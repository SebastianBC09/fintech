'use client';
import { useState, useEffect, useMemo, useCallback } from 'react';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { products as mockProducts } from '@/data/Products';

export default function useProducts() {
  const allProducts = useMemo(() => mockProducts, []);

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const simulateDelay = useCallback((ms: number = 300) => {
    const isMobile =
      typeof window !== 'undefined' &&
      window.navigator.userAgent.match(/Android|iPhone|iPad|iPod|Mobile/i);
    const adjustedMs = isMobile ? Math.min(ms, 200) : ms;
    return new Promise(resolve => setTimeout(resolve, adjustedMs));
  }, []);

  const getProductsByCategory = useCallback(
    (category: Category) => {
      if (category === 'all') return allProducts;
      return allProducts.filter(p => p.category === category);
    },
    [allProducts],
  );

  useEffect(() => {
    let isMounted = true;

    const initializeProducts = async () => {
      if (filteredProducts.length > 0) return;

      setIsLoading(true);
      try {
        await simulateDelay();
        if (isMounted) {
          setFilteredProducts(allProducts);
          setError(null);
        }
      } catch {
        if (isMounted) {
          setError('Error al cargar productos');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    initializeProducts();

    return () => {
      isMounted = false;
    };
  }, [allProducts, filteredProducts.length, simulateDelay]);

  const filterByCategory = useCallback(
    async (category: Category) => {
      setIsLoading(true);
      try {
        await simulateDelay(200);
        setFilteredProducts(getProductsByCategory(category));
        setError(null);
      } catch {
        setError('Error al filtrar productos');
      } finally {
        setIsLoading(false);
      }
    },
    [getProductsByCategory, simulateDelay],
  );

  const getProductById = useCallback(
    async (id: string) => {
      if (selectedProduct?.id === id) return;
      setIsLoading(true);
      try {
        await simulateDelay(200);
        const product = allProducts.find(p => p.id === id);
        if (product) {
          setSelectedProduct(product);
          setError(null);
        } else {
          setError('Producto no encontrado');
        }
      } catch {
        setError('Error al buscar el producto');
      } finally {
        setIsLoading(false);
      }
    },
    [allProducts, selectedProduct, simulateDelay],
  );

  return {
    products: filteredProducts,
    product: selectedProduct,
    isLoading,
    error,
    filterByCategory,
    getProductById,
  };
}
