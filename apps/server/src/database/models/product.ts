import mongoose, { Schema, Document } from 'mongoose'
import { ICategory } from './Category'
import { IUser } from './User'

export interface IProduct extends Document {
    _id: mongoose.Types.ObjectId
    sellerId: IUser['_id']
    name: string
    description: string
    images: string[]
    colors?: string[]
    categoryName: ICategory['_id']
    sizes: mongoose.Types.ObjectId[]
}

const ProductSchema: Schema = new Schema(
    {
        sellerId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        name: {
            type: String,
            required: true,
            trim: true,
            minlength: [2, 'Product name must be at least 2 characters long'],
            maxlength: [100, 'Product name cannot exceed 100 characters'],
        },
        description: {
            type: String,
            required: true,
            trim: true,
            minlength: [10, 'Description must be at least 10 characters long'],
        },
        images: {
            type: [String],
            required: true,
            validate: [(val: string[]) => val.length >= 4, 'At least 4 images are required'],
        },
        colors: {
            type: [String],
            default: [],
            validate: [
                (val: string[]) => val.every((color) => color.trim().length > 0),
                'Color names cannot be empty',
            ],
        },
        categoryName: {
            type: Schema.Types.ObjectId,
            ref: 'Category',
            required: true,
            // Removed index: true from here since we're defining it below
        },
        sizes: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Size',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

ProductSchema.index({ name: 1, sellerId: 1 }, { unique: true })
ProductSchema.index({ categoryName: 1 })

export default mongoose.model<IProduct>('Product', ProductSchema)
