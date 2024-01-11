export interface Course {
  id: number;
  teacher: Teacher;
  questions: Question[];
  created_at: string;
  modified_at: string;
  status: number;
  name: string;
  slug: string;
  description: string;
  video: string;
  points: number;
  created_by?: any;
  modified_by?: any;
  level: number;
  times: number;
  approved: boolean;
  image: string;
  doc_1: string;
  doc_2: string;
  duration: string;
  likes: number;
  category_slug?: string;
  routing?: {
    prev_item?: {
      id?: number;
      slug?: string;
    },
    next_item?: {
      id?: number;
      slug?: string;
    }
  }

}

interface Question {
  data: QuestionData;
  answers: [];
  correct: boolean;
  answer_name: string;
}

interface Teacher {
  id: number;
  name: string;
  image: string;
}

interface QuestionData {
  id: number;
  name: string;
  answer?: number;
}
