import { User, Note } from '../../core/prisma-client';

export interface MergedNote extends Note {
  user: Partial<User>;
}
