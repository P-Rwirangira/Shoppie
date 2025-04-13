import { Router } from 'express'
import {
    signupUser as createUser,
    getAllUser as getAllUsers,
    getOneUser as getUserById,
    editUser as updateUser,
    deleteUser,
    editUser as getUserProfile,
    editUser as updateUserProfile,
} from '../controllers/userController'
import { isAuthenticated, checkUserRoles } from '../middleware/isAuthenticated'

const router = Router()

// Public routes
router.post('/', createUser) // Register new user

// Protected routes - using getOneUser for profile (will need user ID from token)
router.get('/profile', isAuthenticated, (req, res) => {
    // Get user ID from authenticated request and call getOneUser
    req.params.id = (req as any).user._id.toString()
    getUserById(req, res)
})
router.patch('/profile', isAuthenticated, (req, res) => {
    // Get user ID from authenticated request and call editUser
    req.params.id = (req as any).user._id.toString()
    updateUserProfile(req, res)
})

// Admin only routes
router.get('/', isAuthenticated, checkUserRoles('admin'), getAllUsers)
router.get('/:id', isAuthenticated, checkUserRoles('admin'), getUserById)
router.patch('/:id', isAuthenticated, checkUserRoles('admin'), updateUser)
router.delete('/:id', isAuthenticated, checkUserRoles('admin'), deleteUser)

export default router