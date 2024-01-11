export interface ResponseCourse {
  count:    number;
  next:     null;
  previous: null;
  results:  SimpleCourse[];
}

export interface SimpleCourse {
  id:          number;
  name:        string;
  description: string;
  slug:        string;
  category:    string;
  category_slug: string;
  category_order: number;
  points:      number;
  image: string;
}
