// Type definitions for the Customer App

export interface User {
  _id: string
  firstName: string
  lastName: string
  email: string
  gender: string
  phoneNumber?: string
  photoUrl?: string
  verified: boolean
  status: string
  RoleId: {
    _id: string
    name: string
  }
  createdAt: string
  updatedAt: string
}

export interface Product {
  _id: string
  sellerId: string
  name: string
  description: string
  images: string[]
  colors?: string[]
  categoryName: {
    _id: string
    name: string
  }
  sizes: Array<{
    _id: string
    name: string
    price: number
    stock: number
  }>
  createdAt: string
  updatedAt: string
}

export interface CartItem {
  _id: string
  productId: Product
  quantity: number
  size: string
  color?: string
}

export interface Cart {
  _id: string
  userId: string
  items: CartItem[]
  updatedAt: string
}

export interface WishlistItem {
  _id: string
  productId: Product
  addedAt: string
}

export interface Wishlist {
  _id: string
  userId: string
  items: WishlistItem[]
  updatedAt: string
}

export interface OrderItem {
  productId: string
  quantity: number
  price: number
  size: string
  color?: string
}

export interface Order {
  _id: string
  userId: string
  items: OrderItem[]
  totalAmount: number
  shippingAddress: {
    street: string
    city: string
    state: string
    zipCode: string
    country: string
  }
  paymentMethod: string
  paymentStatus: 'pending' | 'paid' | 'failed'
  orderStatus: 'pending' | 'processing' | 'shipped' | 'delivered' | 'cancelled'
  trackingInfo?: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  _id: string
  name: string
  description?: string
  image?: string
  createdAt: string
  updatedAt: string
}

export interface Size {
  _id: string
  name: string
  price: number
  stock: number
}

export interface ApiError {
  ok: false
  error: string
  message?: string
}

export interface ApiSuccess<T = any> {
  ok: true
  data: T
  message?: string
}