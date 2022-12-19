import { IUser } from "../../models/user.model";
import { insertUser, findUserByEmail } from "../../repositories/user/user.repository";
import { hashString } from "../../utils/encrypt.util";

export async function createUser({ user } : { user: Omit<IUser, 'id' | 'createdAt' | 'updatedAt'> }) {
  if (findUserByEmail({ email: user.email })) throw new Error('user already created');

  const passwordHashed = hashString({ text: user.password });
  const userSanitized = {
    ...user,
    password: passwordHashed,
  };

  return insertUser({ user: userSanitized });
}
