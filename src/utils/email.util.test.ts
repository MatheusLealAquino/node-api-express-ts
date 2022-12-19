import { isValidEmail } from "./email.util";

describe('Is valid email', () => {
  test('when is valid email then return true', async () => {
    const output = isValidEmail({
      email: 'matheus@gmail.com'
    });

    expect(output).toBeTruthy();
  });

  test('when is not valid email then return false', async () => {
    const output = isValidEmail({
      email: 'matheus@gmail'
    });

    expect(output).toBeFalsy();
  });
});
