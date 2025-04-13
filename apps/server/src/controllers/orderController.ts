/* eslint-disable @typescript-eslint/no-explicit-any */
import { Request, Response } from 'express'
import Order, { OrderStatus } from '../database/models/order'
import Product from '../database/models/product'
import Size from '../database/models/Size'
import logger from '../helpers/logger'

// Create a new order
export const createOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { items, shippingAddress, paymentMethod } = req.body

        if (!items || !Array.isArray(items) || items.length === 0) {
            res.status(400).json({
                ok: false,
                message: 'Order must contain at least one item',
            })
            return
        }

        if (!shippingAddress) {
            res.status(400).json({
                ok: false,
                message: 'Shipping address is required',
            })
            return
        }

        if (!paymentMethod) {
            res.status(400).json({
                ok: false,
                message: 'Payment method is required',
            })
            return
        }

        // Validate items and calculate total amount
        let totalAmount = 0
        const validatedItems = []

        for (const item of items) {
            const { productId, quantity, size, color } = item

            if (!productId || !quantity || !size) {
                res.status(400).json({
                    ok: false,
                    message: 'Each order item must have productId, quantity, and size',
                })
                return
            }

            // Check if product exists
            const product = await Product.findById(productId)
            if (!product) {
                res.status(404).json({
                    ok: false,
                    message: `Product with ID ${productId} not found`,
                })
                return
            }

            // Check if size exists for this product
            const sizeDoc = await Size.findOne({
                productId,
                size,
                available: true,
                quantity: { $gte: quantity },
            })

            if (!sizeDoc) {
                res.status(400).json({
                    ok: false,
                    message: `Size ${size} for product ${product.name} is not available or not enough in stock`,
                })
                return
            }

            // Calculate item price based on size
            const price = sizeDoc.price
            if (sizeDoc.discount && sizeDoc.discount > 0) {
                const discountedPrice = price - (price * sizeDoc.discount) / 100
                totalAmount += discountedPrice * quantity
            } else {
                totalAmount += price * quantity
            }

            validatedItems.push({
                productId,
                quantity,
                price,
                size,
                color: color || '',
            })

            // Update inventory
            sizeDoc.quantity -= quantity
            if (sizeDoc.quantity <= 0) {
                sizeDoc.available = false
            }
            await sizeDoc.save()
        }

        // Create the order
        const order = await Order.create({
            userId,
            items: validatedItems,
            totalAmount,
            shippingAddress,
            paymentMethod,
            paymentStatus: 'pending',
            orderStatus: OrderStatus.PENDING,
        })

        res.status(201).json({
            ok: true,
            message: 'Order created successfully',
            data: order,
        })
    } catch (error: any) {
        logger.error('Order creation error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to create order',
            message: error.message,
        })
    }
}

// Get all orders (admin only)
export const getAllOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const { page = 1, limit = 10, status } = req.query
        const skip = (Number(page) - 1) * Number(limit)

        let query = {}
        if (status && Object.values(OrderStatus).includes(status as OrderStatus)) {
            query = { orderStatus: status }
        }

        const orders = await Order.find(query)
            .populate('userId', 'name email')
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(Number(limit))

        const totalOrders = await Order.countDocuments(query)

        res.status(200).json({
            ok: true,
            data: orders,
            totalPages: Math.ceil(totalOrders / Number(limit)),
            currentPage: Number(page),
            totalOrders,
        })
    } catch (error: any) {
        logger.error('Get all orders error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch orders',
            message: error.message,
        })
    }
}

// Get current user's orders
export const getUserOrders = async (req: Request, res: Response): Promise<void> => {
    try {
        const userId = (req as any).user._id
        const { page = 1, limit = 10, status } = req.query
        const skip = (Number(page) - 1) * Number(limit)

        const query: any = { userId }
        if (status && Object.values(OrderStatus).includes(status as OrderStatus)) {
            query.orderStatus = status
        }

        const orders = await Order.find(query)
            .populate({
                path: 'items.productId',
                select: 'name images',
            })
            .sort({ createdAt: -1 })
            .skip(skip)
            .limit(Number(limit))

        const totalOrders = await Order.countDocuments(query)

        res.status(200).json({
            ok: true,
            data: orders,
            totalPages: Math.ceil(totalOrders / Number(limit)),
            currentPage: Number(page),
            totalOrders,
        })
    } catch (error: any) {
        logger.error('Get user orders error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch your orders',
            message: error.message,
        })
    }
}

// Get order by ID
export const getOrderById = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params
        const userId = (req as any).user._id
        const userRole = (req as any).user.role

        const order = await Order.findById(orderId)
            .populate({
                path: 'items.productId',
                select: 'name images description',
            })
            .populate('userId', 'name email')

        if (!order) {
            res.status(404).json({
                ok: false,
                message: 'Order not found',
            })
            return
        }

        // Check if the order belongs to the current user or if user is admin
        if (order.userId.toString() !== userId.toString() && userRole !== 'admin') {
            res.status(403).json({
                ok: false,
                message: 'You are not authorized to view this order',
            })
            return
        }

        res.status(200).json({
            ok: true,
            data: order,
        })
    } catch (error: any) {
        logger.error('Get order by ID error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to fetch order details',
            message: error.message,
        })
    }
}

// Update order status (admin only)
export const updateOrderStatus = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params
        const { status, trackingInfo } = req.body

        if (!status || !Object.values(OrderStatus).includes(status)) {
            res.status(400).json({
                ok: false,
                message: 'Invalid order status',
            })
            return
        }

        const order = await Order.findById(orderId)
        if (!order) {
            res.status(404).json({
                ok: false,
                message: 'Order not found',
            })
            return
        }

        // Don't allow status changes for cancelled orders
        if (order.orderStatus === OrderStatus.CANCELLED) {
            res.status(400).json({
                ok: false,
                message: 'Cannot update status for cancelled orders',
            })
            return
        }

        order.orderStatus = status
        if (trackingInfo) {
            order.trackingInfo = trackingInfo
        }

        await order.save()

        res.status(200).json({
            ok: true,
            message: 'Order status updated successfully',
            data: order,
        })
    } catch (error: any) {
        logger.error('Update order status error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to update order status',
            message: error.message,
        })
    }
}

// Cancel an order
export const cancelOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params
        const userId = (req as any).user._id
        const userRole = (req as any).user.role

        const order = await Order.findById(orderId)
        if (!order) {
            res.status(404).json({
                ok: false,
                message: 'Order not found',
            })
            return
        }

        // Check if the order belongs to the current user or if user is admin
        if (order.userId.toString() !== userId.toString() && userRole !== 'admin') {
            res.status(403).json({
                ok: false,
                message: 'You are not authorized to cancel this order',
            })
            return
        }

        // Only allow cancellation of pending or processing orders
        if (![OrderStatus.PENDING, OrderStatus.PROCESSING].includes(order.orderStatus)) {
            res.status(400).json({
                ok: false,
                message: 'Only pending or processing orders can be cancelled',
            })
            return
        }

        // Update inventory - return the items to stock
        for (const item of order.items) {
            const sizeDoc = await Size.findOne({
                productId: item.productId,
                size: item.size,
            })

            if (sizeDoc) {
                sizeDoc.quantity += item.quantity
                sizeDoc.available = true
                await sizeDoc.save()
            }
        }

        order.orderStatus = OrderStatus.CANCELLED
        await order.save()

        res.status(200).json({
            ok: true,
            message: 'Order cancelled successfully',
            data: order,
        })
    } catch (error: any) {
        logger.error('Cancel order error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to cancel order',
            message: error.message,
        })
    }
}

// Track an order
export const trackOrder = async (req: Request, res: Response): Promise<void> => {
    try {
        const { orderId } = req.params
        const userId = (req as any).user._id
        const userRole = (req as any).user.role

        const order = await Order.findById(orderId)
        if (!order) {
            res.status(404).json({
                ok: false,
                message: 'Order not found',
            })
            return
        }

        // Check if the order belongs to the current user or if user is admin
        if (order.userId.toString() !== userId.toString() && userRole !== 'admin') {
            res.status(403).json({
                ok: false,
                message: 'You are not authorized to track this order',
            })
            return
        }

        // Return tracking information based on order status
        const trackingDetails = {
            orderId: order._id,
            status: order.orderStatus,
            trackingInfo: order.trackingInfo || 'No tracking information available yet',
            statusHistory: [
                {
                    status: OrderStatus.PENDING,
                    date: order.createdAt,
                    completed: true,
                },
                {
                    status: OrderStatus.PROCESSING,
                    date: order.orderStatus === OrderStatus.PENDING ? null : order.updatedAt,
                    completed: order.orderStatus !== OrderStatus.PENDING,
                },
                {
                    status: OrderStatus.SHIPPED,
                    date: ![OrderStatus.PENDING, OrderStatus.PROCESSING].includes(order.orderStatus)
                        ? order.updatedAt
                        : null,
                    completed: ![OrderStatus.PENDING, OrderStatus.PROCESSING].includes(
                        order.orderStatus
                    ),
                },
                {
                    status: OrderStatus.DELIVERED,
                    date: order.orderStatus === OrderStatus.DELIVERED ? order.updatedAt : null,
                    completed: order.orderStatus === OrderStatus.DELIVERED,
                },
            ],
            estimatedDelivery:
                order.orderStatus === OrderStatus.SHIPPED
                    ? getEstimatedDeliveryDate(order.updatedAt)
                    : null,
        }

        res.status(200).json({
            ok: true,
            data: trackingDetails,
        })
    } catch (error: any) {
        logger.error('Track order error:', error.message)
        res.status(500).json({
            ok: false,
            error: 'Failed to track order',
            message: error.message,
        })
    }
}

// Helper function to calculate estimated delivery date (5-7 business days from shipping)
function getEstimatedDeliveryDate(shippingDate: Date): { min: Date; max: Date } {
    const minDate = new Date(shippingDate)
    minDate.setDate(minDate.getDate() + 5)

    const maxDate = new Date(shippingDate)
    maxDate.setDate(maxDate.getDate() + 7)

    return { min: minDate, max: maxDate }
}
