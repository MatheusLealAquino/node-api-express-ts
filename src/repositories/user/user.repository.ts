import { v4 as uuidv4 } from 'uuid';

import { IUser } from '../../models/user.model';

const users: IUser[] = [];

export async function insertUser({ user } : { user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> }) {
  const userToSave = {
    ...user,
    id: uuidv4(),
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  users.push(userToSave);

  return {
    id: userToSave.id,
    name: userToSave.name,
    email: userToSave.email,
    createdAt: userToSave.createdAt,
    updatedAt: userToSave.updatedAt,
  } as IUser;
}

export function findUserByEmail({ email }: { email: string }) {
  return users.find(user => user.email === email);
}