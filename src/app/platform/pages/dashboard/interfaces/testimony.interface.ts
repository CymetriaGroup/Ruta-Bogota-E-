export interface TestimonyResponse {
  count:    number;
  next:     null;
  previous: null;
  results:  Testimony[];
}

export interface Testimony {
  id:          number;
  created_at:  Date;
  modified_at: Date;
  status:      number;
  title:       string;
  youtube:     null | string;
  image:       null | string;
  description: string;
  url:         string;
  created_by:  null;
  modified_by: null;
}
