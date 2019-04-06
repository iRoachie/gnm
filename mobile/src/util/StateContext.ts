import React from 'react';
import { ContactSite, PersonCreateInput } from '../../../core/prisma-client';
import { UserDetails } from '../types';

type Values = {
  connected: boolean;
  addOfflineContact: (details: PersonCreateInput) => void;
  getOfflineContacts: () => Promise<Array<PersonCreateInput>> | void;
  getSites: () => Promise<Array<ContactSite>> | void;
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => void;
};

const StateContext = React.createContext<Values>({
  connected: true,
  addOfflineContact: () => {},
  getOfflineContacts: () => {},
  getSites: () => {},
  getUser: () => {},
  updateUser: () => {},
});

export default StateContext;
