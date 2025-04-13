// API Client for Customer App
const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api'

interface ApiResponse<T = any> {
  ok: boolean
  data?: T
  message?: string
  error?: string
}

class ApiClient {
  private baseURL: string
  private token: string | null = null

  constructor(baseURL: string) {
    this.baseURL = baseURL
    // Get token from localStorage if available
    if (typeof window !== 'undefined') {
      this.token = localStorage.getItem('auth_token')
    }
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<ApiResponse<T>> {
    const url = `${this.baseURL}${endpoint}`
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    if (this.token) {
      headers.Authorization = `Bearer ${this.token}`
    }

    try {
      const response = await fetch(url, {
        ...options,
        headers,
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'API request failed')
      }

      return data
    } catch (error) {
      console.error('API request failed:', error)
      throw error
    }
  }

  // Auth methods
  setToken(token: string) {
    this.token = token
    if (typeof window !== 'undefined') {
      localStorage.setItem('auth_token', token)
    }
  }

  clearToken() {
    this.token = null
    if (typeof window !== 'undefined') {
      localStorage.removeItem('auth_token')
    }
  }

  // Authentication API
  async login(email: string, password: string) {
    const response = await this.request<{ token: string }>('/auth/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    })
    
    if (response.data?.token) {
      this.setToken(response.data.token)
    }
    
    return response
  }

  async register(userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    phoneNumber?: string
  }) {
    return this.request('/users', {
      method: 'POST',
      body: JSON.stringify(userData),
    })
  }

  async forgotPassword(email: string) {
    return this.request('/auth/forgot-password', {
      method: 'POST',
      body: JSON.stringify({ email }),
    })
  }

  async resetPassword(token: string, newPassword: string) {
    return this.request(`/auth/reset-password/${token}`, {
      method: 'POST',
      body: JSON.stringify({ newPassword }),
    })
  }

  // Products API
  async getProducts(params?: {
    page?: number
    limit?: number
    category?: string
    search?: string
  }) {
    const searchParams = new URLSearchParams()
    if (params?.page) searchParams.append('page', params.page.toString())
    if (params?.limit) searchParams.append('limit', params.limit.toString())
    if (params?.category) searchParams.append('category', params.category)
    if (params?.search) searchParams.append('search', params.search)

    const query = searchParams.toString()
    return this.request(`/products${query ? `?${query}` : ''}`)
  }

  async getProduct(id: string) {
    return this.request(`/products/${id}`)
  }

  // Cart API
  async getCart() {
    return this.request('/cart')
  }

  async addToCart(productId: string, quantity: number, size: string, color?: string) {
    return this.request('/cart', {
      method: 'POST',
      body: JSON.stringify({ productId, quantity, size, color }),
    })
  }

  async updateCartItem(itemId: string, quantity: number) {
    return this.request(`/cart/items/${itemId}`, {
      method: 'PATCH',
      body: JSON.stringify({ quantity }),
    })
  }

  async removeFromCart(itemId: string) {
    return this.request(`/cart/items/${itemId}`, {
      method: 'DELETE',
    })
  }

  async clearCart() {
    return this.request('/cart', {
      method: 'DELETE',
    })
  }

  // Wishlist API
  async getWishlist() {
    return this.request('/wishlist')
  }

  async addToWishlist(productId: string) {
    return this.request('/wishlist', {
      method: 'POST',
      body: JSON.stringify({ productId }),
    })
  }

  async removeFromWishlist(productId: string) {
    return this.request(`/wishlist/${productId}`, {
      method: 'DELETE',
    })
  }

  // Orders API
  async getOrders() {
    return this.request('/orders')
  }

  async createOrder(orderData: {
    items: Array<{
      productId: string
      quantity: number
      size: string
      color?: string
    }>
    shippingAddress: {
      street: string
      city: string
      state: string
      zipCode: string
      country: string
    }
    paymentMethod: string
  }) {
    return this.request('/orders', {
      method: 'POST',
      body: JSON.stringify(orderData),
    })
  }

  async getOrder(id: string) {
    return this.request(`/orders/${id}`)
  }

  // User Profile API
  async getProfile() {
    return this.request('/users/profile')
  }

  async updateProfile(userData: {
    firstName?: string
    lastName?: string
    phoneNumber?: string
    photoUrl?: string
  }) {
    return this.request('/users/profile', {
      method: 'PATCH',
      body: JSON.stringify(userData),
    })
  }

  async updatePassword(currentPassword: string, newPassword: string) {
    return this.request('/auth/update-password', {
      method: 'POST',
      body: JSON.stringify({ currentPassword, newPassword }),
    })
  }
}

export const api = new ApiClient(API_BASE_URL)
export default api