/* eslint-disable @typescript-eslint/no-explicit-any */
import mongoose from 'mongoose'
import logger from '../../helpers/logger'
import Role from './role'
export interface IUser extends Document {
    _id: mongoose.Types.ObjectId
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    phoneNumber: string
    photoUrl?: string
    verified: boolean
    status: string
    role: string
}
export const UserStatus = {
    ACTIVE: 'active',
    INACTIVE: 'inactive',
}

const userSchema = new mongoose.Schema(
    {
        firstName: {
            type: String,
            required: true,
            trim: true,
        },
        lastName: {
            type: String,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            validate: {
                validator: function (v: string) {
                    return /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(v)
                },
                message: (props: any) => `${props.value} is not a valid email address!`,
            },
        },
        password: {
            type: String,
        },
        gender: {
            type: String,
            required: true,
            enum: ['male', 'female', 'not specified'],
        },
        phoneNumber: {
            type: String,
        },
        photoUrl: {
            type: String,
        },
        verified: {
            type: Boolean,
            required: true,
            default: false,
        },
        status: {
            type: String,
            required: true,
            enum: Object.values(UserStatus),
            default: UserStatus.ACTIVE,
        },
        RoleId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Role',
            required: true,
        },
        lastPasswordUpdated: {
            type: Date,
        },
        enable2FA: {
            type: Boolean,
            required: true,
            default: false,
        },
    },
    {
        timestamps: true,
    }
)

userSchema.virtual('fullName').get(function () {
    return `${this.firstName} ${this.lastName}`
})

userSchema.pre('save', async function (next) {
    if (!this.RoleId) {
        try {
            const defaultRole = await Role.findOne({ name: 'buyer' })
            if (defaultRole) {
                this.RoleId = defaultRole._id
            }
        } catch (error) {
            logger.error('Error setting default role:', error)
        }
    }
    next()
})

const User = mongoose.model('User', userSchema)

export default User
