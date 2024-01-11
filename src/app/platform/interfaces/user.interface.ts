export interface User {
  id: string;
  company: string;
  first_name: string;
  last_name: string;
  total_commercial: number;
  total_finance: number;
  total_human: number;
  total_innovation: number;
  total_merchant: number;
  total_operations: number;
  total_social: number;
  total_strategy: number;
  total_trends: number;
  points?: number;
  total_points?: number;
  courses?: number[];
  suggested_courses?: number[];
  position?: string;
  web?: string;
  facebook?: string;
  instagram?: string;
  twitter?: string;
}
