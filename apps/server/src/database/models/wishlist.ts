import mongoose, { Schema, Document } from 'mongoose'
import { IUser } from './User'
import { IProduct } from './product'

export interface IWishlist extends Document {
    userId: IUser['_id']
    products: IProduct['_id'][]
}

const WishlistSchema: Schema = new Schema(
    {
        userId: {
            type: Schema.Types.ObjectId,
            ref: 'User',
            required: true,
            index: true,
        },
        products: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Product',
                required: true,
            },
        ],
    },
    {
        timestamps: true,
    }
)

export default mongoose.model<IWishlist>('Wishlist', WishlistSchema)
