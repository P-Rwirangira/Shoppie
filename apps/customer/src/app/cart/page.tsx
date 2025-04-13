'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../contexts/AuthContext'

export default function CartPage() {
    const { cart, loading, updateCartItem, removeFromCart, clearCart, getCartTotal } = useCart()
    const { isAuthenticated } = useAuth()
    const router = useRouter()

    if (!isAuthenticated) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gray-50">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Please Sign In</h1>
                    <p className="text-gray-600 mb-6">You need to be signed in to view your cart.</p>
                    <Link
                        href="/auth/login"
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hard"
                    >
                        Sign In
                    </Link>
                </div>
            </div>
        )
    }

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (!cart || !cart.items || cart.items.length === 0) {
        return (
            <div className="min-h-screen bg-gray-50 py-8">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h1>
                    <div className="text-center py-12">
                        <div className="text-6xl text-gray-300 mb-4">🛒</div>
                        <h2 className="text-2xl font-semibold text-gray-900 mb-2">Your cart is empty</h2>
                        <p className="text-gray-600 mb-6">Looks like you haven't added any items to your cart yet.</p>
                        <Link
                            href="/products"
                            className="bg-primary text-white px-6 py-3 rounded-md hover:bg-primary-hard"
                        >
                            Continue Shopping
                        </Link>
                    </div>
                </div>
            </div>
        )
    }

    const handleQuantityChange = async (itemId: string, newQuantity: number) => {
        if (newQuantity < 1) return
        await updateCartItem(itemId, newQuantity)
    }

    const handleRemoveItem = async (itemId: string) => {
        if (confirm('Are you sure you want to remove this item from your cart?')) {
            await removeFromCart(itemId)
        }
    }

    const handleClearCart = async () => {
        if (confirm('Are you sure you want to clear your entire cart?')) {
            await clearCart()
        }
    }

    const handleCheckout = () => {
        router.push('/checkout')
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center mb-8">
                    <h1 className="text-3xl font-bold text-gray-900">Shopping Cart</h1>
                    <button
                        onClick={handleClearCart}
                        className="text-red-600 hover:text-red-800 text-sm font-medium"
                    >
                        Clear Cart
                    </button>
                </div>

                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                    <div className="px-6 py-4 border-b border-gray-200">
                        <h2 className="text-lg font-medium text-gray-900">
                            {cart.items.length} {cart.items.length === 1 ? 'Item' : 'Items'} in your cart
                        </h2>
                    </div>

                    <div className="divide-y divide-gray-200">
                        {cart.items.map((item) => {
                            const selectedSize = item.productId.sizes.find(s => s.name === item.size)
                            const itemTotal = (selectedSize?.price || 0) * item.quantity

                            return (
                                <div key={item._id} className="px-6 py-6">
                                    <div className="flex items-center">
                                        {/* Product Image */}
                                        <div className="flex-shrink-0 w-24 h-24 bg-gray-200 rounded-md overflow-hidden">
                                            {item.productId.images && item.productId.images[0] ? (
                                                <Image
                                                    src={item.productId.images[0]}
                                                    alt={item.productId.name}
                                                    width={96}
                                                    height={96}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400 text-xs">
                                                    No Image
                                                </div>
                                            )}
                                        </div>

                                        {/* Product Details */}
                                        <div className="flex-1 ml-6">
                                            <div className="flex justify-between">
                                                <div>
                                                    <h3 className="text-lg font-medium text-gray-900">
                                                        <Link
                                                            href={`/products/${item.productId._id}`}
                                                            className="hover:text-primary"
                                                        >
                                                            {item.productId.name}
                                                        </Link>
                                                    </h3>
                                                    <div className="mt-1 text-sm text-gray-500">
                                                        <p>Size: {item.size}</p>
                                                        {item.color && <p>Color: {item.color}</p>}
                                                        <p>Price: ${selectedSize?.price || 0}</p>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <p className="text-lg font-medium text-gray-900">
                                                        ${itemTotal.toFixed(2)}
                                                    </p>
                                                </div>
                                            </div>

                                            {/* Quantity Controls */}
                                            <div className="flex items-center justify-between mt-4">
                                                <div className="flex items-center space-x-3">
                                                    <button
                                                        onClick={() => handleQuantityChange(item._id, item.quantity - 1)}
                                                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                                                    >
                                                        -
                                                    </button>
                                                    <span className="text-lg font-medium w-8 text-center">
                                                        {item.quantity}
                                                    </span>
                                                    <button
                                                        onClick={() => handleQuantityChange(item._id, item.quantity + 1)}
                                                        disabled={item.quantity >= (selectedSize?.stock || 0)}
                                                        className="w-8 h-8 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                                    >
                                                        +
                                                    </button>
                                                </div>

                                                <button
                                                    onClick={() => handleRemoveItem(item._id)}
                                                    className="text-red-600 hover:text-red-800 text-sm font-medium"
                                                >
                                                    Remove
                                                </button>
                                            </div>

                                            {/* Stock Warning */}
                                            {selectedSize && item.quantity >= selectedSize.stock && (
                                                <p className="text-sm text-amber-600 mt-2">
                                                    Only {selectedSize.stock} items available
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>

                    {/* Cart Summary */}
                    <div className="px-6 py-6 bg-gray-50 border-t border-gray-200">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-lg font-medium text-gray-900">Total:</span>
                            <span className="text-2xl font-bold text-primary">${getCartTotal().toFixed(2)}</span>
                        </div>

                        <div className="flex space-x-4">
                            <Link
                                href="/products"
                                className="flex-1 bg-gray-200 text-gray-800 py-3 px-6 rounded-md text-center font-medium hover:bg-gray-300"
                            >
                                Continue Shopping
                            </Link>
                            <button
                                onClick={handleCheckout}
                                className="flex-1 bg-primary text-white py-3 px-6 rounded-md font-medium hover:bg-primary-hard"
                            >
                                Proceed to Checkout
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}