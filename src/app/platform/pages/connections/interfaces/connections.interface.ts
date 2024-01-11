export interface ConnectionResponse {
  count:    number;
  next:     string;
  previous: string;
  results:  Connection[];
}

export interface Connection {
  id:          number;
  teacher:     Teacher;
  created_at:  Date;
  modified_at: Date;
  status:      number;
  location:    string;
  meet:    string;
  start_date:  Date;
  end_date:    Date;
  name:        string;
  quota:       number;
  session:     number;
  created_by:  string;
  modified_by: string;
  assistance_connection:   Assistance[];
}

export interface ConnectionSimple {
  id: number;
  name: string;
  start_date: Date;
  end_date: Date;
  assisted_at: Date;
  youtube_url?: string;
}

interface Teacher {
  id:   number;
  name: string;
}

interface Assistance {
  user:   string;
  assisted_at: Date;
  points: number;
}
