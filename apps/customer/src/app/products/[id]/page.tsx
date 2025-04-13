'use client'

import React, { useState, useEffect } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Image from 'next/image'
import api from '../../../lib/api'
import { Product } from '../../../lib/types'
import { useCart } from '../../../hooks/useCart'
import { useAuth } from '../../../contexts/AuthContext'

export default function ProductDetailPage() {
    const params = useParams()
    const router = useRouter()
    const { isAuthenticated } = useAuth()
    const { addToCart } = useCart()
    
    const [product, setProduct] = useState<Product | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [selectedSize, setSelectedSize] = useState('')
    const [selectedColor, setSelectedColor] = useState('')
    const [quantity, setQuantity] = useState(1)
    const [selectedImageIndex, setSelectedImageIndex] = useState(0)

    useEffect(() => {
        if (params.id) {
            fetchProduct()
        }
    }, [params.id])

    const fetchProduct = async () => {
        setLoading(true)
        setError('')
        try {
            const response = await api.getProduct(params.id as string)
            if (response.ok && response.data) {
                setProduct(response.data)
                // Set default selections
                if (response.data.sizes && response.data.sizes.length > 0) {
                    setSelectedSize(response.data.sizes[0].name)
                }
                if (response.data.colors && response.data.colors.length > 0) {
                    setSelectedColor(response.data.colors[0])
                }
            } else {
                setError('Product not found')
            }
        } catch (err: any) {
            setError(err.message || 'Failed to fetch product')
        } finally {
            setLoading(false)
        }
    }

    const handleAddToCart = async () => {
        if (!isAuthenticated) {
            router.push('/auth/login')
            return
        }

        if (!selectedSize) {
            alert('Please select a size')
            return
        }

        const success = await addToCart(
            product!._id,
            quantity,
            selectedSize,
            selectedColor || undefined
        )

        if (success) {
            alert('Product added to cart!')
        }
    }

    const getSelectedPrice = () => {
        if (!product?.sizes || !selectedSize) return 0
        const size = product.sizes.find(s => s.name === selectedSize)
        return size?.price || 0
    }

    const getSelectedStock = () => {
        if (!product?.sizes || !selectedSize) return 0
        const size = product.sizes.find(s => s.name === selectedSize)
        return size?.stock || 0
    }

    if (loading) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
        )
    }

    if (error || !product) {
        return (
            <div className="min-h-screen flex justify-center items-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
                    <p className="text-gray-600 mb-4">{error}</p>
                    <button
                        onClick={() => router.push('/products')}
                        className="bg-primary text-white px-6 py-2 rounded-md hover:bg-primary-hard"
                    >
                        Back to Products
                    </button>
                </div>
            </div>
        )
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Breadcrumb */}
                <nav className="mb-8">
                    <ol className="flex items-center space-x-2 text-sm">
                        <li>
                            <button onClick={() => router.push('/')} className="text-gray-500 hover:text-primary">
                                Home
                            </button>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li>
                            <button onClick={() => router.push('/products')} className="text-gray-500 hover:text-primary">
                                Products
                            </button>
                        </li>
                        <li className="text-gray-400">/</li>
                        <li className="text-gray-900">{product.name}</li>
                    </ol>
                </nav>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Product Images */}
                    <div className="space-y-4">
                        <div className="aspect-w-1 aspect-h-1 w-full h-96 bg-gray-200 rounded-lg overflow-hidden">
                            {product.images && product.images[selectedImageIndex] ? (
                                <Image
                                    src={product.images[selectedImageIndex]}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    No Image Available
                                </div>
                            )}
                        </div>
                        
                        {/* Image Thumbnails */}
                        {product.images && product.images.length > 1 && (
                            <div className="flex space-x-2 overflow-x-auto">
                                {product.images.map((image, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImageIndex(index)}
                                        className={`flex-shrink-0 w-20 h-20 rounded-md overflow-hidden border-2 ${
                                            selectedImageIndex === index ? 'border-primary' : 'border-gray-200'
                                        }`}
                                    >
                                        <Image
                                            src={image}
                                            alt={`${product.name} ${index + 1}`}
                                            width={80}
                                            height={80}
                                            className="w-full h-full object-cover"
                                        />
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Product Info */}
                    <div className="space-y-6">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
                            <p className="text-2xl font-bold text-primary mt-2">${getSelectedPrice()}</p>
                        </div>

                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Description</h3>
                            <p className="text-gray-600">{product.description}</p>
                        </div>

                        {/* Size Selection */}
                        {product.sizes && product.sizes.length > 0 && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Size</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.sizes.map((size) => (
                                        <button
                                            key={size._id}
                                            onClick={() => setSelectedSize(size.name)}
                                            disabled={size.stock === 0}
                                            className={`px-4 py-2 border rounded-md text-sm font-medium ${
                                                selectedSize === size.name
                                                    ? 'bg-primary text-white border-primary'
                                                    : size.stock === 0
                                                    ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                                            }`}
                                        >
                                            {size.name} - ${size.price}
                                            {size.stock === 0 && ' (Out of Stock)'}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Color Selection */}
                        {product.colors && product.colors.length > 0 && (
                            <div>
                                <h3 className="text-lg font-medium text-gray-900 mb-2">Color</h3>
                                <div className="flex flex-wrap gap-2">
                                    {product.colors.map((color) => (
                                        <button
                                            key={color}
                                            onClick={() => setSelectedColor(color)}
                                            className={`px-4 py-2 border rounded-md text-sm font-medium ${
                                                selectedColor === color
                                                    ? 'bg-primary text-white border-primary'
                                                    : 'bg-white text-gray-700 border-gray-300 hover:border-primary'
                                            }`}
                                        >
                                            {color}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Quantity */}
                        <div>
                            <h3 className="text-lg font-medium text-gray-900 mb-2">Quantity</h3>
                            <div className="flex items-center space-x-3">
                                <button
                                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50"
                                >
                                    -
                                </button>
                                <span className="text-lg font-medium w-12 text-center">{quantity}</span>
                                <button
                                    onClick={() => setQuantity(Math.min(getSelectedStock(), quantity + 1))}
                                    disabled={quantity >= getSelectedStock()}
                                    className="w-10 h-10 border border-gray-300 rounded-md flex items-center justify-center hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    +
                                </button>
                            </div>
                            <p className="text-sm text-gray-500 mt-1">
                                {getSelectedStock()} items available
                            </p>
                        </div>

                        {/* Add to Cart */}
                        <div className="space-y-3">
                            <button
                                onClick={handleAddToCart}
                                disabled={getSelectedStock() === 0 || !selectedSize}
                                className="w-full bg-primary text-white py-3 px-6 rounded-md text-lg font-medium hover:bg-primary-hard focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {getSelectedStock() === 0 ? 'Out of Stock' : 'Add to Cart'}
                            </button>
                            
                            {!isAuthenticated && (
                                <p className="text-sm text-gray-500 text-center">
                                    <button
                                        onClick={() => router.push('/auth/login')}
                                        className="text-primary hover:text-primary-hard"
                                    >
                                        Sign in
                                    </button>
                                    {' '}to add items to cart
                                </p>
                            )}
                        </div>

                        {/* Product Details */}
                        <div className="border-t pt-6">
                            <h3 className="text-lg font-medium text-gray-900 mb-4">Product Details</h3>
                            <dl className="space-y-2">
                                <div className="flex">
                                    <dt className="text-sm font-medium text-gray-500 w-24">Category:</dt>
                                    <dd className="text-sm text-gray-900">
                                        {typeof product.categoryName === 'object' ? product.categoryName.name : product.categoryName}
                                    </dd>
                                </div>
                                {product.colors && product.colors.length > 0 && (
                                    <div className="flex">
                                        <dt className="text-sm font-medium text-gray-500 w-24">Colors:</dt>
                                        <dd className="text-sm text-gray-900">{product.colors.join(', ')}</dd>
                                    </div>
                                )}
                            </dl>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}