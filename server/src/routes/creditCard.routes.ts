import { Router, Request, Response } from 'express';
import { validateCardNumber } from '../middleware/validate';

const router = Router();

interface ValidateCardRequest extends Request {
  body: {
    number: string;
  };
};

router.post('/validate', validateCardNumber, (req: ValidateCardRequest, res: Response) => {
  return res.status(201).json({
    message: 'Valid card number!',
  });
});

export default router;