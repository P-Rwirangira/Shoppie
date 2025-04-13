import mongoose, { Schema, Document } from 'mongoose'
import { IUser } from './User'
import { IProduct } from './product'

export enum OrderStatus {
    PENDING = 'pending',
    PROCESSING = 'processing',
    SHIPPED = 'shipped',
    DELIVERED = 'delivered',
    CANCELLED = 'cancelled',
}

export interface OrderItem {
    productId: IProduct['_id']
    quantity: number
    price: number
    size: string
    color?: string
}

export interface IOrder extends Document {
    userId: IUser['_id']
    items: OrderItem[]
    totalAmount: number
    shippingAddress: {
        street: string
        city: string
        state: string
        zipCode: string
        country: string
    }
    paymentMethod: string
    paymentStatus: 'pending' | 'paid' | 'failed'
    orderStatus: OrderStatus
    trackingInfo?: string
    createdAt: Date
    updatedAt: Date
}

const OrderSchema: Schema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        items: [
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
                price: {
                    type: Number,
                    required: true,
                    min: [0, 'Price cannot be negative'],
                },
                size: {
                    type: String,
                    required: true,
                },
                color: {
                    type: String,
                },
            },
        ],
        totalAmount: {
            type: Number,
            required: true,
            min: [0, 'Total amount cannot be negative'],
        },
        shippingAddress: {
            street: {
                type: String,
                required: true,
            },
            city: {
                type: String,
                required: true,
            },
            state: {
                type: String,
                required: true,
            },
            zipCode: {
                type: String,
                required: true,
            },
            country: {
                type: String,
                required: true,
            },
        },
        paymentMethod: {
            type: String,
            required: true,
        },
        paymentStatus: {
            type: String,
            enum: ['pending', 'paid', 'failed'],
            default: 'pending',
        },
        orderStatus: {
            type: String,
            enum: Object.values(OrderStatus),
            default: OrderStatus.PENDING,
        },
        trackingInfo: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<IOrder>('Order', OrderSchema)
