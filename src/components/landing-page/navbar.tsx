"use client"

import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Navbar = () => {
  const [active, setActive] = useState(false)

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false)
  }

  useEffect(() => {
    window.addEventListener("scroll", isActive)

    return () => {
      window.removeEventListener("scroll", isActive)
    }
  }, [])

  return (
    <div className={active ? "bg-white text-black fixed w-full top-0 left-0 z-20" : "bg-slate-600 text-white transition-all ease duration-500 fixed w-full top-0 left-0 z-20"}>
      <div className='max-w-screen-lg mx-auto p-2 lg:px-0'>
        <div className='flex flex-row justify-between items-center mb-2'>
          <div>
            <Link href="/">
              <span className='uppercase font-bold'>logo</span>
              <span className='text-slate-400 font-extrabold'>.</span>
            </Link>
          </div>
          <div className='flex flex-row items-center justify-end'>
            <Link href="/register">
              <button
                type="button"
                className="border border-slate-100 py-0.5 md:py-1 px-3 md:px-4 text-xs font-bold focus:outline-none bg-transparent rounded-lg hover:text-slate-100 hover:bg-slate-900 hover:border-slate-950 focus:z-10 focus:ring-4 focus:ring-gray-200 duration-500 transition-all ease-in"
                >
                  Join
                </button>
                </Link>
          </div>
        </div>
        <hr className='min-w-full' />
        <div className='flex flex-row items-center justify-between w-full font-semibold text-xs pt-1'>
          {active &&
            <>
              <Link href="/">Business</Link>
              <Link href="/">Become a Part</Link>
              <Link href="/">Rendezvous</Link>
              <Link href="/">Source</Link>
            </>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar