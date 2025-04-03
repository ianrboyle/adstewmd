export type LoggedInData = {
  jwt: string;
  user: User;
};

export type User = {
  id: number;
  email: string;
};
