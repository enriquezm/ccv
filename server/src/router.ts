import { Router } from 'express';

const router = Router();

router.post('/validate', (req, res) => {  
  res.json({ message: 'Data received successfully', data: { number: req.body.number } });
});

export default router;