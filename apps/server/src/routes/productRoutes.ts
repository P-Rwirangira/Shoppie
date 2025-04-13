import { Router } from 'express'
import {
    createProduct,
    getAllProducts,
    getProductById,
    updateProduct,
    deleteProductById as deleteProduct,
    searchProducts,
    getProductsByCategory,
} from '../controllers/productsController'
import { isAuthenticated, checkUserRoles } from '../middleware/isAuthenticated'

const router = Router()

// Public routes
router.get('/', getAllProducts)
router.get('/search', searchProducts)
router.get('/category/:categoryId', getProductsByCategory)
router.get('/:id', getProductById)

// Seller/Admin routes
router.post('/', isAuthenticated, checkUserRoles('seller'), createProduct)
router.patch('/:id', isAuthenticated, checkUserRoles('seller'), updateProduct)
router.delete('/:id', isAuthenticated, checkUserRoles('seller'), deleteProduct)

export default router