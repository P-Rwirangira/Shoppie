'use client'

import Link from 'next/link'
import React, { useState } from 'react'

function Navs({ isNavVisible, setNavVisible }: { isNavVisible: boolean, setNavVisible: (value: boolean) => void }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    return (
        <div className={`flex justify-between items-start py-4 px-4 md:px-0 md:py-0 pr-4 md:pr-5 lg:pr-20 xl:pr-32 text-primary-text bg-foreground absolute md:relative top-0 left-0 w-full h-full md:h-auto md:text-sm select-none md:-translate-x-0 ${isNavVisible ? '' : '-translate-x-full transition-transform duration-300'}`}>
            <div className={`flex justify-start items-center flex-col md:flex-row w-full text-gray-400`}>
                <div className='w-full flex justify-end mb-5 md:hidden'>
                    <button type='button' className='p-2 rounded-full bg-gray-600' onClick={() => setNavVisible(false)} onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                            setNavVisible(false)
                        }
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                <div className='relative'>
                    <button
                        className='hidden gap-3 py-4 px-4 bg-primary text-white md:flex justify-between items-center cursor-pointer'
                        type='button'
                        onClick={() => setDropdownOpen(!isDropdownOpen)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                                setDropdownOpen(!isDropdownOpen)
                            }
                        }}
                    >
                        <span className='text-sm w-[7rem]'>All Categories</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                        </svg>
                    </button>
                    {isDropdownOpen && (
                        <div className='absolute bg-white text-black shadow-lg mt-2 rounded'>
                            <Link href="/category1" className='block px-4 py-2 hover:bg-gray-200'>Category 1</Link>
                            <Link href="/category2" className='block px-4 py-2 hover:bg-gray-200'>Category 2</Link>
                        </div>
                    )}
                </div>
                <div className='flex w-full flex-col md:flex-row'>
                    <Link href="" className='w-full py-3 border-b border-gray-600 md:border-none md:w-auto md:px-5 md:py-4 hover:text-gray-400 transition-colors duration-300 text-white md:hover:bg-primary md:hover:text-white'>Home</Link>
                    <Link href="" className='w-full py-3 border-b border-gray-600 md:border-none md:w-auto md:px-5 md:py-4 hover:text-gray-400 transition-colors duration-300 md:hover:bg-primary md:hover:text-white'>Shop</Link>
                    <Link href="" className='w-full py-3 border-b border-gray-600 md:border-none md:w-auto md:px-5 md:py-4 hover:text-gray-400 transition-colors duration-300 md:hover:bg-primary md:hover:text-white'>Cart</Link>
                    <Link href="" className='w-full py-3 md:border-none md:w-auto md:px-5 md:py-4 hover:text-gray-400 transition-colors duration-300 md:hover:bg-primary md:hover:text-white'>Contact</Link>
                </div>
                <div className='w-full justify-end items-center text-white gap-1 hidden md:flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                    </svg>
                    <span className='text-sm'>(256) 754001-001</span>
                </div>
            </div>
        </div>
    )
}

export default Navs