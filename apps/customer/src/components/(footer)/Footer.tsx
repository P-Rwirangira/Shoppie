import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Footer() {
    return (
        <div className='flex flex-col gap-5 px-5 py-10 bg-foreground text-gray-400 text-sm lg:px-20 xl:px-32'>
            <div className='flex flex-col gap-5 md:basis-full md:flex-row md:justify-between'>
                <div className='flex flex-col gap-5 md:basis-[20%] lg:basis-[30%]'>
                    <Image src='/logo-white.svg' alt='logo' width={178} height={38} />
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.
                    </p>
                    <div className='flex gap-6 md:gap-2 md:text-xs text-white font-medium'>
                        <span className="border-b border-primary pb-1">(256) 754001-001</span>
                        <span className="text-gray-400">or</span>
                        <span className="border-b border-primary pb-1">info@chafetz.com</span>
                    </div>
                </div>
                <div className='flex gap-y-5 gap-x-10 flex-wrap md:gap-x-4 md:basis-[80%] lg:justify-end lg:gap-x-6'>
                    <div className='flex flex-col gap-2 min-w-[40%] md:min-w-[15%] lg:min-w-[20%]'>
                        <h6 className='text-white font-semibold text-base'>My Account</h6>
                        <Link href="" className='hover:text-primary'>My Account</Link>
                        <Link href="" className='hover:text-primary'>Order History</Link>
                        <h6 className='text-white font-semibold text-base'>Cart</h6>
                        <Link href="" className='hover:text-primary'>Wishlist</Link>
                    </div>
                    <div className='flex flex-col gap-2 min-w-[40%] md:min-w-[15%] lg:min-w-[20%]'>
                        <h6 className='text-white font-semibold text-base'>Helps</h6>
                        <Link href="" className='hover:text-primary'>Contact Us</Link>
                        <Link href="" className='hover:text-primary'>Faqs</Link>
                        <Link href="" className='hover:text-primary'>Terms & Conditions</Link>
                        <Link href="" className='hover:text-primary'>Privacy Policy</Link>
                    </div>
                    <div className='flex flex-col gap-2 min-w-[40%] md:min-w-[15%] lg:min-w-[20%]   '>
                        <h6 className='text-white font-semibold text-base'>Proxy</h6>
                        <Link href="" className='hover:text-primary'>About</Link>
                        <Link href="" className='hover:text-primary'>Shop</Link>
                        <Link href="" className='hover:text-primary'>Product</Link>
                        <Link href="" className='hover:text-primary'>About Us</Link>
                        <Link href="" className='hover:text-primary'>Track Order</Link>
                    </div>
                    <div className='flex flex-col gap-2 min-w-[40%] md:min-w-[15%] lg:min-w-[20%]'>
                        <h6 className='text-white font-semibold text-base'>Categories</h6>
                        <Link href="" className='hover:text-primary'>Fruit & Categories</Link>
                        <Link href="" className='hover:text-primary'>Meat & Fish</Link>
                        <Link href="" className='hover:text-primary'>Bread & Bakery</Link>
                        <Link href="" className='hover:text-primary'>Beauty & Health</Link>
                        <Link href="" className='hover:text-primary'>Baby Care</Link>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center flex-col gap-4 md:basis-full md:flex-row md:justify-between'>
                <span>Copyright © 2024 Chafetz. All rights reserved.</span>
                <div className='flex gap-3'>
                    <button type='button' className='flex items-center gap-2'>
                        <Image src='/applePay.svg' alt='Apple Pay' width={45} height={31} />
                    </button>
                    <button type='button' className='flex items-center gap-2'>
                        <Image src='/visa.svg' alt='Visa' width={45} height={31} />
                    </button>
                    <button type='button' className='flex items-center gap-2'>
                        <Image src='/mastercard.png' alt='Mastercard' width={45} height={31} />
                    </button>
                    <button type='button' className='flex items-center gap-2'>
                        <Image src='/discover.png' alt='Discover' width={45} height={31} />
                    </button>
                    <button type='button' className='flex items-center gap-2'>
                        <Image src='/payment.png' alt='Secure Payment' className='h-full' width={45} height={35} />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Footer