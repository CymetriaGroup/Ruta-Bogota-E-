export interface Transaction {
  id: number;
  created_at: string;
  modified_at: string;
  status: number;
  points: number;
  description: string;
  created_by: string;
  modified_by: string;
}
