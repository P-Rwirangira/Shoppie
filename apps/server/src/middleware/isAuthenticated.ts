/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import logger from '../helpers/logger'
import User from '../database/models/User'
import { sendInternalErrorResponse } from '../validator'

export const isAuthenticated = async (
    req: Request,
    res: Response,
    next: NextFunction
): Promise<void> => {
    try {
        const token = req.headers.authorization?.includes('Bearer')
            ? req.headers.authorization.split(' ')[1]
            : (req.headers.authorization ?? req.params.token)

        if (!token) {
            logger.error('Authentication required.')
            res.status(401).json({ message: 'Authentication required.' })
            return
        }

        const decoded: any = jwt.verify(token, process.env.SECRET_KEY!)

        const user = await User.findById(decoded.id).populate('RoleId', 'name')

        if (!user) {
            logger.error('Authorized user not found')
            res.status(404).json({ message: 'Authorized user not found.' })
            return
        }

        ;(req as any).user = user

        next()
    } catch (error) {
        if (error instanceof jwt.TokenExpiredError) {
            logger.error('Token has expired.')
            res.status(401).json({ message: 'Token has expired.' })
            return
        }
        logger.error('Error while checking authentication.', error)
        sendInternalErrorResponse(res, error)
    }
}

// Middleware to check user roles
type UserRole = 'admin' | 'buyer' | 'seller'
export const checkUserRoles = (requiredRole: UserRole) => {
    return async (req: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            // Use a type assertion to access `req.user`
            const user = (req as any).user

            if (!user || requiredRole !== user.RoleId.name) {
                logger.alert(
                    `User role mismatch: Required ${requiredRole}, but user has ${user?.RoleId.name || 'no role'}.`
                )
                logger.error('Access denied: Your role does not permit this action.')
                res.status(403).json({
                    message: 'Access denied: Your role does not permit this action.',
                })
                return
            }

            next()
        } catch (error) {
            logger.error('Error in role checking middleware:', error)
            res.status(500).json({
                message: 'An error occurred while checking user roles.',
            })
        }
    }
}
