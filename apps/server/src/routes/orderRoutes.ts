import { Router } from 'express'
import {
    createOrder,
    getAllOrders,
    getUserOrders,
    getOrderById,
    updateOrderStatus,
    cancelOrder,
    trackOrder,
} from '../controllers/orderController'
import { isAuthenticated, checkUserRoles } from '../middleware/isAuthenticated'

const router = Router()

// Create a new order (requires authentication)
router.post('/', isAuthenticated, createOrder)

// Get all orders (admin only)
router.get('/admin', isAuthenticated, checkUserRoles('admin'), getAllOrders)

// Get current user's orders
router.get('/my-orders', isAuthenticated, getUserOrders)

// Get order by ID
router.get('/:orderId', isAuthenticated, getOrderById)

// Update order status (admin only)
router.patch('/:orderId/status', isAuthenticated, checkUserRoles('admin'), updateOrderStatus)

// Cancel an order
router.patch('/:orderId/cancel', isAuthenticated, cancelOrder)

// Track an order
router.get('/:orderId/track', isAuthenticated, trackOrder)

export default router
