import { Router } from 'express'
import authRoutes from './authRoutes'
import userRoutes from './userRoutes'
import productRoutes from './productRoutes'
import permissionRoutes from './permissionRoutes'
import roleRoutes from './roleRoutes'
import wishlistRoutes from './wishlistRoutes'
import orderRoutes from './orderRoutes'
import cartRoutes from './cartRoutes'

const router = Router()

// Add all routes
router.use('/auth', authRoutes)
router.use('/users', userRoutes)
router.use('/products', productRoutes)
router.use('/permissions', permissionRoutes)
router.use('/roles', roleRoutes)
router.use('/wishlist', wishlistRoutes)
router.use('/orders', orderRoutes)
router.use('/cart', cartRoutes)

// Health check for API
router.get('/health', (req, res) => {
    res.json({ 
        ok: true, 
        message: 'API is healthy',
        timestamp: new Date().toISOString()
    })
})

// Handle all undefined routes (catch-all)
router.all('*', (req, res) => {
    res.status(404).json({ 
        ok: false,
        error: 'Route not found',
        message: `Cannot ${req.method} ${req.originalUrl}`
    })
})

export default router
