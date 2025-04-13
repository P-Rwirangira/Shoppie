import mongoose from 'mongoose'
import logger from './logger'
import dotenv from 'dotenv'

dotenv.config()

const connectDB = async (): Promise<void> => {
    try {
        const mongoURI = process.env.MONGO_URI || 'mongodb://localhost:27017/chafetz'
        
        await mongoose.connect(mongoURI)
        
        console.log('✅ MongoDB connected successfully')
        logger.info('MongoDB connected successfully')
    } catch (error) {
        console.error('❌ MongoDB connection failed:', error)
        logger.error('MongoDB connection failed:', error)
        process.exit(1)
    }
}

export default connectDB