// tests/routes.test.js
import request from 'supertest';
import app from './server';

describe('GET /api/helloworld', () => {
  it('should return Hello, World!', async () => {
    const res = await request(app).get('/api/helloworld');

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Hello, World!');
  });
});

describe('POST /api/validate', () => {
  it('should return success message', async () => {
    const payload = { "number": 1234 };
    const res = await request(app).post('/api/validate').send(payload);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Data received successfully');
  });
});