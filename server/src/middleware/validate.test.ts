import { validate } from './validate';

describe('validate', () => {
  it('should return card is valid', () => {
    const result = validate('1234');
    ``
    expect(result).toBe('card is valid');
  });
});