export interface LoginResponse {
  token: string;
  user: User;
}

interface User {
  pk: string;
  username: string;
  email: string;
  first_name: string;
  last_name: string;
}
