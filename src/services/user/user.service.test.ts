import { createUser } from "./user.service";

describe('Create user', () => {
  test('when data is correct then create user', async () => {
    const output = await createUser({
      user: {
        name: 'Nome teste',
        email: 'email@teste.com.br',
        password: '123456',
      }
    });

    expect(output.name).toBe('Nome teste');
    expect(output.email).toBe('email@teste.com.br');
    expect(output.createdAt).toBeDefined();
    expect(output.updatedAt).toBeDefined();
  });

  test('when user already created then throw error', async () => {
    try {
      const userInput = {
        name: 'Nome teste',
        email: 'email@teste.com.br',
        password: '123456',
      };

      await createUser({
        user: userInput
      });

      await createUser({
        user: userInput
      });
    } catch (err) {
      const error = err as Error;
      expect(error.message).toBe('user already created');
    }
  });
});