import React from 'react';
import { ContactSite } from '../../../core/prisma-client';

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
  getSites: () => Promise<Array<ContactSite>> | void;
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => void;
};

const AuthContext = React.createContext<Values>({
  getSites: () => {},
  getUser: () => {},
  updateUser: () => {},
});

export default AuthContext;
