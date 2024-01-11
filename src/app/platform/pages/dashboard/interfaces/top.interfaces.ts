export interface Top {
  first_name: string;
  last_name: string;
  location: string;
  company: Company;
  username: string;
  points: number;
  real_points: number;
}

interface Company {
  name: string;
  position: string;
}
