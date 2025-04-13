/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import Product, { IProduct } from '../database/models/product'
import Size from '../database/models/Size'
import Review from '../database/models/Review'
import uploadImage from '../helpers/claudinary'
import logger from '../helpers/logger'

interface SizeData {
    size: string
    price: number
    quantity: number
    discount?: number
    expiryDate?: Date
}

export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, colors, categoryName } = req.body
        let sizes: SizeData | SizeData[] = req.body.sizes

        // Parse sizes if it's a string
        if (typeof sizes === 'string') {
            try {
                sizes = JSON.parse(sizes) as SizeData | SizeData[]
            } catch {
                res.status(400).json({
                    ok: false,
                    message: 'Invalid sizes format. Must be a valid JSON object or array.',
                })
                return
            }
        }

        const sizesArray: SizeData[] = Array.isArray(sizes) ? sizes : [sizes]

        const sellerId = (req as any).user._id

        const existingProduct = await Product.findOne({ name, sellerId })
        if (existingProduct) {
            res.status(400).json({
                ok: false,
                message: 'You already have a product with this name.',
                data: existingProduct,
            })
            return
        }

        // Validate sizes array
        if (!sizesArray || sizesArray.length === 0) {
            res.status(400).json({
                ok: false,
                message: 'At least one size configuration is required.',
            })
            return
        }

        // Validate images
        const images: Express.Multer.File[] = Array.isArray(req.files) ? req.files : []
        if (images.length < 4) {
            res.status(400).json({
                ok: false,
                message: 'Product should have at least 4 images.',
            })
            return
        }

        // Upload images
        const productImages: string[] = await Promise.all(
            images.map((image) => uploadImage(image.buffer))
        )

        let createdProduct: IProduct | null = null

        try {
            // Create product first
            createdProduct = await Product.create({
                sellerId,
                name,
                description,
                images: productImages,
                colors: colors ? colors.split(',').map((c: string) => c.trim()) : [],
                categoryName,
                sizes: [],
            })

            // Create sizes with validation
            const createdSizes = await Promise.all(
                sizesArray.map(async (sizeData: SizeData) => {
                    // Validate required fields
                    if (
                        !sizeData.size ||
                        !sizeData.price ||
                        typeof sizeData.quantity === 'undefined'
                    ) {
                        throw new Error(
                            'Size, price, and quantity are required for each size configuration'
                        )
                    }

                    return Size.create({
                        ...sizeData,
                        productId: createdProduct!._id,
                    })
                })
            )

            const sizeIds = createdSizes.map((size) => size._id)

            // Update product with size references
            createdProduct.sizes = sizeIds
            await createdProduct.save()

            res.status(201).json({
                ok: true,
                message: 'Product created successfully!',
                data: {
                    product: createdProduct,
                    sizes: createdSizes,
                },
            })
        } catch (error) {
            // If there's an error, clean up any created resources
            if (createdProduct?._id) {
                await Product.findByIdAndDelete(createdProduct._id)
                await Size.deleteMany({ productId: createdProduct._id })
            }
            throw error
        }
    } catch (error: unknown) {
        const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred'
        logger.error('Product creation error:', errorMessage)
        res.status(500).json({
            ok: false,
            error: 'Failed to create product',
            message: errorMessage,
        })
    }
}

export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params
        const { name, description, colors, categoryName, sizes } = req.body

        const product = await Product.findById(productId)
        if (!product) {
            res.status(404).json({
                ok: false,
                message: 'Product not found',
            })
            return
        }

        product.name = name || product.name
        product.description = description || product.description
        product.colors = colors || product.colors
        product.categoryName = categoryName || product.categoryName

        if (sizes) {
            for (const sizeData of sizes) {
                await Size.updateOne({ _id: sizeData._id }, sizeData)
            }
        }

        await product.save()

        res.status(200).json({
            ok: true,
            message: 'Product updated successfully',
            data: product,
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to update product',
            message: error.message,
        })
        return
    }
}

// Get all sizes
export const getAllSizes = async (req: Request, res: Response) => {
    try {
        const sizes = await Size.find()
        res.status(200).json({ ok: true, sizes })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({ error: 'Failed to fetch sizes', message: error.message })
    }
}

// Update a size
export const updateSize = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sizeId } = req.params
        const { size, price, discount, expiryDate } = req.body

        const updatedSize = await Size.findByIdAndUpdate(
            sizeId,
            { size, price, discount, expiryDate },
            { new: true }
        )

        if (!updatedSize) {
            res.status(404).json({
                ok: false,
                message: 'Size not found',
            })
            return
        }

        res.status(200).json({
            ok: true,
            message: 'Size updated successfully',
            data: updatedSize,
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to update size',
            message: error.message,
        })
        return
    }
}

// Mark product as unavailable
export const markProductAsUnavailable = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sizeId } = req.params
        const size = await Size.findById(sizeId)

        if (!size) {
            res.status(404).json({
                ok: false,
                message: 'Size not found',
            })
            return
        }

        const isExpired = size.expiryDate! <= new Date()
        const isQuantityAvailable = size.quantity! <= 0

        if (isExpired || isQuantityAvailable) {
            size.available = false
            await size.save()
            res.status(200).json({
                ok: true,
                message: 'Product marked as unavailable',
            })
        } else {
            res.status(403).json({
                ok: false,
                message: 'Product is still in stock with a valid expiration date',
            })
        }
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            error: 'Failed to mark product as unavailable',
            message: error.message,
        })
    }
}

// Mark product as available
export const markProductAsAvailable = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sizeId } = req.params
        const size = await Size.findById(sizeId)

        if (!size) {
            res.status(404).json({
                ok: false,
                message: 'Size not found',
            })
            return
        }

        const isExpired = size.expiryDate! >= new Date()
        const isQuantityAvailable = size.quantity! >= 1

        if (isExpired && isQuantityAvailable) {
            size.available = true
            await size.save()
            res.status(200).json({
                ok: true,
                message: 'Product marked as available',
            })
        } else {
            res.status(403).json({
                ok: false,
                message: 'Product is either expired or out of stock',
            })
        }
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to mark product as available',
            message: error.message,
        })
        return
    }
}

// Get all products
export const getAllProducts = async (req: Request, res: Response) => {
    try {
        const { page = 1, limit = 10 } = req.query
        const products = await Product.find()
            .populate('sizes')
            .populate('reviews')
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit))

        const totalProducts = await Product.countDocuments()

        res.status(200).json({
            ok: true,
            data: products,
            totalPages: Math.ceil(totalProducts / Number(limit)),
            currentPage: Number(page),
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({ error: 'Failed to fetch products', message: error.message })
    }
}

// Get all products by a particular seller
export const getAllProductsBySeller = async (req: Request, res: Response): Promise<void> => {
    try {
        const { sellerId } = req.params
        const { page = 1, limit = 10 } = req.query

        if (!sellerId) {
            res.status(400).json({
                ok: false,
                message: 'Invalid sellerId',
            })
            return
        }

        const products = await Product.find({ sellerId })
            .populate('sizes')
            .limit(Number(limit))
            .skip((Number(page) - 1) * Number(limit))

        const totalProducts = await Product.countDocuments({ sellerId })

        res.status(200).json({
            ok: true,
            data: products,
            totalPages: Math.ceil(totalProducts / Number(limit)),
            currentPage: Number(page),
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            error: 'Failed to fetch products by seller',
            message: error.message,
        })
        return
    }
}

// Get a single product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params
        const product = await Product.findById(productId).populate('sizes').populate('reviews')

        if (!product) {
            res.status(404).json({
                ok: false,
                message: 'Product not found',
            })
            return
        }

        res.status(200).json({
            ok: true,
            data: product,
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch product',
            message: error.message,
        })
        return
    }
}

// Delete a product by ID
export const deleteProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params

        const product = await Product.findById(productId)
        if (!product) {
            res.status(404).json({
                ok: false,
                message: 'Product not found',
            })
            return
        }

        // Verify that the requesting user is the owner of the product
        const user = (req as any).user
        const userId = user._id
        if (product.sellerId.toString() !== userId.toString()) {
            res.status(403).json({
                ok: false,
                message: 'Unauthorized: You are not authorized to delete this product',
            })
            return
        }

        // Delete associated sizes and reviews
        await Promise.all([
            Size.deleteMany({ productId: product._id }),
            Review.deleteMany({ productId: product._id }),
        ])

        // Delete the product
        await product.deleteOne()

        res.status(200).json({
            ok: true,
            message: 'Product deleted successfully',
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({ error: 'Failed to delete product', message: error.message })
    }
}

// Review a product (feedback + rating)
export const provideReviewToProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params
        const { rating, feedback } = req.body
        const user = (req as any).user

        // Check if the user has already reviewed the product
        const existingReview = await Review.findOne({ userId: user._id, productId })
        if (existingReview) {
            res.status(400).json({
                ok: false,
                message: 'You have already reviewed this product',
            })
            return
        }

        // Handle image if provided
        let feedbackImage: string | null = null
        const image = req.file
        if (image) {
            const imageBuffer: Buffer = image.buffer
            feedbackImage = await uploadImage(imageBuffer)
        }

        // Create review
        const newReview = await Review.create({
            userId: user._id,
            productId,
            rating,
            feedback,
            feedbackImage,
        })

        res.status(201).json({
            ok: true,
            message: 'Thank you for providing feedback!',
            data: newReview,
        })
        return
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to create review',
            message: error.message,
        })
        return
    }
}

// Delete a review
export const deleteReview = async (req: Request, res: Response): Promise<void> => {
    try {
        const { reviewId } = req.params
        const user = (req as any).user

        const review = await Review.findOne({ _id: reviewId, userId: user._id })
        if (!review) {
            res.status(404).json({
                ok: false,
                message: 'Review not found',
            })
            return
        }

        await review.deleteOne()

        res.status(200).json({
            ok: true,
            message: 'Review deleted successfully',
        })
        return
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to delete review',
            message: error.message,
        })
        return
    }
}

export const calculateAverageRating = async (req: Request, res: Response): Promise<void> => {
    try {
        const { productId } = req.params

        const reviews = await Review.find({ productId })
        if (reviews.length === 0) {
            res.status(404).json({
                ok: false,
                message: 'No reviews found for this product',
            })
            return
        }

        const totalRatings = reviews.reduce((sum: number, review) => sum + review.rating, 0)
        const averageRating = totalRatings / reviews.length

        res.status(200).json({
            ok: true,
            averageRating,
        })
    } catch (error: any) {
        logger.error(error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to calculate average rating',
            message: error.message,
        })
    }
}
