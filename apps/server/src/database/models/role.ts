import mongoose, { Schema, Document } from 'mongoose'

export interface IRole extends Document {
    _id: mongoose.Types.ObjectId
    name: string
    description?: string
    permissions: mongoose.Types.ObjectId[]
    createdAt: Date
    updatedAt: Date
}

const RoleSchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        description: {
            type: String,
            trim: true,
        },
        permissions: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Permission',
            },
        ],
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<IRole>('Role', RoleSchema)