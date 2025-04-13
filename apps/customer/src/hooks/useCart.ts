'use client'

import { useState, useEffect } from 'react'
import { Cart, CartItem } from '../lib/types'
import api from '../lib/api'
import { useAuth } from '../contexts/AuthContext'

export const useCart = () => {
  const [cart, setCart] = useState<Cart | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const { isAuthenticated } = useAuth()

  const fetchCart = async () => {
    if (!isAuthenticated) return

    setLoading(true)
    setError(null)
    try {
      const response = await api.getCart()
      if (response.ok) {
        setCart(response.data)
      } else {
        setError(response.error || 'Failed to fetch cart')
      }
    } catch (err) {
      setError('Failed to fetch cart')
      console.error('Cart fetch error:', err)
    } finally {
      setLoading(false)
    }
  }

  const addToCart = async (
    productId: string,
    quantity: number,
    size: string,
    color?: string
  ) => {
    if (!isAuthenticated) {
      setError('Please login to add items to cart')
      return false
    }

    setLoading(true)
    setError(null)
    try {
      const response = await api.addToCart(productId, quantity, size, color)
      if (response.ok) {
        await fetchCart() // Refresh cart
        return true
      } else {
        setError(response.error || 'Failed to add item to cart')
        return false
      }
    } catch (err) {
      setError('Failed to add item to cart')
      console.error('Add to cart error:', err)
      return false
    } finally {
      setLoading(false)
    }
  }

  const updateCartItem = async (itemId: string, quantity: number) => {
    if (!isAuthenticated) return false

    setLoading(true)
    setError(null)
    try {
      const response = await api.updateCartItem(itemId, quantity)
      if (response.ok) {
        await fetchCart() // Refresh cart
        return true
      } else {
        setError(response.error || 'Failed to update cart item')
        return false
      }
    } catch (err) {
      setError('Failed to update cart item')
      console.error('Update cart error:', err)
      return false
    } finally {
      setLoading(false)
    }
  }

  const removeFromCart = async (itemId: string) => {
    if (!isAuthenticated) return false

    setLoading(true)
    setError(null)
    try {
      const response = await api.removeFromCart(itemId)
      if (response.ok) {
        await fetchCart() // Refresh cart
        return true
      } else {
        setError(response.error || 'Failed to remove item from cart')
        return false
      }
    } catch (err) {
      setError('Failed to remove item from cart')
      console.error('Remove from cart error:', err)
      return false
    } finally {
      setLoading(false)
    }
  }

  const clearCart = async () => {
    if (!isAuthenticated) return false

    setLoading(true)
    setError(null)
    try {
      const response = await api.clearCart()
      if (response.ok) {
        setCart(null)
        return true
      } else {
        setError(response.error || 'Failed to clear cart')
        return false
      }
    } catch (err) {
      setError('Failed to clear cart')
      console.error('Clear cart error:', err)
      return false
    } finally {
      setLoading(false)
    }
  }

  const getCartItemCount = () => {
    if (!cart?.items) return 0
    return cart.items.reduce((total, item) => total + item.quantity, 0)
  }

  const getCartTotal = () => {
    if (!cart?.items) return 0
    return cart.items.reduce((total, item) => {
      const size = item.productId.sizes.find(s => s.name === item.size)
      return total + (size?.price || 0) * item.quantity
    }, 0)
  }

  useEffect(() => {
    if (isAuthenticated) {
      fetchCart()
    } else {
      setCart(null)
    }
  }, [isAuthenticated])

  return {
    cart,
    loading,
    error,
    addToCart,
    updateCartItem,
    removeFromCart,
    clearCart,
    fetchCart,
    getCartItemCount,
    getCartTotal,
  }
}