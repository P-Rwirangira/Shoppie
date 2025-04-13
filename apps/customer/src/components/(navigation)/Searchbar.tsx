'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useCart } from '../../hooks/useCart'
import { useAuth } from '../../contexts/AuthContext'

function Searchbar({ setNavVisible }: { setNavVisible: (value: boolean) => void }) {
    const { getCartItemCount, getCartTotal } = useCart()
    const { isAuthenticated } = useAuth()

    return (
        <div className='flex justify-between items-center px-4 py-4 md:px-5 lg:px-20 xl:px-32 md:bg-background md:text-foreground text-primary-text md:border-b md:border-border'>
            <div className='flex items-center gap-2 flex-1'>
                <button type='button' className='md:hidden block' onClick={() => setNavVisible(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                </button>
                <Image src='/logo.svg' alt='logo' width={178} height={38} />
            </div>
            <div className='hidden md:flex items-center gap-2 border border-border rounded-md w-full flex-1 pl-2 md:ml-2 basis-1/4'>
                <Image src='/search.svg' alt='search' width={24} height={24} />
                <input type="text" placeholder='Search for products' className='outline-none flex-1' />
                <button type='button' className='bg-primary px-4 py-2 rounded-tr-md rounded-br-md text-white justify-end'>Search</button>
            </div>
            <div className='flex items-center gap-[2px] flex-1 justify-end'>
                <Link href="" className='md:px-1 lg:px-2 md:border-r md:border-border'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
                    </svg>
                </Link>
                <Link href="" className='lg:px-1'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                    </svg>
                </Link>
                <div className='flex items-center gap-2 relative '>
                    <Link href='' className='flex items-center gap-2 relative md:border-l md:border-border md:pl-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
                        </svg>

                        <span className='absolute -top-1 -right-1 bg-primary text-white rounded-full px-1 text-xs'>{getCartItemCount()}</span>
                    </Link>
                    <div className='md:flex hidden flex-col'>
                        <span className='text-[11px] text-gray-700'>Shopping Cart:</span>
                        <span className='text-sm text-gray-900'>${getCartTotal().toFixed(2)}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Searchbar