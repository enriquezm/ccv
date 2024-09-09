import { Router } from 'express';
import { validateCardNumber } from '../middleware/validate';

const router = Router();

router.post('/validate', validateCardNumber, (req, res) => {
  return res.status(200).json({
    message: 'Valid card number!',
  });
});

export default router;