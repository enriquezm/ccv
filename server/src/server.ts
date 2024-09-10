import express, { Request, Response } from 'express';
import path from 'path';
import creditCardRoute from './routes/creditCard.routes';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api/v1/card', creditCardRoute);

interface ErrorWithStatus extends Error {
  status?: number;
};

// global middleware to handle missed errors
app.use((error: ErrorWithStatus, req: Request, res: Response ) => {
  console.error(`Unhandled error: ${error.message}`);

  res.status(error.status || 500).json({
    message: error.message || 'Internal server error',
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;