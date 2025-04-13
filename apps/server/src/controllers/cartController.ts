/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import mongoose from 'mongoose'
import Cart, { ICartItem } from '../database/models/cart'
import Product from '../database/models/product'
import Size from '../database/models/Size'
import logger from '../helpers/logger'

// // Helper function to safely get _id as string
// const getItemId = (item: any): string => {
//   return item._id?.toString() || '';
// };

// Helper function to create a new cart item
const createCartItem = (data: {
    productId: string
    quantity: number
    size: string
    color?: string
}): Partial<ICartItem> => {
    return {
        productId: new mongoose.Types.ObjectId(data.productId),
        quantity: data.quantity,
        size: data.size,
        color: data.color || '',
    }
}

// Get user's cart
export const getCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id

        let cart = await Cart.findOne({ userId }).populate({
            path: 'items.productId',
            select: 'name images categoryName description',
        })

        if (!cart) {
            cart = await Cart.create({ userId, items: [] })
        }

        const enrichedCart = cart.toObject()
        const cartWithPrices = await Promise.all(
            enrichedCart.items.map(async (item) => {
                const sizeData = await Size.findOne({
                    productId: item.productId,
                    size: item.size,
                })

                return {
                    ...item,
                    price: sizeData?.price ?? 0,
                    discount: sizeData?.discount ?? 0,
                    available: sizeData
                        ? sizeData.available && sizeData.quantity >= item.quantity
                        : false,
                    subtotal: sizeData
                        ? sizeData.discount
                            ? (sizeData.price - (sizeData.price * sizeData.discount) / 100) *
                              item.quantity
                            : sizeData.price * item.quantity
                        : 0,
                }
            })
        )

        const total = cartWithPrices.reduce((sum, item) => sum + (item.subtotal || 0), 0)

        res.status(200).json({
            ok: true,
            data: {
                ...enrichedCart,
                items: cartWithPrices,
                total,
            },
        })
    } catch (error) {
        logger.error('Get cart error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch cart',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Add item to cart
export const addToCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { productId, quantity, size, color } = req.body

        if (!productId || !quantity || !size) {
            res.status(400).json({
                ok: false,
                message: 'Product ID, quantity, and size are required',
            })
            return
        }

        const product = await Product.findById(productId)
        if (!product) {
            res.status(404).json({
                ok: false,
                message: 'Product not found',
            })
            return
        }

        const sizeData = await Size.findOne({
            productId,
            size,
            available: true,
        })

        if (!sizeData) {
            res.status(400).json({
                ok: false,
                message: `Size ${size} is not available for this product`,
            })
            return
        }

        if (sizeData.quantity < quantity) {
            res.status(400).json({
                ok: false,
                message: `Not enough inventory available. Only ${sizeData.quantity} items in stock.`,
            })
            return
        }

        let cart = await Cart.findOne({ userId })

        if (!cart) {
            const newItem = createCartItem({ productId, quantity, size, color })
            cart = await Cart.create({
                userId,
                items: [newItem],
            })
        } else {
            const existingItemIndex = cart.items.findIndex(
                (item) => item.productId.toString() === productId && item.size === size
            )

            if (existingItemIndex > -1) {
                cart.items[existingItemIndex].quantity += quantity

                if (cart.items[existingItemIndex].quantity > sizeData.quantity) {
                    cart.items[existingItemIndex].quantity = sizeData.quantity
                }

                if (color) {
                    cart.items[existingItemIndex].color = color
                }
            } else {
                const newItem = createCartItem({ productId, quantity, size, color })
                cart.items.push(newItem as any)
            }

            await cart.save()
        }

        const updatedCart = await Cart.findOne({ userId }).populate({
            path: 'items.productId',
            select: 'name images categoryName description',
        })

        res.status(200).json({
            ok: true,
            message: 'Item added to cart successfully',
            data: updatedCart,
        })
    } catch (error) {
        logger.error('Add to cart error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to add item to cart',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Update cart item quantity
export const updateCartItem = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { itemId } = req.params
        const { quantity } = req.body

        if (!quantity || quantity < 1) {
            res.status(400).json({
                ok: false,
                message: 'Quantity must be at least 1',
            })
            return
        }

        const cart = await Cart.findOne({ userId })

        if (!cart) {
            res.status(404).json({
                ok: false,
                message: 'Cart not found',
            })
            return
        }

        const item = cart.items.id(itemId)

        if (!item) {
            res.status(404).json({
                ok: false,
                message: 'Item not found in cart',
            })
            return
        }

        const sizeData = await Size.findOne({
            productId: item.productId,
            size: item.size,
        })

        if (!sizeData || !sizeData.available) {
            res.status(400).json({
                ok: false,
                message: 'The selected product size is no longer available',
            })
            return
        }

        if (sizeData.quantity < quantity) {
            res.status(400).json({
                ok: false,
                message: `Only ${sizeData.quantity} items available in inventory`,
            })
            return
        }

        item.quantity = quantity
        await cart.save()

        const updatedCart = await Cart.findOne({ userId }).populate({
            path: 'items.productId',
            select: 'name images categoryName description',
        })

        res.status(200).json({
            ok: true,
            message: 'Cart item updated successfully',
            data: updatedCart,
        })
    } catch (error) {
        logger.error('Update cart item error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to update cart item',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Remove item from cart
export const removeFromCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { itemId } = req.params

        const cart = await Cart.findOneAndUpdate(
            { userId },
            { $pull: { items: { _id: new mongoose.Types.ObjectId(itemId) } } },
            { new: true }
        ).populate({
            path: 'items.productId',
            select: 'name images categoryName description',
        })

        if (!cart) {
            res.status(404).json({
                ok: false,
                message: 'Cart not found',
            })
            return
        }

        res.status(200).json({
            ok: true,
            message: 'Item removed from cart successfully',
            data: cart,
        })
    } catch (error) {
        logger.error('Remove from cart error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to remove item from cart',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Clear cart
export const clearCart = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id

        const cart = await Cart.findOneAndUpdate({ userId }, { $set: { items: [] } }, { new: true })

        if (!cart) {
            res.status(404).json({
                ok: false,
                message: 'Cart not found',
            })
            return
        }

        res.status(200).json({
            ok: true,
            message: 'Cart cleared successfully',
            data: cart,
        })
    } catch (error) {
        logger.error('Clear cart error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to clear cart',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Move cart item to wishlist
export const moveToWishlist = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { itemId } = req.params

        const cart = await Cart.findOne({ userId })

        if (!cart) {
            res.status(404).json({
                ok: false,
                message: 'Cart not found',
            })
            return
        }

        const item = cart.items.id(itemId)

        if (!item) {
            res.status(404).json({
                ok: false,
                message: 'Item not found in cart',
            })
            return
        }

        const productId = item.productId

        const Wishlist = mongoose.model('Wishlist')

        let wishlist = await Wishlist.findOne({ userId })

        if (!wishlist) {
            wishlist = await Wishlist.create({
                userId,
                products: [productId],
            })
        } else if (!wishlist.products.includes(productId)) {
            wishlist.products.push(productId)
            await wishlist.save()
        }

        await Cart.findOneAndUpdate(
            { userId },
            { $pull: { items: { _id: new mongoose.Types.ObjectId(itemId) } } }
        )

        res.status(200).json({
            ok: true,
            message: 'Item moved to wishlist successfully',
        })
    } catch (error) {
        logger.error('Move to wishlist error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to move item to wishlist',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}

// Check cart inventory
export const checkCartInventory = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id

        const cart = await Cart.findOne({ userId })

        if (!cart || cart.items.length === 0) {
            res.status(200).json({
                ok: true,
                valid: true,
                message: 'Cart is empty',
                outOfStockItems: [],
            })
            return
        }

        const outOfStockItems = []
        let isValid = true

        for (const item of cart.items) {
            const sizeData = await Size.findOne({
                productId: item.productId,
                size: item.size,
            })

            const product = await Product.findById(item.productId)

            if (!sizeData || !sizeData.available || sizeData.quantity < item.quantity) {
                isValid = false
                outOfStockItems.push({
                    itemId: item._id,
                    productId: item.productId,
                    productName: product?.name ?? 'Unknown Product',
                    size: item.size,
                    requestedQuantity: item.quantity,
                    availableQuantity: sizeData?.quantity ?? 0,
                    available: sizeData?.available ?? false,
                })
            }
        }

        res.status(200).json({
            ok: true,
            valid: isValid,
            message: isValid
                ? 'All items in cart are available'
                : 'Some items in your cart are out of stock or unavailable',
            outOfStockItems,
        })
    } catch (error) {
        logger.error('Check cart inventory error:', error)
        res.status(500).json({
            ok: false,
            error: 'Failed to check cart inventory',
            message: error instanceof Error ? error.message : 'Unknown error occurred',
        })
    }
}
