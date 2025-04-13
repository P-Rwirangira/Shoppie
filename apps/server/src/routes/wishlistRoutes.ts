import { Router } from 'express'
import { addToWishlist, removeFromWishlist, getWishlist } from '../controllers/wishlistController'
import { isAuthenticated } from '../middleware/isAuthenticated'

const router = Router()

// Add product to wishlist
router.post('/', isAuthenticated, addToWishlist)

// Remove product from wishlist
router.delete('/:productId', isAuthenticated, removeFromWishlist)

// Get user's wishlist
router.get('/', isAuthenticated, getWishlist)

export default router
