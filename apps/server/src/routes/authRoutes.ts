import { Router } from 'express'
import {
    loginUser,
    forgotPassword,
    resetPassword,
    updatePassword,
    verifyAccount,
} from '../controllers/authController'
import { isAuthenticated } from '../middleware/isAuthenticated'

const router = Router()

router.post('/login', loginUser)
router.post('/forgot-password', forgotPassword)
router.post('/reset-password/:token', isAuthenticated, resetPassword)
router.post('/update-password', isAuthenticated, updatePassword)
router.get('/verify/:token', verifyAccount)

export default router
