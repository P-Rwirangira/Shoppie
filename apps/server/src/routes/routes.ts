import { Router } from 'express'
import userRoutes from './userRoute'
import authRoutes from './authRoutes'
import permissionRoutes from './permissionRoutes'
import roleRoutes from './roleRoutes'
import categoriesRoutes from './categoriesRoutes'
import productRoutes from './productRoutes'
import wishlistRoutes from './wishlistRoutes'
import orderRoutes from './orderRoutes'
import cartRoutes from './cartRoutes'

const router = Router()

// Add all routes
router.use('/users', userRoutes)
router.use('/auth', authRoutes)
router.use('/permissions', permissionRoutes)
router.use('/roles', roleRoutes)
router.use('/categories', categoriesRoutes)
router.use('/products', productRoutes)
router.use('/wishlist', wishlistRoutes)
router.use('/orders', orderRoutes)
router.use('/cart', cartRoutes)

// Handle all undefined routes (catch-all)
router.all('*', (req, res) => {
    res.status(404).json({ message: 'Route not found' })
})

export default router
