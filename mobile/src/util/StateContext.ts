import React from 'react';
import { ContactSite } from '../../../core/prisma-client';
import { UserDetails } from '../types';

type Values = {
  connected: boolean;
  getSites: () => Promise<Array<ContactSite>> | void;
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => void;
};

const StateContext = React.createContext<Values>({
  connected: true,
  getSites: () => {},
  getUser: () => {},
  updateUser: () => {},
});

export default StateContext;
