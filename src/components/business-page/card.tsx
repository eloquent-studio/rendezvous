import React from 'react'
import Link from 'next/link'
import Image from 'next/image'


const Card = () => {
  return (
    <div  className="w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
        <div className='h-48 relative w-full'>
          <Image 
          fill 
          className="absolute p- rounded-t-lg" 
          src="/1.jpg" alt="image" />
        </div>
        <div  className="p-2">
          <Link href="/">
            <h5  className="text-lg font-semibold tracking-tight text-gray-900">Business Name</h5>
          </Link>
          <span className='text-xs font-semibold'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
          </span>
          <div  className="flex items-center justify-between">
            {/* DIE STERNE */}
            <div className="flex items-center my-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-800">
                <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                </svg>
              </div>
              <span className="text-xs font-semibold ms-1">5.0</span>
            </div>
            <span  className="tex font-bold text-gray-900">$599</span>
            </div>
            <Link href="/"  className="underline font-medium text-sm w-full flex justify-end">Visit &gt;</Link>
        </div>
    </div>
  )
}

export default Card