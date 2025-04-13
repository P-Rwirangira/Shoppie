import mongoose, { Schema, Document } from 'mongoose'
import { IProduct } from './product'

export interface ISize extends Document {
    _id: mongoose.Types.ObjectId
    size: string
    price: number
    quantity: number
    discount: number
    expiryDate?: Date
    productId: IProduct['_id']
    available: boolean
}

const SizeSchema: Schema = new Schema(
    {
        size: {
            type: String,
            required: true,
            trim: true,
        },
        price: {
            type: Number,
            required: true,
            min: [0, 'Price cannot be negative'],
        },
        quantity: {
            type: Number,
            default: 0,
            min: [0, 'Quantity cannot be negative'],
        },
        discount: {
            type: Number,
            default: 0,
            min: [0, 'Discount cannot be negative'],
            max: [100, 'Discount cannot exceed 100%'],
        },
        expiryDate: {
            type: Date,
            validate: {
                validator: function (value: Date) {
                    return !value || value > new Date()
                },
                message: 'Expiry date must be in the future',
            },
        },
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
            index: true,
        },
        available: {
            type: Boolean,
            default: true,
        },
    },
    {
        timestamps: true,
        toJSON: { virtuals: true },
        toObject: { virtuals: true },
    }
)

SizeSchema.index({ productId: 1, size: 1 }, { unique: true })

SizeSchema.methods.isAvailable = function (): boolean {
    return this.available && this.quantity > 0 && (!this.expiryDate || this.expiryDate > new Date())
}

export default mongoose.model<ISize>('Size', SizeSchema)
