import express from 'express';
import path from 'path';
import router from './router';

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

app.use(express.static(path.join(__dirname, '../../client/dist')));

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;