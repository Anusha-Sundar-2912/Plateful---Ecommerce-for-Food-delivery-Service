import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import cors from 'cors'
import path from 'path'
import { fileURLToPath } from 'url'

import { connectDB } from './config/db.js'

import userRouter from './routes/userRoute.js'
import cartRouter from './routes/cartRoute.js'
import itemRouter from './routes/itemRoute.js'
import orderRouter from './routes/orderRoute.js'
import metricsRoutes from './routes/metricsRoutes.js'

const app = express()
const port = process.env.PORT || 4000

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

/* ---------- Middleware ---------- */

app.use(
  cors({
    origin: (origin, callback) => {
      const allowedOrigins = [
        'http://localhost:5173',
        'http://localhost:5174',
      ]
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true)
      } else {
        callback(new Error('Not allowed by CORS'))
      }
    },
    credentials: true,
  })
)

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

/* ---------- Routes ---------- */

app.use('/api/metrics', metricsRoutes)
app.use('/api/user', userRouter)
app.use('/api/cart', cartRouter)
app.use('/api/items', itemRouter)
app.use('/api/orders', orderRouter)

app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

/* ---------- Health Check ---------- */

app.get('/', (req, res) => {
  res.send('API WORKING')
})

/* ---------- DB + Server ---------- */

connectDB()

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`)
})
