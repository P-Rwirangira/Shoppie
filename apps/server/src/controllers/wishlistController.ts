/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import Wishlist from '../database/models/wishlist'
import Product from '../database/models/product'
import logger from '../helpers/logger'

// Add product to wishlist
export const addToWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { productId } = req.body

        const product = await Product.findById(productId)
        if (!product) {
            res.status(404).json({ ok: false, message: 'Product not found' })
            return
        }

        let wishlist = await Wishlist.findOne({ userId })
        if (!wishlist) {
            wishlist = await Wishlist.create({ userId, products: [productId] })
        } else {
            if (!wishlist.products.includes(productId)) {
                wishlist.products.push(productId)
                await wishlist.save()
            }
        }

        res.status(200).json({ ok: true, message: 'Product added to wishlist', data: wishlist })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to add to wishlist',
            message: error.message,
        })
    }
}

// Remove product from wishlist
export const removeFromWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { productId } = req.params

        const wishlist = await Wishlist.findOne({ userId })
        if (!wishlist) {
            res.status(404).json({ ok: false, message: 'Wishlist not found' })
            return
        }

        wishlist.products = wishlist.products.filter((id) => id.toString() !== productId)
        await wishlist.save()

        res.status(200).json({ ok: true, message: 'Product removed from wishlist', data: wishlist })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to remove from wishlist',
            message: error.message,
        })
    }
}

// Get user's wishlist
export const getWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const wishlist = await Wishlist.findOne({ userId }).populate('products')

        if (!wishlist) {
            res.status(404).json({ ok: false, message: 'Wishlist not found' })
            return
        }

        res.status(200).json({ ok: true, data: wishlist })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch wishlist',
            message: error.message,
        })
    }
}
