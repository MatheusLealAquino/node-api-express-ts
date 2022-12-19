import request from 'supertest';

import app from '../../../app';

describe('POST user', () => {
  test('when email is not send then throw error', async () => {
    const { body, status } = await request(app)
      .post('/v1/user')
      .send({
       name: 'Nome teste',
       password: '123456', 
      });

    expect(status).toBe(400);
    expect(body.message).toBe('email is required');
  });

  test('when name is not send then throw error', async () => {
    const { body, status } = await request(app)
      .post('/v1/user')
      .send({
       email: 'matheus@teste.com',
       password: '123456', 
      });

    expect(status).toBe(400);
    expect(body.message).toBe('name is required');
  });

  test('when password do not have minimum of characters then throw error', async () => {
    const { body, status } = await request(app)
      .post('/v1/user')
      .send({
       name: 'Nome teste',
       email: 'matheus@teste.com',
       password: '123', 
      });

    expect(status).toBe(400);
    expect(body.message).toBe('password need have at least 6 characters');
  });

  test('when email is not valid then throw error', async () => {
    const { body, status } = await request(app)
      .post('/v1/user')
      .send({
       name: 'Nome teste',
       email: 'matheus@teste',
       password: '12356', 
      });

    expect(status).toBe(400);
    expect(body.message).toBe('email is not valid');
  });
});
