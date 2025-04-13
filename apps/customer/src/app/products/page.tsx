'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import api from '../../lib/api'
import { Product } from '../../lib/types'
import { useCart } from '../../hooks/useCart'

export default function ProductsPage() {
    const [products, setProducts] = useState<Product[]>([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState('')
    const [searchQuery, setSearchQuery] = useState('')
    const [currentPage, setCurrentPage] = useState(1)
    const [totalPages, setTotalPages] = useState(1)
    
    const { addToCart } = useCart()

    useEffect(() => {
        fetchProducts()
    }, [currentPage, searchQuery])

    const fetchProducts = async () => {
        setLoading(true)
        setError('')
        try {
            const params: any = {
                page: currentPage,
                limit: 12
            }
            
            if (searchQuery) {
                params.search = searchQuery
            }
            
            const response = await api.getProducts(params)
            if (response.ok && response.data) {
                setProducts(response.data.products || response.data)
                if (response.data.pagination) {
                    setTotalPages(response.data.pagination.pages)
                }
            } else {
                setError('Failed to fetch products')
            }
        } catch (err: any) {
            setError(err.message || 'Failed to fetch products')
        } finally {
            setLoading(false)
        }
    }

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault()
        setCurrentPage(1)
        fetchProducts()
    }

    const handleAddToCart = async (product: Product) => {
        if (product.sizes && product.sizes.length > 0) {
            const success = await addToCart(product._id, 1, product.sizes[0].name)
            if (success) {
                alert('Product added to cart!')
            }
        }
    }

    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Products</h1>
                    
                    {/* Search */}
                    <form onSubmit={handleSearch} className="max-w-md">
                        <div className="flex">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search products..."
                                className="flex-1 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
                            />
                            <button
                                type="submit"
                                className="px-6 py-2 bg-primary text-white rounded-r-md hover:bg-primary-hard focus:outline-none focus:ring-2 focus:ring-primary"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                {/* Loading */}
                {loading && (
                    <div className="flex justify-center items-center py-12">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
                    </div>
                )}

                {/* Error */}
                {error && (
                    <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded mb-6">
                        {error}
                    </div>
                )}

                {/* Products Grid */}
                {!loading && !error && (
                    <>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                            {products.map((product) => (
                                <div key={product._id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                                    <Link href={`/products/${product._id}`}>
                                        <div className="aspect-w-1 aspect-h-1 w-full h-48 bg-gray-200">
                                            {product.images && product.images[0] ? (
                                                <Image
                                                    src={product.images[0]}
                                                    alt={product.name}
                                                    width={300}
                                                    height={200}
                                                    className="w-full h-full object-cover"
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-gray-400">
                                                    No Image
                                                </div>
                                            )}
                                        </div>
                                    </Link>
                                    
                                    <div className="p-4">
                                        <Link href={`/products/${product._id}`}>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2 hover:text-primary">
                                                {product.name}
                                            </h3>
                                        </Link>
                                        
                                        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                                            {product.description}
                                        </p>
                                        
                                        {product.sizes && product.sizes.length > 0 && (
                                            <div className="mb-3">
                                                <span className="text-lg font-bold text-primary">
                                                    ${product.sizes[0].price}
                                                </span>
                                                {product.sizes.length > 1 && (
                                                    <span className="text-sm text-gray-500 ml-1">
                                                        - ${Math.max(...product.sizes.map(s => s.price))}
                                                    </span>
                                                )}
                                            </div>
                                        )}
                                        
                                        <button
                                            onClick={() => handleAddToCart(product)}
                                            className="w-full bg-primary text-white py-2 px-4 rounded-md hover:bg-primary-hard focus:outline-none focus:ring-2 focus:ring-primary transition-colors"
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center mt-8">
                                <nav className="flex space-x-2">
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                        disabled={currentPage === 1}
                                        className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Previous
                                    </button>
                                    
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        <button
                                            key={page}
                                            onClick={() => setCurrentPage(page)}
                                            className={`px-3 py-2 border rounded-md text-sm font-medium ${
                                                currentPage === page
                                                    ? 'bg-primary text-white border-primary'
                                                    : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                                            }`}
                                        >
                                            {page}
                                        </button>
                                    ))}
                                    
                                    <button
                                        onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                        disabled={currentPage === totalPages}
                                        className="px-3 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        Next
                                    </button>
                                </nav>
                            </div>
                        )}

                        {/* Empty State */}
                        {products.length === 0 && (
                            <div className="text-center py-12">
                                <p className="text-gray-500 text-lg">No products found.</p>
                                {searchQuery && (
                                    <button
                                        onClick={() => {
                                            setSearchQuery('')
                                            setCurrentPage(1)
                                        }}
                                        className="mt-4 text-primary hover:text-primary-hard"
                                    >
                                        Clear search
                                    </button>
                                )}
                            </div>
                        )}
                    </>
                )}
            </div>
        </div>
    )
}