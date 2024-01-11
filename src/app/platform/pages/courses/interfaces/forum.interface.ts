export interface Forum {
  count:    number;
  next:     null;
  previous: null;
  results:  Post[];
}

export interface Post {
  id?:          number;
  comments?:    Comment[];
  created_at?:  Date;
  modified_at?: Date;
  status?:      number;
  title:       string;
  description: string;
  created_by?:  UserComment;
  modified_by?: null;
  course:      number;
  comment?:   string;
  show_comment?: boolean;
}

export interface Comment {
  id:          number;
  created_at:  Date;
  modified_at: Date;
  status:      number;
  description: string;
  created_by:  UserComment;
  modified_by: null;
  post:        number;
}

interface UserComment {
  first_name: string;
  last_name: string;
}
