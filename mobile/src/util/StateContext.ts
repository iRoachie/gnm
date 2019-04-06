import React from 'react';
import { ContactSite, PersonCreateInput } from '../../../core/prisma-client';
import { UserDetails } from '../types';

type Values = {
  isTablet: boolean;
  connected: boolean;
  offlineChanged: number;
  addOfflineContact: (details: PersonCreateInput) => void;
  getOfflineContacts: () => Promise<Array<PersonCreateInput>> | void;
  getSites: () => Promise<Array<ContactSite>> | void;
  getUser: () => Promise<UserDetails> | void;
  updateUser: (details: UserDetails | null) => void;
  removeOfflineContacts: () => Promise<void> | void;
};

const StateContext = React.createContext<Values>({
  isTablet: false,
  connected: true,
  offlineChanged: 0,
  addOfflineContact: () => {},
  getOfflineContacts: () => {},
  getSites: () => {},
  getUser: () => {},
  updateUser: () => {},
  removeOfflineContacts: () => {},
});

export default StateContext;
