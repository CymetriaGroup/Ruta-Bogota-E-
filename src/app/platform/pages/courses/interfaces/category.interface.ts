export interface ResponseCategory {
  count:    number;
  next:     null;
  previous: null;
  results:  Category[];
}

export interface Category {
  id?:          number;
  courses:     Course[];
  created_at?:  Date;
  modified_at?: Date;
  status?:      number;
  name:        string;
  slug:        string;
  created_by?:  null;
  modified_by?: null;
}

interface Course {
  id:    number;
  name:  string;
  image: string;
  slug?:        string;
  category?:    string;
  category_slug?: string;
  category_order?: number;
}
