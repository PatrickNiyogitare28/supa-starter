import 'dotenv/config';
import './database/index';
import express from 'express';
import authRoutes from './routes/auth.routes'

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Hello World' }).status(200);
});

app.use('/api/v1/auth', authRoutes)

const PORT = 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));