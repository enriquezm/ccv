import express, { Request, Response } from 'express';
import path from 'path';
import { validate } from './middleware/validate';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api', validate, router);

// global middleware to handle missed errors
app.use((error: Error, req: Request, res: Response ) => {
  console.error(`Unhandled error: ${error.message}`);

  res.status(500).json({
    message: 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;