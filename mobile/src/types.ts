import {
  User,
  Note,
  PersonCreateInput,
  PersonStatus,
  ContactSite,
  Person,
  UserRole,
} from '../../core/prisma-client';

export interface MergedNote extends Note {
  user: Partial<User>;
}

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  jwt: string;
  role: UserRole;
  contactSites: Array<{
    id: string;
    country: string;
  }>;
}

export interface OfflinePerson extends PersonCreateInput {
  id: string;
}

export interface MergedPerson extends Person {
  __typename: string;
  notes: MergedNote[];
  status: Partial<PersonStatus>;
  contactSite: ContactSite;
}
