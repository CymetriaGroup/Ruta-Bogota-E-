export interface User {
  id: string;
  first_name: string;
  last_name: string;
  company: string;
  total_strategy: number;
  total_innovation: number;
  total_merchant: number;
  total_commercial: number;
  total_operations: number;
  total_finance: number;
  total_human: number;
  total_social: number;
  total_trends: number;
  courses?: number[];
  points?: number;
  suggested_courses?: number[];
}
