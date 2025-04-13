import { Response } from 'express'
import logger from '../config/logger'

export const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
}

export const validatePassword = (password: string): boolean => {
    // At least 8 characters, 1 letter, 1 number, 1 special character
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/
    return passwordRegex.test(password)
}

export const validatePhoneNumber = (phoneNumber: string): boolean => {
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/
    return phoneRegex.test(phoneNumber)
}

export const validateFields = (req: any, requiredFields: string[]): string[] => {
    const missingFields: string[] = []
    
    for (const field of requiredFields) {
        if (!req.body[field] || req.body[field].toString().trim() === '') {
            missingFields.push(field)
        }
    }
    
    return missingFields
}

export const sendInternalErrorResponse = (res: Response, error: any): void => {
    logger.error('Internal server error:', error)
    res.status(500).json({
        ok: false,
        error: 'Internal server error',
        message: process.env.NODE_ENV === 'development' ? error.message : 'Something went wrong'
    })
}