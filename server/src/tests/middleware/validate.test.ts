import { isLengthValid, passedLuhnsAlgo, isEmpty, isNumeric } from '../../middleware/validate';

describe('Validate with Luhn Algorithm', () => {
  it('should return false for 16 digit number', () => {
    const result = passedLuhnsAlgo('5849039485960238');
  
    expect(result).toBe(false);
  });
  
  it('should return false for 13 digit number', () => {
    const result = passedLuhnsAlgo('1234567890786');
    expect(result).toBe(false);
  });
  
  it('should return false for 15 digit number', () => {
    const result = passedLuhnsAlgo('748392836459872');
    expect(result).toBe(false);
  });
  
  it('should return false for 19 digit number', () => {
    const result = passedLuhnsAlgo('7484758293846374839');
    expect(result).toBe(false);
  });
  
  it('should return true for 16 digit number', () => {
    const result = passedLuhnsAlgo('0998511974560732');
  
    expect(result).toBe(true);
  });
  
  it('should return true for 13 digit number', () => {
    const result = passedLuhnsAlgo('605020171299586');
  
    expect(result).toBe(true);
  });

  it('should return true for 15 digit number', () => {
    const result = passedLuhnsAlgo('575675516377581');
  
    expect(result).toBe(true);
  });

  it('should return true for 19 digit number', () => {
    const result = passedLuhnsAlgo('0074456759133516497');
  
    expect(result).toBe(true);
  });
});

describe('Validate is empty', () => {
  it('should return true for empty string', () => {
    const result = isEmpty('');

    expect(result).toBe(true);
  });

  it('should return false for non-empty string', () => {
    const result = isEmpty('1234567890123');

    expect(result).toBe(false);
  });
});

describe('Validate is numeric', () => {
  it('should return false for non-numeric string', () => {
    const result = isNumeric('123456789012a');

    expect(result).toBe(false);
  });

  it('should return true for numeric string', () => {
    const result = isNumeric('1234567890123');

    expect(result).toBe(true);
  });
});

describe('Validate card length', () => {
  it('should return false for 12 digit number', () => {
    const result = isLengthValid('123456789012');

    expect(result).toBe(false);
  });

  it('should return false for 20 digit number', () => {
    const result = isLengthValid('12345678901234567890');

    expect(result).toBe(false);
  });

  it ('should return true for 13 digit number', () => {
    const result = isLengthValid('1234567890123');

    expect(result).toBe(true);
  });
});
