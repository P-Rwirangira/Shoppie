import { Router } from 'express'
import {
    getCart,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    moveToWishlist,
    checkCartInventory,
} from '../controllers/cartController'
import { isAuthenticated } from '../middleware/isAuthenticated'

const router = Router()

// Get user's cart
router.get('/', isAuthenticated, getCart)

// Add item to cart
router.post('/', isAuthenticated, addToCart)

// Update cart item quantity
router.patch('/items/:itemId', isAuthenticated, updateCartItem)

// Remove item from cart
router.delete('/items/:itemId', isAuthenticated, removeFromCart)

// Clear cart
router.delete('/', isAuthenticated, clearCart)

// Move cart item to wishlist
router.post('/items/:itemId/move-to-wishlist', isAuthenticated, moveToWishlist)

// Check cart inventory
router.get('/check-inventory', isAuthenticated, checkCartInventory)

export default router
