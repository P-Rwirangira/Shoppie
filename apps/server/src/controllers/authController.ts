/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import User from '../database/models/User'
import { userToken } from '../helpers/tokenGenerator'
import { sendInternalErrorResponse, validateEmail, validatePassword } from '../validator'
import logger from '../helpers/logger'
import { passwordEncrypt, passwordCompare } from '../helpers/encrypt'
import { sendEmail } from '../helpers/sendEmail'
import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

export const loginUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password } = req.body

        if (!validateEmail(email)) {
            res.status(400).json({
                ok: false,
                error: 'Invalid email format',
            })
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                ok: false,
                error: 'User not found',
            })
            return
        }

        if (!user.password) {
            logger.error('User password is null or undefined')
            res.status(500).json({ ok: false, error: 'Internal server error' })
            return
        }

        const isPasswordValid = await passwordCompare(password, user.password)
        if (!isPasswordValid) {
            res.status(400).json({ ok: false, error: 'Invalid password' })
            return
        }

        const token = await userToken(user._id.toString(), user.email)
        res.status(200).json({ ok: true, message: 'Login successful', token })
    } catch (error) {
        logger.error('Error logging in user:', error)
        sendInternalErrorResponse(res, error)
    }
}

export const forgotPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body

        if (!validateEmail(email)) {
            res.status(400).json({ ok: false, error: 'Invalid email format' })
            return
        }

        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({ ok: false, error: 'User not found' })
            return
        }

        if (!process.env.URL_HOST) {
            logger.error('URL_HOST is undefined')
            res.status(500).json({ ok: false, error: 'Internal server error' })
            return
        }

        const token = await userToken(user._id.toString(), user.email)
        const verifyLink = `${process.env.URL_HOST}/api/auth/verify/${token}`

        await sendEmail('account_verify', {
            name: user.firstName,
            email,
            link: verifyLink,
        })

        res.status(200).json({ ok: true, message: 'Verification link sent to your email' })
    } catch (error) {
        logger.error('Error in forgot password:', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function for resetting password
export const resetPassword = async (req: Request, res: Response): Promise<void> => {
    try {
        const { token } = req.params
        const { newPassword } = req.body

        if (!validatePassword(newPassword)) {
            res.status(400).json({
                ok: false,
                error: 'Password must contain at least 1 letter, 1 number, and 1 special character, minimum 8 characters',
            })
            return
        }

        if (!process.env.SECRET_KEY) {
            logger.error('SECRET_KEY is undefined')
            res.status(500).json({ ok: false, error: 'Internal server error' })
            return
        }

        const decoded: any = jwt.verify(token, process.env.SECRET_KEY as string)
        const user = await User.findById(decoded.id)

        if (!user) {
            res.status(400).json({ ok: false, error: 'User not found' })
            return
        }

        const hashedPassword = await passwordEncrypt(newPassword)
        user.password = hashedPassword
        await user.save()

        res.status(200).json({ ok: true, message: 'Password reset successfully' })
    } catch (error) {
        logger.error('Error resetting password:', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function to verify account
export const verifyAccount = async (req: Request, res: Response): Promise<void> => {
    try {
        const { token } = req.params

        if (!process.env.SECRET_KEY) {
            logger.error('SECRET_KEY is undefined')
            res.status(500).json({ ok: false, error: 'Internal server error' })
            return
        }

        const decoded: any = jwt.verify(token, process.env.SECRET_KEY as string)
        const user = await User.findById(decoded.id)

        if (!user) {
            res.status(400).json({ ok: false, error: 'User not found' })
            return
        }

        user.verified = true
        await user.save()

        res.status(200).json({ ok: true, message: 'Account verified successfully' })
    } catch (error) {
        logger.error('Error verifying account:', error)
        sendInternalErrorResponse(res, error)
    }
}

export const updatePassword = async (req: Request, res: Response) => {
    try {
        const user = (req as any).user
        const { currentPassword, newPassword } = req.body

        if (!validatePassword(newPassword)) {
            res.status(400).json({
                ok: false,
                error: 'Password must contain at least 1 letter, 1 number, and 1 special character, minimum 8 characters',
            })
            return
        }

        if (!user.password) {
            logger.error('User password is null or undefined')
            res.status(500).json({ ok: false, error: 'Internal server error' })
            return
        }

        const isCurrentPasswordValid = await passwordCompare(currentPassword, user.password)
        if (!isCurrentPasswordValid) {
            res.status(400).json({
                ok: false,
                error: 'Current password is incorrect',
            })
            return
        }

        const hashedPassword = await passwordEncrypt(newPassword)
        user.password = hashedPassword
        await user.save()

        res.status(200).json({ ok: true, message: 'Password updated successfully' })
    } catch (error) {
        logger.error('Error updating password:', error)
        sendInternalErrorResponse(res, error)
    }
}
