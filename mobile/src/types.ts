import { User, Note, PersonCreateInput } from '../../core/prisma-client';

export interface MergedNote extends Note {
  user: Partial<User>;
}

export interface UserDetails {
  id: string;
  name: string;
  email: string;
  jwt: string;
  contactSites: Array<{
    id: string;
    country: string;
  }>;
}

export interface OfflinePerson extends PersonCreateInput {
  id: string;
}
