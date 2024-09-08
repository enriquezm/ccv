import { Router } from 'express';

const router = Router();

router.get('/helloworld', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

router.post('/validate', (req, res) => {
  return res.status(200).json({
    message: 'Valid card number',
    data: {
      number: req.body.number
    }
  });
});

export default router;