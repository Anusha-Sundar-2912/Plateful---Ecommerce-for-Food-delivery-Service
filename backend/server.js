import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';

import { connectDB } from './config/db.js';

import userRouter from './routes/userRoute.js';
import cartRouter from './routes/cartRoute.js';
import itemRouter from './routes/itemRoute.js';
import orderRouter from './routes/orderRoute.js';
import metricsRoutes from './routes/metricsRoutes.js';

const app = express();
const port = process.env.PORT || 4000;

/* ---------- Middleware ---------- */

app.use(cors({
  origin: true,
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/* ---------- Routes ---------- */

app.use('/api/metrics', metricsRoutes);
app.use('/api/user', userRouter);
app.use('/api/cart', cartRouter);
app.use('/api/items', itemRouter);
app.use('/api/orders', orderRouter);

/* ---------- Health Check ---------- */

app.get('/', (req, res) => {
  res.send('API WORKING');
});

/* ---------- DB + Server ---------- */

connectDB();

app.listen(port, () => {
  console.log(`Server Started on port ${port}`);
});