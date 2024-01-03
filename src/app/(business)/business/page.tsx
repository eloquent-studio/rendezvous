import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from '@/components/props/button'

export default function BusinessesPage () {
  return (
    <>
      <div className="w-full h-full">
        <div className='w-full h-64 bg-blue-950'>
          <div className="w-full flex flex-row justify-between items-center">
            <div className="w-full h-full p-8 md:p-2 text-white flex flex-col items-center justify-center gap-4 ">
              <div>
                <p className="font-extrabold text-xl md:text-2xl lg:text-3xl">
                何か特にお考えですか。
                </p>
                <p className="font-bold md:text-lg lg:text-xl">
                You think it. And got a rendezvous
                </p>
                </div>
              <Link href="/" className='border border-gray-50 rounded-full px-8 py-1 text-sm font-semibold'>How Rendezvous Work</Link>
            </div>
          </div>
        </div>
        <main className='max-w-screen-lg mx-auto '>
          <div className="w-full flex gap-1 lg:gap-4 pt-4 h-full">
            {/* LEFT */}
            <div className="hidden w-1/5 h-screen md:flex flex-col gap-4 bg-sky-400">
              sidebar
            </div>
            {/* CENTER */}
            <div className="flex-1 h-full px-2 md:p-0 flex flex-col gap-4">
              <div className='grid grid-cols-2 md:grid-cols-3 gap-4'>
                a
              </div>
            </div>
          </div>
        </main>
      </div>
      </>
)
}
