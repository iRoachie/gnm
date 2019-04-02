import React from 'react';

interface UserDetails {
  id: string;
  name: string;
  email: string;
  jwt: string;
}

type Values = {
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => Promise<void> | void;
};

const AuthContext = React.createContext<Values>({
  getUser: () => {},
  updateUser: () => {},
});

export default AuthContext;
