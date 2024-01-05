"use client"

import { useState } from "react";
import Image from "next/image";
import Info from "@/components/dashboard/customers/info";
import Notes from "@/components/dashboard/customers/notes";

const SELECTED_TAB_STYLE = "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500"
const NOT_SELECTED_TAB_STYLE = "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"


export default function Page() {
    const [deleteModal, SetDeleteModal] = useState(false)

    const [tab, SetTab] = useState(0)

    const customers = [{
        full_name: "Fadime Nazlı Dogrul",
        email: "faya@gmail.com",
        imageUrl: "",
    },
    {
        full_name: "Mustafa Kemal Gordesli",
        email: "m.kemalgordesli@gmail.com",
        imageUrl: "",
    }]

    const tabComponent = () => {
        switch (tab) {
            case 0:
                return <Info />
            case 2:
                return <Notes />
        }
    }

    return (
        <>
            <div className="flex flex-row w-full h-full">
                <div className={`w-full md:w-[400px] lg:w-[400px] bg-slate-300 h-full`}>
                    <div className="m-4 my-3">
                        <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                        <div className="relative">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                                </svg>
                            </div>
                            <input type="search" id="default-search" className="block w-full p-3 ps-9 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Name, Email..." />
                        </div>
                    </div>

                    <div className="mx-4 flex flex-row justify-between items-center">
                        <div className="flex flex-col py-2.5">
                            <span className="text-sm">All</span>
                            <span className="text-xl">Customers</span>
                        </div>

                        <div>
                            <button type="button" className="flex flex-row items-center text-[#087396] hover:text-[#81c0d4]   focus:ring-0 focus:outline-none font-medium p-2.5 pr-0 text-center">
                                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
                                <span className="ml-0.5">New Customer</span>
                            </button>
                        </div>
                    </div>

                    <div className="text-sm flex flex-row justify-end px-4">
                        <span className="text-[#087396] mr-1"> 1 - 1</span> of 1
                    </div>

                    <ul>
                        {
                            customers.map((item, index) => <Item key={index} {...item} onClick={() => alert(index)} deleteClick={(event: any) => { event.stopPropagation(); SetDeleteModal(true); }} />)
                        }
                    </ul>
                </div>
                <div
                    className="bg-white w-full h-full cursor-default flex flex-col"
                >
                    <div className="w-full">
                        <div className="border-gray-400 bg-white text-black flex flex-row rounded-lg p-2 px-2 mx-4 my-2">
                            <div>
                                <Image
                                    src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                                    id="output"
                                    width={60}
                                    height={60}
                                    className="rounded-full w-15 h-15"
                                    alt="profile image"
                                />
                            </div>
                            <div className="flex flex-col justify-evenly ml-2 px-2">
                                <div className="">DOGRUL FADIME</div>
                                <div className="text-xs">nemesis99@gmail.com</div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full">
                        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
                            <ul className="flex flex-wrap -mb-px">
                                <li className="me-2">
                                    <button onClick={() => SetTab(0)} className={tab == 0 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE}>Info</button>
                                </li>
                                <li className="me-2">
                                    <button onClick={() => SetTab(1)} className={tab == 1 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE}>Appointments</button>
                                </li>
                                <li className="me-2">
                                    <button onClick={() => SetTab(2)} className={tab == 2 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE}>Notes</button>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="w-full h-full flex flex-col">
                        {
                            tabComponent()
                        }
                    </div>
                </div>
            </div>
            <div id="popup-modal" tabIndex={-1} className={`${deleteModal ? "flex fixed" : "hidden"} mx-auto z-50 justify-center items-center w-full inset-0 h-full`}>
                <div className="relative p-4 w-full max-w-md max-h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <button onClick={() => SetDeleteModal(false)} type="button" className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="popup-modal">

                            <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                            </svg>
                            <span className="sr-only">Close modal</span>
                        </button>
                        <div className="p-4 md:p-5 text-center">
                            <svg className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                            </svg>
                            <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                            <button data-modal-hide="popup-modal" type="button" className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2">
                                Yes, I&apos;m sure
                            </button>
                            <button onClick={() => SetDeleteModal(false)} data-modal-hide="popup-modal" type="button" className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
                        </div>
                    </div>
                </div>
            </div>
        </>

    );
}

const Item = ({ full_name, email, imageUrl, onClick, deleteClick }: any) => {
    return <li onClick={onClick} className="border cursor-pointer border-gray-400 bg-white text-black flex flex-row rounded-lg p-2 px-2 mx-4 my-2">
        <div>
            <Image
                src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                id="output"
                width={40}
                height={40}
                className="rounded-full w-10 h-10"
                alt="profile image"
            />
        </div>
        <div className="flex flex-col justify-evenly ml-2 px-2">
            <div className="">DOGRUL FADIME</div>
            <div className="text-xs">nemesis99@gmail.com</div>
        </div>
        <button onClick={deleteClick} className="ml-auto hover:text-red-400">
            <svg className="fill-current" xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 -960 960 960" width="24"><path d="M292.309-140.001q-29.923 0-51.115-21.193-21.193-21.192-21.193-51.115V-720h-40v-59.999H360v-35.384h240v35.384h179.999V-720h-40v507.691q0 30.308-21 51.308t-51.308 21H292.309ZM680-720H280v507.691q0 5.385 3.462 8.847 3.462 3.462 8.847 3.462h375.382q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463V-720ZM376.155-280h59.999v-360h-59.999v360Zm147.691 0h59.999v-360h-59.999v360ZM280-720v520-520Z" /></svg>
        </button>
    </li>
}