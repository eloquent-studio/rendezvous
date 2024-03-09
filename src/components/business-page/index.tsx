"use client"
import Calendar from '@/components/business-page/calendar'
import Button from '@/components/props/button'
import Image from 'next/image'
import React from 'react'
import { useState } from 'react'

export default function BusinessPage({ bussiness }: any) {
    const [modal, SetModal] = useState(false)
    console.log(bussiness)
    return (
        <>
            <div className="w-full h-full mt-10">
                {/* <div className='w-full h-48 mt-2 relative px-2 md:p-0'>
                    <Image
                        src="/1.jpg"
                        fill
                        alt=''
                        className='absolute object-cover rounded-md'
                    />
                </div> */}
                <main className='max-w-screen-xl mx-auto'>
                    <div className="w-full flex gap-1 lg:gap-4 pt-4 h-full">
                        {/* LEFT */}
                        <aside className="hidden max-w-[360px] h-screen md:flex flex-col gap-4 bg-gray-50 rounded-md p-4">
                            <div className="w-full h-full px-2 md:p-0 flex flex-col gap-4">
                                <div className="px-2 py-2 w-full">
                                    <div className='w-full flex flex-col justify-center items-center'>
                                        <Image
                                            src={bussiness?.image ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + bussiness.image : "/1.jpg"}
                                            height={96}
                                            width={96}
                                            alt=''
                                            className='object-cover h-24 w-24 rounded-full'
                                        />
                                        <span className="uppercase font-semibold mt-4">{bussiness?.name}</span>
                                        {bussiness?.user?.fullname ? <p className="text-sm text-gray-600 font-semibold">by <span className='text-black'>{bussiness.user.fullname}</span></p> : null}
                                    </div>
                                    <div className="flex items-center justify-between my-4">
                                        <div className="flex flex-row items-center justify-evenly w-full bg-gray-100 rounded-md">
                                            <div className='text-sm font-semibold text-gray-800'>
                                                smt
                                            </div>
                                            {/* DIE STERNE */}
                                            <div className="flex items-center my-3">
                                                <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-800">
                                                    <svg className="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 22 20">
                                                        <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                    </svg>
                                                </div>
                                                <span className="text-xs font-semibold ms-1">5.0</span>
                                            </div>
                                        </div>
                                    </div>
                                    <Button label='Contact' fullWidth large />
                                    {bussiness?.bio &&
                                        <div className='font-semibold my-4 p-2'>
                                            <h5 className="text-sm tracking-tight">About</h5>
                                            <span className='text-xs text-gray-700'>{bussiness.bio}</span>
                                        </div>
                                    }
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
                        <div className="w-full h-full">
                            <Calendar onClick={() => SetModal(true)} />
                        </div>
                    </div>
                </main>
            </div>
            <div id="popup-modal" tabIndex={-1} className={`${modal ? "flex fixed" : "hidden"} mx-auto z-50 justify-center items-center w-full inset-0 h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => SetModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <div className="h-full grid grid-flow-row p-3 px-5 gap-1">
                                <Appoint date={"09:00"} />
                                <Appoint date={"10:00"} />
                                <Appoint date={"11:00"} />
                                <Appoint date={"13:00"} />
                                <Appoint date={"14:00"} full={true} />
                                <Appoint date={"15:00"} />
                            </div>
                            <button data-modal-hide="popup-modal" type="button" className="text-white bg-lime-500 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                Yes, I&apos;m sure
                            </button>
                            <button onClick={() => SetModal(false)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}


const Appoint = ({ date, full }: { date: string, full?: boolean }) => {
    return <button className={`rounded-md px-3 py-2 hover border border-gray-300 hover:bg-lime-200 ${full == true && "text-white bg-gray-300 rounded focus:outline-none hover:bg-gray-300"}`} disabled={full}>{date}</button>
}