import cors from 'cors';
import express from 'express';
import { env } from './config/env.js';
import { errorHandler, notFound } from './middleware/errorHandler.js';
import healthRoutes from './routes/healthRoutes.js';

const app = express();

app.disable('x-powered-by');
app.use(cors({ origin: env.clientOrigin }));
app.use(express.json({ limit: '1mb' }));
app.use('/api', healthRoutes);
app.use(notFound);
app.use(errorHandler);

export default app;