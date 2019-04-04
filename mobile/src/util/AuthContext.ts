import React from 'react';

interface UserDetails {
  id: string;
  name: string;
  email: string;
  jwt: string;
  contactSites: Array<{
    id: string;
    country: string;
  }>;
}

type Values = {
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => void;
};

const AuthContext = React.createContext<Values>({
  getUser: () => {},
  updateUser: () => {},
});

export default AuthContext;
