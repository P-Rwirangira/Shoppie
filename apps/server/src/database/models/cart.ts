import mongoose, { Schema, Document, Types } from 'mongoose'
import { IUser } from './User'
// import { IProduct } from './product';

export interface ICartItem {
    _id: Types.ObjectId
    productId: Types.ObjectId
    quantity: number
    size: string
    color?: string
}

export interface ICart extends Document {
    userId: IUser['_id']
    items: Types.DocumentArray<ICartItem>
    updatedAt: Date
}

const CartItemSchema = new Schema(
    {
        productId: {
            type: Schema.Types.ObjectId,
            ref: 'Product',
            required: true,
        },
        quantity: {
            type: Number,
            required: true,
            min: [1, 'Quantity must be at least 1'],
        },
        size: {
            type: String,
            required: true,
        },
        color: {
            type: String,
        },
    },
    { _id: true }
)

const CartSchema: Schema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        items: [CartItemSchema],
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<ICart>('Cart', CartSchema)
