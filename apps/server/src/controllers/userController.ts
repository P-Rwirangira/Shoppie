/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import User from '../database/models/User'
import logger from '../helpers/logger'
import { userToken } from '../helpers/tokenGenerator'
import uploadImage from '../helpers/claudinary'
import Role from '../database/models/role'
import { sendEmail } from '../helpers/sendEmail'
import {
    sendInternalErrorResponse,
    validateEmail,
    validateFields,
    validatePassword,
} from '../validator'
import { passwordEncrypt } from '../helpers/encrypt'
import getDefaultRole from '../helpers/defaultRoleGenerator'
import * as jwt from 'jsonwebtoken'

// Function for user signup
export const signupUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, email, password, gender, phoneNumber } = req.body

        const requiredFields = [
            'firstName',
            'lastName',
            'email',
            'password',
            'gender',
            'phoneNumber',
        ]
        const missingFields = validateFields(req, requiredFields)

        if (missingFields.length > 0) {
            logger.error(`Adding User:Required fields are missing:${missingFields.join(', ')}`)
            res.status(400).json({
                ok: false,
                message: `Required fields are missing: ${missingFields.join(', ')}`,
            })
            return
        }
        if (!validateEmail(email)) {
            res.status(400).json({ ok: false, error: 'Invalid email format' })
            return
        }
        if (!validatePassword(password)) {
            res.status(400).json({
                ok: false,
                error: 'Password should contains at least 1 letter, 1 number, and 1 special character, minumun 8 characters',
            })
            return
        }

        const user = await User.findOne({ email })
        if (user) {
            res.status(400).json({ ok: false, error: 'Email is already used, Login to continue' })
            return
        }
        const phone = await User.findOne({ phoneNumber })
        if (phone) {
            res.status(400).json({
                ok: false,
                error: 'Phone number is already used, Login to continue',
            })
            return
        }
        const hashPassword = await passwordEncrypt(password)

        const newUser = await User.create({
            firstName,
            lastName,
            email,
            password: hashPassword,
            gender,
            phoneNumber,
            RoleId: await getDefaultRole(),
        })

        const createdUser = newUser.toObject()
        let token
        if (createdUser) {
            token = await userToken(createdUser._id.toString(), createdUser.email)
        }
        const link: string = `${process.env.URL_HOST}/api/auth/verify/${token}/`

        sendEmail('account_verify', {
            name: `${createdUser.firstName} ${createdUser.lastName}`,
            email: `${createdUser.email}`,
            link,
        })

        res.status(201).json({
            ok: true,
            message: 'User Created Successfully, please verify through email',
        })
        return
    } catch (error) {
        logger.error('Error adding user:', error)
        sendInternalErrorResponse(res, error)
        return
    }
}

// Function for get all users
export const getAllUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const users = await User.find({}).populate('RoleId', 'name')
        logger.info(`Fetched ${users.length} users`)
        res.status(200).json({ ok: true, message: users })
        return
    } catch (error) {
        logger.error(`Error fetching all users: ${error}`)
        sendInternalErrorResponse(res, error)
        return
    }
}

// Function to get users by role name
export const getUsersByRoleName = async (req: Request, res: Response): Promise<void> => {
    try {
        const { roleName } = req.params

        const role = await Role.findOne({ name: roleName })

        if (!role) {
            res.status(404).json({ ok: false, error: 'Role not found' })
            return
        }

        const users = await User.find({ RoleId: role._id }).populate('RoleId', 'name')

        if (users.length === 0) {
            res.status(404).json({ ok: false, error: 'No users found for this role' })
            return
        }

        logger.info(`Fetched ${users.length} users with role ${roleName}`)
        res.status(200).json({ ok: true, message: users })
        return
    } catch (error) {
        logger.error(`Error fetching users by role: ${error}`)
        sendInternalErrorResponse(res, error)
        return
    }
}

// Function to get one user
export const getOneUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const user = await User.findById(id).populate('RoleId', 'name')
        if (!user) {
            res.status(404).json({ ok: false, error: 'User with this ID does not exist' })
            return
        }

        res.status(200).json({ ok: true, message: user })
        return
    } catch (error) {
        logger.error(`Error for get one user: ${error}`)
        sendInternalErrorResponse(res, error)
        return
    }
}

// Function to delete a user
export const deleteUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const deleteUserAccount = await User.findByIdAndDelete(req.params.id)
        if (!deleteUserAccount) {
            res.status(404).json({ ok: false, message: 'User with this ID does not exist' })
            return
        }
        res.status(200).json({ ok: true, message: 'User deleted successfully' })
        return
    } catch (error) {
        logger.error('Error deleting user: ', error)
        sendInternalErrorResponse(res, error)
        return
    }
}

// Function to edit user role
export const editUserRole = async (req: Request, res: Response): Promise<void> => {
    try {
        const { userId } = req.params
        const { roleId } = req.body
        if (!roleId) {
            res.status(400).json({ ok: false, error: 'roleId is required' })
            return
        }
        const user = await User.findById(userId)

        if (!user) {
            logger.error('Error User Not Found')
            res.status(404).json({ ok: false, error: 'User not found' })
            return
        }

        const role = await Role.findById(roleId)
        if (!role) {
            res.status(404).json({ ok: false, message: `There is no Role with this id: ${roleId}` })
            return
        }

        user.RoleId = roleId
        await user.save()

        res.status(200).json({ ok: true, message: 'Role assigned successfully.' })
        return
    } catch (error) {
        logger.error('Error Edit User Role: ', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function to update user profile
export const editUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { firstName, lastName, gender, phoneNumber } = req.body
        const user = await User.findById(req.params.id)

        if (!user) {
            res.status(404).json({ ok: false, error: 'User not found' })
            return
        }

        if (!req.file) {
            res.status(400).json({ ok: false, error: 'Profile Image required.' })
            return
        }

        const uploadedImage = await uploadImage(req.file.buffer)
        const updatedFields = {
            firstName: firstName || user.firstName,
            lastName: lastName || user.lastName,
            gender: gender || user.gender,
            phoneNumber: phoneNumber || user.phoneNumber,
            photoUrl: uploadedImage || user.photoUrl,
        }

        await user.updateOne(updatedFields)
        const userResponse = {
            id: user._id,
            firstName: updatedFields.firstName,
            lastName: updatedFields.lastName,
            email: user.email,
            phoneNumber: updatedFields.phoneNumber,
            gender: updatedFields.gender,
            photoUrl: updatedFields.photoUrl,
        }

        res.status(201).json({ ok: true, data: userResponse })
        return
    } catch (error) {
        logger.error('Error Edit User Role: ', error)
        sendInternalErrorResponse(res, error)
    }
}

// Function for verifying a user
export const userVerify = async (req: Request, res: Response): Promise<void> => {
    try {
        const token = req.params.token

        const decodedToken = jwt.verify(token, process.env.SECRET_KEY as string) as {
            id: string
            email: string
        }

        const user = await User.findOne({ email: decodedToken.email, verified: false })
        if (!user) {
            res.status(400).json({ ok: false, error: 'User already verified or not found.' })
            return
        }

        await user.updateOne({ verified: true })

        return res.redirect(
            `${process.env.FRONT_END_BASEURL}/login?message=Account verified, Login to continue.`
        )
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(403).json({
                ok: false,
                error: 'Verification link has expired. Please request a new one.',
            })
            return
        } else {
            logger.error('Error Edit User Role: ', error)
            sendInternalErrorResponse(res, error)
            return
        }
    }
}
// Function for resend verification link
export const resendVerifyLink = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email } = req.body

        if (!validateEmail(email)) {
            res.status(400).json({ ok: false, error: 'Invalid email format' })
            return
        }
        if (validateFields(req, ['email']).length !== 0) {
            res.status(400).json({ ok: false, error: 'Email is required' })
            return
        }
        const user = await User.findOne({ email })
        if (!user) {
            res.status(400).json({
                ok: false,
                error: 'User with this email does not exit, Sign up to continue',
            })
            return
        }
        const notVerifiedUser = await User.findOne({ email, verified: false })
        if (!notVerifiedUser) {
            res.status(202).json({
                ok: false,
                error: `${email} is already verified. Login to continue`,
            })
            return
        }

        const token = await userToken(user._id.toString(), user.email)
        const verificationLink: string = `${process.env.URL_HOST}/api/auth/verify/${token}`

        sendEmail('account_verify', {
            name: `${user.firstName} ${user.lastName}`,
            email,
            link: verificationLink,
        })
        res.status(201).json({ ok: true, message: 'Check your email to verify.' })
    } catch (error) {
        logger.error('Resend-verify: ', error)
        sendInternalErrorResponse(res, error)
    }
}
