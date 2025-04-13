import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/db'
import routes from './routes/routes'
import logger from './config/logger'

dotenv.config()

const app = express()
const port = process.env.PORT || 5000

// Middleware
app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:3001'], // Customer and Dashboard apps
    credentials: true
}))
app.use(express.json({ limit: '10mb' }))
app.use(express.urlencoded({ extended: true }))

// Routes
app.use('/api', routes)

// Health check
app.get('/', (req, res) => {
    res.json({ 
        message: 'Chafetz API Server is running!',
        version: '1.0.0',
        status: 'healthy'
    })
})

// Error handling middleware
app.use((err: any, req: express.Request, res: express.Response, next: express.NextFunction) => {
    logger.error('Unhandled error:', err)
    res.status(500).json({
        ok: false,
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? err.message : 'Something went wrong'
    })
})

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        ok: false,
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.originalUrl}`
    })
})

// Start server
const startServer = async () => {
    try {
        await connectDB()
        app.listen(port, () => {
            console.log(`🚀 Server is running on port ${port}`)
            console.log(`📍 API Base URL: http://localhost:${port}/api`)
            logger.info(`Server started on port ${port}`)
        })
    } catch (error) {
        console.error('Failed to start server:', error)
        logger.error('Failed to start server:', error)
        process.exit(1)
    }
}

startServer()
