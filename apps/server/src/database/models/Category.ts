import mongoose, { Schema, Document } from 'mongoose'

export interface ICategory extends Document {
    _id: mongoose.Types.ObjectId
    name: string
    description?: string
    image?: string
    parentCategory?: mongoose.Types.ObjectId
    isActive: boolean
    createdAt: Date
    updatedAt: Date
}

const CategorySchema: Schema = new Schema(
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
        image: {
            type: String,
            trim: true,
        },
        parentCategory: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
        },
        isActive: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<ICategory>('Category', CategorySchema)