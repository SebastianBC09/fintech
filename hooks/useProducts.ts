'use client';
import { useState, useEffect } from 'react';
import { Product } from '@/types/product';
import { Category } from '@/types/category';
import { products as mockProducts } from '@/data/Products';

export default function useProducts() {
  const allProducts = mockProducts;

  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const simulateDelay = (ms: number = 800) => {
    return new Promise(resolve => setTimeout(resolve, ms));
  };

  useEffect(() => {
    const initializeProducts = async () => {
      setIsLoading(true);
      try {
        await simulateDelay();
        setFilteredProducts(allProducts);
        setError(null);
      } catch {
        setError('Error al cargar productos');
      } finally {
        setIsLoading(false);
      }
    };

    initializeProducts().catch(() => {
      setError('Error al inicializar productos');
      setIsLoading(false);
    });
  }, [allProducts]);

  const filterByCategory = async (category: Category) => {
    setIsLoading(true);

    try {
      await simulateDelay(500);

      if (category === 'all') {
        setFilteredProducts(allProducts);
      } else {
        setFilteredProducts(allProducts.filter((p) => p.category === category));
      }
      setError(null);
    } catch {
      setError('Error al filtrar productos');
    } finally {
      setIsLoading(false);
    }
  };

  const getProductById = async (id: string) => {
    setIsLoading(true);
    setSelectedProduct(null);

    try {
      await simulateDelay(600);

      const product = allProducts.find((p) => p.id === id);
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
  };

  return {
    products: filteredProducts,
    product: selectedProduct,
    isLoading,
    error,
    filterByCategory,
    getProductById,
  };
}