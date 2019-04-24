import {
  User,
  Note,
  PersonCreateInput,
  PersonStatus,
  ContactSite,
  Person,
  UserRole,
  Team,
} from '../../core/prisma-client';

export interface MergedNote extends Note {
  user: Partial<User>;
}

export interface ReturnedUserRole extends UserRole {
  permissions: String[];
}

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  jwt: string;
  role: ReturnedUserRole;
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

export interface ReturnedTeam extends Team {
  contactSite: ContactSite;
}
