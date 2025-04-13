import mongoose, { Schema, Document } from 'mongoose'

export interface IPermission extends Document {
    _id: mongoose.Types.ObjectId
    name: string
    description?: string
    resource: string
    action: string
    createdAt: Date
    updatedAt: Date
}

const PermissionSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        description: {
            type: String,
            trim: true,
        },
        resource: {
            type: String,
            required: true,
            trim: true,
        },
        action: {
            type: String,
            required: true,
            trim: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<IPermission>('Permission', PermissionSchema)