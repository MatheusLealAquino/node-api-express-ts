import { createUserController } from "./user.controller";

describe('Create user', () => {
  test('when receive correct data then create user', async () => {
    const output = await createUserController({
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
});
