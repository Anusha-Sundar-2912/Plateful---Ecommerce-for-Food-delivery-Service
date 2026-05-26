import express from 'express';
import { platformMetrics } from '../config/metrics.js';

const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).json({
    success: true,
    metrics: platformMetrics,
  });
});

export default router;
