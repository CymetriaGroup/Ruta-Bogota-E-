export interface Order {
  id?: number;
  created_at?: string;
  modified_at?: string;
  status?: number;
  created_by?: string;
  modified_by?: string;
  product: number;
}
