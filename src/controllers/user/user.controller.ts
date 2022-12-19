import { IUser } from '../../models/user.model';

import { createUser } from '../../services/user/user.service';

export async function createUserController({ user }: { user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> }) {
  const createdUser = await createUser({ user });
  return createdUser;
}
