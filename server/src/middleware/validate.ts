import { NextFunction, Request, Response } from 'express';

interface ValidateCardRequest extends Request {
  body: {
    number: string;
  };
};

export const validateCardNumber = (req: ValidateCardRequest, res: Response, next: NextFunction) => {
  const { number } = req.body;

    // enhancement: move to client side
    if (isEmpty(number)) {
      return res.status(400).json({
        message: 'Card number is required and cannot be empty',
      });
    }
  
    // enhancement: move to client side
    if (!isNumeric(number)) {
      return res.status(400).json({
        message: 'Card number must contain only digits',
      });
    }
  
    // enheancement: move to client side
    if (!isLengthValid(number)) {
      return res.status(400).json({
        message: 'Card number must be between 13 and 19 digits',
      });
    }
  
    if (!passedLuhnsAlgo(number)) {
      return res.status(400).json({
        message: 'Invalid card number',
      });
    }
  
    next();
};

export const passedLuhnsAlgo = (cardNum: string): boolean => {
  const reversedDigits = cardNum.split('').reverse().map(Number);
  const sum = reversedDigits.reduce((acc, digit, index) => {
    if (index % 2 !== 0) {
      const doubledDigit = digit * 2;

      return acc + (doubledDigit > 9 ? doubledDigit - 9 : doubledDigit);
    }

    return acc + digit;
  }, 0);

  return sum % 10 === 0;
};

export const isEmpty = (cardNum: string): boolean => {
  return cardNum === '';
};

export const isNumeric = (cardNum: string): boolean => {
  return /^\d+$/.test(cardNum);
};

export const isLengthValid = (cardNum: string): boolean => {
  return cardNum.length >= 13 && cardNum.length <= 19;
};
