// tests/routes.test.js
import request from 'supertest';
import app from '../../server';

const VALIDATION_ENDPOINT = '/api/v1/ccv/validate';

describe('POST /api/v1/ccv/validate', () => {
  it('should return success message', async () => {
    const payload = { "number": "0998511974560732" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe('Valid card number!');
  });

  it('should return error for number length less than 13', async () => {
    const payload = { "number": "123456789012" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);
  
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Card number must be between 13 and 19 digits');
  });
  
  it('should return error for number length more than 19', async () => {
    const payload = { "number": "12345678901234567892" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);
  
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Card number must be between 13 and 19 digits');
  });
  
  it('should return error for empty number', async () => {
    const payload = { "number": "" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);
  
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Card number is required and cannot be empty');
  });
  
  it('should return error for non-numeric characters in number', async () => {
    const payload = { "number": "1234abcd5678efgh" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);
  
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Card number must contain only digits');
  });
  
  it('should return error for number with spaces', async () => {
    const payload = { "number": "1234 5678 9012 3456" };
    const res = await request(app).post(VALIDATION_ENDPOINT).send(payload);
  
    expect(res.status).toBe(400);
    expect(res.body.message).toBe('Card number must contain only digits');
  });
});