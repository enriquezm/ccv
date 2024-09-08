import { Request, Response, NextFunction } from 'express';

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const { number } = req.body;

    // enheancement: move to client side
    if (isEmpty(number)) {
      return res.status(400).json({
        message: 'Card number is required',
      });
    }
  
    // enheancement: move to client side
    if (!isNumeric(number)) {
      return res.status(400).json({
        message: 'Card number must be a number',
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
  // reverse the card number
  const reversedCardNum = cardNum.split('').reverse().map(Number);

  // iterate through reversed card number
  let sum = 0;

  for (let i = 0; i < reversedCardNum.length; i++) {
    if (i % 2 !== 0) {
      // double the number
      // if greater than 9 substract 9 and add to sum
      if (reversedCardNum[i] * 2 > 9) {
        sum += reversedCardNum[i] * 2 - 9;
      } else {
        sum += reversedCardNum[i] * 2;
      }
    } else {
      // else odd, add to sum
      sum += reversedCardNum[i];
    }
  }

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
