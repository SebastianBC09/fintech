'use client';
import { useState, useEffect, useCallback, useRef } from 'react';
import { Product } from '@/types/product';
import { Category } from '@/types/category';

export default function useProducts() {
  const [all, setAll] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const abortCtrl = useRef<AbortController | null>(null);

  useEffect(() => {
    abortCtrl.current = new AbortController();
    setIsLoading(true);
    fetch('/api/products', { signal: abortCtrl.current.signal })
      .then(res => {
        if (!res.ok) throw new Error('Error cargando productos');
        return res.json() as Promise<Product[]>;
      })
      .then(data => {
        setAll(data);
        setProducts(data);
        setError(null);
      })
      .catch(err => {
        if (err.name !== 'AbortError') setError(err.message);
      })
      .finally(() => setIsLoading(false));
    return () => {
      abortCtrl.current?.abort();
    };
  }, []);

  const filterByCategory = useCallback(
    (category: Category) => {
      setProducts(category === 'all' ? all : all.filter(p => p.category === category));
    },
    [all],
  );

  const getProductById = useCallback((id: string) => {
    abortCtrl.current?.abort();
    abortCtrl.current = new AbortController();
    setIsLoading(true);
    fetch(`/api/products/${id}`, { signal: abortCtrl.current.signal })
      .then(res => {
        if (res.status === 404) throw new Error('Producto no encontrado');
        if (!res.ok) throw new Error('Error al obtener producto');
        return res.json() as Promise<Product>;
      })
      .then(p => {
        setProduct(p);
        setError(null);
      })
      .catch(err => {
        if (err.name !== 'AbortError') {
          setProduct(null);
          setError(err.message);
        }
      })
      .finally(() => setIsLoading(false));
  }, []);

  return { products, product, isLoading, error, filterByCategory, getProductById };
}
