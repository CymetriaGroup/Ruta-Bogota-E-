export interface Review {
  id: number;
  created_at: string;
  modified_at: string;
  status: number;
  approved: boolean;
  created_by: string;
  modified_by: string;
  course: number;
  course_info: Course;
  answer: number[];
  points?: number;
}

export interface ReviewResponseList {
  count: number;
  next?: any;
  previous?: any;
  results: Review[];
}

interface Course {
  id: number;
  name: string;
  points: number;
  created_at: Date;
  slug: string;
  category_slug: string;
  image: string;
}
