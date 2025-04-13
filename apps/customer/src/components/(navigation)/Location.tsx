
import React from 'react'

function Location() {
    return (
        <div className='flex justify-center md:justify-between items-center px-4 py-2 md:px-5 lg:px-20 xl:px-32 bg-primary md:bg-background md:text-foreground text-white md:border-b md:border-border'>
            <div className='flex items-center gap-3 md:text-gray-500'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                </svg>
                <span className='text-xs md:text-sm'>Store Location: Kampala-334, Uganda</span>
            </div>
            <div className='hidden md:flex items-center gap-5 text-xs text-gray-500'>
                <div>
                    <select>
                        <option value="en">Eng</option>
                        <option value="fr">Fr</option>
                    </select>
                    <select>
                        <option value="usd">USD</option>
                        <option value="eur">EUR</option>
                    </select>
                </div>
                <div>
                    <a href="/signin" className='hover:text-primary transition-colors duration-300'>Sign In</a> | <a href="/signup" className='hover:text-primary transition-colors duration-300'>Sign Up</a>
                </div>
            </div>
        </div>
    )
}

export default Location