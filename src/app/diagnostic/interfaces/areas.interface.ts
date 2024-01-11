export interface Areas {
  area: Area;
  questions: Question[];
}

interface Area {
  id: number;
  name: string;
  prev: string;
  next: string;
  slug: string;
  courses: Course[];
}

interface Course {
  id: number;
  name: string;
  slug: string;
  image?: string;
}

interface Question {
  data: Area;
  answers: Answer[];
}

interface Answer {
  id: number;
  name: string;
  value: number;
}

