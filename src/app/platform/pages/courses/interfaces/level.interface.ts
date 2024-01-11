import { Course } from './course.interface';
export interface LevelResponse {
  count: number;
  next?: any;
  previous?: any;
  results: Level[];
}

export interface Level {
  id: number;
  category: Category;
  courses: Course[];
  created_at: string;
  modified_at: string;
  status: number;
  name: string;
  level: number;
  created_by?: any;
  modified_by?: any;
}

interface Category {
  id: number;
  created_at: string;
  modified_at: string;
  status: number;
  name: string;
  prev: string;
  next: string;
  slug: string;
  created_by: string;
  modified_by: string;
}
