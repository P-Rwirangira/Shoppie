import User, { UserStatus, IUser } from '../models/User'
import Role from '../models/role'
import bcrypt from 'bcrypt'
import dotenv from 'dotenv'
import logger from '../../helpers/logger'
import { Document } from 'mongoose'

dotenv.config()

const validateEnvVariables = (): {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    phoneNumber: string
} => {
    const requiredVars = [
        'ADMIN_FIRST_NAME',
        'ADMIN_LAST_NAME',
        'ADMIN_EMAIL',
        'ADMIN_PASSWORD',
        'ADMIN_GENDER',
        'ADMIN_PHONE_NUMBER',
    ] as const

    for (const varName of requiredVars) {
        if (!process.env[varName]) {
            throw new Error(`Missing required environment variable: ${varName}`)
        }
    }

    return {
        firstName: process.env.ADMIN_FIRST_NAME!,
        lastName: process.env.ADMIN_LAST_NAME!,
        email: process.env.ADMIN_EMAIL!,
        password: process.env.ADMIN_PASSWORD!,
        gender: process.env.ADMIN_GENDER!,
        phoneNumber: process.env.ADMIN_PHONE_NUMBER!,
    }
}

async function seedAdminUser(): Promise<IUser | undefined> {
    try {
        const env = validateEnvVariables()

        const adminRole = await Role.findOne({ name: 'admin' })

        if (!adminRole) {
            logger.error('Admin role not found. Please seed roles first.')
            return undefined
        }

        const adminUser = {
            firstName: env.firstName,
            lastName: env.lastName,
            email: env.email,
            password: await bcrypt.hash(env.password, 10),
            gender: env.gender,
            phoneNumber: env.phoneNumber,
            verified: true,
            status: UserStatus.ACTIVE,
            RoleId: adminRole._id,
            enable2FA: false,
        }

        await User.deleteOne({ email: adminUser.email })
        const createdAdminUser = await User.create(adminUser)

        if (!createdAdminUser) {
            throw new Error('Failed to create admin user')
        }

        // Extract only the fields we need for IUser
        const adminUserData = {
            _id: createdAdminUser._id,
            firstName: createdAdminUser.firstName,
            lastName: createdAdminUser.lastName,
            email: createdAdminUser.email,
            password: createdAdminUser.password,
            gender: createdAdminUser.gender,
            phoneNumber: createdAdminUser.phoneNumber,
            verified: createdAdminUser.verified,
            status: createdAdminUser.status,
            role: 'admin',
            photoUrl: createdAdminUser.photoUrl,
        } as IUser & Document

        logger.info('Admin user seeded successfully')
        return adminUserData
    } catch (error) {
        logger.error('Error seeding admin user:', error)
        return undefined
    }
}

export default seedAdminUser
