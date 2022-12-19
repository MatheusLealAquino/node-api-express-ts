export function isValidEmail({ email } : { email: string }) {
  const pattern = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return pattern.test(email);
}
