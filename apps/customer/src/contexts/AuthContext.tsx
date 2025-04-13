'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'
import { User } from '../lib/types'
import api from '../lib/api'

interface AuthContextType {
  user: User | null
  loading: boolean
  login: (email: string, password: string) => Promise<void>
  register: (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    phoneNumber?: string
  }) => Promise<void>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export const useAuth = () => {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Check if user is logged in on app start
    const checkAuth = async () => {
      try {
        const token = localStorage.getItem('auth_token')
        if (token) {
          const response = await api.getProfile()
          if (response.ok && response.data) {
            setUser(response.data)
          } else {
            // Invalid token, clear it
            api.clearToken()
          }
        }
      } catch (error) {
        console.error('Auth check failed:', error)
        api.clearToken()
      } finally {
        setLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    try {
      const response = await api.login(email, password)
      if (response.ok) {
        // Get user profile after successful login
        const profileResponse = await api.getProfile()
        if (profileResponse.ok && profileResponse.data) {
          setUser(profileResponse.data)
        }
      } else {
        throw new Error(response.error || 'Login failed')
      }
    } catch (error) {
      throw error
    }
  }

  const register = async (userData: {
    firstName: string
    lastName: string
    email: string
    password: string
    gender: string
    phoneNumber?: string
  }) => {
    try {
      const response = await api.register(userData)
      if (!response.ok) {
        throw new Error(response.error || 'Registration failed')
      }
      // After successful registration, you might want to auto-login
      // or redirect to login page
    } catch (error) {
      throw error
    }
  }

  const logout = () => {
    api.clearToken()
    setUser(null)
  }

  const value: AuthContextType = {
    user,
    loading,
    login,
    register,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}