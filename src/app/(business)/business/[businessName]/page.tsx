      
import CloseSvg from '@/components/icons/close-svg'
import Button from '@/components/props/button'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function BusinessPage () {
  return (
    <>
      <div className="w-full h-full mt-10">
        <div className='w-full h-48 mt-2 relative px-2 md:p-0'>
          <Image
            src="/1.jpg"
            fill
            alt=''
            className='absolute object-cover rounded-md'
          />
        </div>
        <main className='max-w-screen-lg mx-auto'>
          <div className="w-full flex gap-1 lg:gap-4 pt-4 h-full">
            {/* LEFT */}
            <aside className="hidden w-1/3 h-screen md:flex flex-col gap-4 bg-gray-50 rounded-md p-4">
              <div className="w-full h-full px-2 md:p-0 flex flex-col gap-4">
                <div className="px-2 py-2 w-full">
                  <div className='w-full flex flex-col justify-center items-center'>
                    <Image
                      src="/1.jpg"
                      height={96}
                      width={96}
                      alt=''
                      className='object-cover h-24 w-24 rounded-full'
                    />
                    <span className="uppercase font-semibold mt-4">Company Name</span>
                    <p className="text-sm text-gray-600 font-semibold">by <span className='text-black'>Some User</span></p>
                  </div>
                  <div className="flex items-center justify-between my-4">
                    <div className="flex flex-row items-center justify-evenly w-full bg-gray-100 rounded-md">
                      <div className='text-sm font-semibold text-gray-800'>
                        smt
                      </div>
                      {/* DER STERN */}
                      <div className="flex items-center my-3">
                        <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-800">
                          <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
                          </svg>
                        </div>
                        <span className="text-xs font-semibold ms-1">5.0</span>
                    </div>             
                    </div>
                  </div>
                  <Button label='Contact' fullWidth large/>  
                  <div className='font-semibold my-4 p-2'>
                    <h5 className="text-sm tracking-tight">About</h5>
                    <span className='text-xs text-gray-700'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facere mollitia quos placeat dolore ut fugiat iste corrupti, fuga ipsa, libero provident veniam asperiores beatae voluptas laudantium voluptate culpa in quam?</span>
                  </div>
                  <ul className='border-t border-gray-200 text-xs font-semibold p-2 text-gray-800'>
                    <li className='border-b p-4 flex w-full flex-row items-center justify-between'>
                      <span>Created</span>
                      <span className='text-gray-700'>Nov 2024</span>
                    </li>
                    <li className='border-b p-4 flex w-full flex-row items-center justify-between'>
                      <span>Created</span>
                      <span className='text-gray-700'>Nov 2024</span>
                    </li>
                    <li className='border-b p-4 flex w-full flex-row items-center justify-between'>
                      <span>Created</span>
                      <span className='text-gray-700'>Nov 2024</span>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
            {/* CENTER */}
            <div className="w-2/3 h-full">
              calendar
              
            </div>
          </div>
        </main>
      </div>
    </>
  )
}