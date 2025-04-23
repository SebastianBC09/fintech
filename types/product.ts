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
  iconName: string;
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
