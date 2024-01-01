import Image from "next/image";

export default function Page() {
    return (

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
                        {/* <button type="submit" className="text-white absolute end-2 bottom-[7.5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-1.5 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button> */}
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
                    <Item />
                    <Item />
                    <Item />
                </ul>
            </div>
            <div
                className="bg-white w-full h-full cursor-default"
            ></div>
        </div>
    );
}

const Item = () => {
    return <li className="border cursor-pointer border-gray-400 bg-white text-black flex flex-row rounded-lg p-2 px-4 mx-4 my-2">
        <div>
            <Image
                src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                id="output"
                width={50}
                height={50}
                className="rounded-full"
                alt="profile image"
            />
        </div>
        <div className="flex flex-col justify-evenly ml-2 px-2">
            <div className="">DOGRUL FADIME</div>
            <div className="text-xs">nemesis99@gmail.com</div>
        </div>
    </li>
}