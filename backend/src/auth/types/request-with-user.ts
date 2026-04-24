import { Role } from '@prisma/client';

export type RequestWithUser = Request & {
  user: {
    id: string;
    email: string;
    role: Role;
  };
};
