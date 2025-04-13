import mongoose, { Schema, Document } from 'mongoose'
import { IUser } from './User'
import { IProduct } from './product'

export interface IReview extends Document {
    userId: IUser['_id']
    productId: IProduct['_id']
    rating: number
    feedback?: string
    feedbackImage?: string
}

const ReviewSchema: Schema = new Schema(
    {
        userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
        productId: { type: Schema.Types.ObjectId, ref: 'Product', required: true },
        rating: { type: Number, required: true, min: 1, max: 5 },
        feedback: { type: String },
        feedbackImage: { type: String },
    },
    { timestamps: true }
)

export default mongoose.model<IReview>('Review', ReviewSchema)
