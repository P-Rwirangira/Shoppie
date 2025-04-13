/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import Product, { IProduct } from '../database/models/product'
import Size from '../database/models/Size'
import Review from '../database/models/Review'
import uploadImage from '../helpers/claudinary'
import logger from '../config/logger'

interface SizeData {
    size: string
    price: number
    stock: number
}

// Create a new product
export const createProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, description, colors, categoryName, sizes } = req.body
        const sellerId = (req as any).user._id

        // Validate required fields
        if (!name || !description || !categoryName || !sizes) {
            res.status(400).json({
                ok: false,
                error: 'Name, description, category, and sizes are required'
            })
            return
        }

        // TODO: Handle image uploads when multer is properly configured
        const images = ['placeholder-image-url'] // Placeholder for now

        const product = new Product({
            sellerId,
            name,
            description,
            images,
            colors: colors || [],
            categoryName,
            sizes: [] // Will be populated after creating Size documents
        })

        await product.save()

        res.status(201).json({
            ok: true,
            message: 'Product created successfully',
            data: product
        })
    } catch (error) {
        logger.error('Error creating product:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Get all products
export const getAllProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10
        const skip = (page - 1) * limit

        const products = await Product.find()
            .populate('categoryName', 'name')
            .populate('sizes')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })

        const total = await Product.countDocuments()

        res.status(200).json({
            ok: true,
            data: {
                products,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        })
    } catch (error) {
        logger.error('Error fetching products:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Get product by ID
export const getProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params

        const product = await Product.findById(id)
            .populate('categoryName', 'name')
            .populate('sizes')
            .populate('sellerId', 'firstName lastName')

        if (!product) {
            res.status(404).json({
                ok: false,
                error: 'Product not found'
            })
            return
        }

        res.status(200).json({
            ok: true,
            data: product
        })
    } catch (error) {
        logger.error('Error fetching product:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Update product
export const updateProduct = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const { name, description, colors, categoryName } = req.body
        const sellerId = (req as any).user._id

        const product = await Product.findOne({ _id: id, sellerId })

        if (!product) {
            res.status(404).json({
                ok: false,
                error: 'Product not found or you do not have permission to update it'
            })
            return
        }

        const updateData: any = {}
        if (name) updateData.name = name
        if (description) updateData.description = description
        if (colors) updateData.colors = colors
        if (categoryName) updateData.categoryName = categoryName

        const updatedProduct = await Product.findByIdAndUpdate(id, updateData, { new: true })
            .populate('categoryName', 'name')
            .populate('sizes')

        res.status(200).json({
            ok: true,
            message: 'Product updated successfully',
            data: updatedProduct
        })
    } catch (error) {
        logger.error('Error updating product:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Delete product
export const deleteProductById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params
        const sellerId = (req as any).user._id

        const product = await Product.findOne({ _id: id, sellerId })

        if (!product) {
            res.status(404).json({
                ok: false,
                error: 'Product not found or you do not have permission to delete it'
            })
            return
        }

        await Product.findByIdAndDelete(id)

        res.status(200).json({
            ok: true,
            message: 'Product deleted successfully'
        })
    } catch (error) {
        logger.error('Error deleting product:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Search products (placeholder for now)
export const searchProducts = async (req: Request, res: Response): Promise<void> => {
    try {
        const { q } = req.query
        
        if (!q) {
            res.status(400).json({
                ok: false,
                error: 'Search query is required'
            })
            return
        }

        // Basic search implementation
        const products = await Product.find({
            $or: [
                { name: { $regex: q, $options: 'i' } },
                { description: { $regex: q, $options: 'i' } }
            ]
        })
        .populate('categoryName', 'name')
        .populate('sizes')
        .limit(20)

        res.status(200).json({
            ok: true,
            data: products
        })
    } catch (error) {
        logger.error('Error searching products:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}

// Get products by category
export const getProductsByCategory = async (req: Request, res: Response): Promise<void> => {
    try {
        const { categoryId } = req.params
        const page = parseInt(req.query.page as string) || 1
        const limit = parseInt(req.query.limit as string) || 10
        const skip = (page - 1) * limit

        const products = await Product.find({ categoryName: categoryId })
            .populate('categoryName', 'name')
            .populate('sizes')
            .skip(skip)
            .limit(limit)
            .sort({ createdAt: -1 })

        const total = await Product.countDocuments({ categoryName: categoryId })

        res.status(200).json({
            ok: true,
            data: {
                products,
                pagination: {
                    page,
                    limit,
                    total,
                    pages: Math.ceil(total / limit)
                }
            }
        })
    } catch (error) {
        logger.error('Error fetching products by category:', error)
        res.status(500).json({
            ok: false,
            error: 'Internal server error'
        })
    }
}