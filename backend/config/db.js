import mongoose from 'mongoose'

export const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URI?.trim()
    if (!uri) {
      throw new Error('MONGO_URI is not defined')
    }

    await mongoose.connect(uri)
    console.log('✅ MongoDB Connected')
  } catch (error) {
    console.error('❌ MongoDB connection failed:', error.message)
    process.exit(1)
  }
}
