import { Category } from '@/types/category';

export type RiskLevel = 'very_low' | 'low' | 'medium' | 'high' | 'very_high';

export interface Product {
  id: string;
  name: string;
  category: Category;
  description: string;
  shortDescription: string;
  interestRate?: number;
  riskLevel?: RiskLevel;
  benefits: string[];
  imageUrl: string;
  isPromoted?: boolean;
  isNew?: boolean;
  details?: {
    minimumAmount?: number;
    term?: string;
    fees?: string[];
    requirements?: string[];
  };
  performanceData?: {
    labels: string[];
    values: number[];
  };
}

export interface ProductsState {
  products: Product[];
  filteredProducts: Product[];
  selectedCategory: Category | 'all';
  isLoading: boolean;
  error: string | null;
}