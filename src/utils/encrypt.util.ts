import bycript from 'bcrypt';

const DEFAULT_SALT_ROUNDS = 10;

export function hashString({ text }: { text: string }) {
  return bycript.hashSync(text, DEFAULT_SALT_ROUNDS);
}
