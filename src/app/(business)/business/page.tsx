import Link from "next/link";
import React from "react";
import Card from "@/components/business-page/card";
import SecondaryNavbar from "@/components/business-page/secondary-navbar";
import { getBusinesses } from "@/actions/business/business";

export default async function BusinessesPage() {
  const businesses = await getBusinesses()

  return (
    <>
      <SecondaryNavbar />
      <div className="max-w-screen-lg mx-auto h-full mt-16 p-2 md:p-0">
        <div className="w-full h-48 bg-blue-950 rounded-md">
          <div className="w-full h-full p-8 md:p-2 text-white flex flex-col items-center justify-center gap-4">
            <div>
              <p className="font-extrabold text-xl md:text-2xl lg:text-3xl">
                何か特にお考えですか。
              </p>
              <p className="font-bold md:text-lg lg:text-xl">
                You think it. And got a rendezvous
              </p>
            </div>
            <Link
              href="/"
              className="border border-gray-50 rounded-full px-8 py-1 text-sm font-semibold"
            >
              How Rendezvous Work
            </Link>
          </div>
        </div>
        <main className="max-w-screen-lg mx-auto my-4">
          <div className="w-full h-full px-2 md:p-0 flex flex-col gap-4">
            <nav className="w-full items-center justify-between flex flex-row gap-4">
              <form className="w-1/2">
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className=" w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  {/* <button type="submit"  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm">Search</button> */}
                </div>
              </form>
              <form className="w-1/2">
                <label
                  htmlFor="search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only"
                >
                  Search
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <svg
                      className="w-4 h-4 text-gray-500 dark:text-gray-400"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 20"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                      />
                    </svg>
                  </div>
                  <input
                    type="search"
                    className=" w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-full bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="Search..."
                    required
                  />
                  {/* <button type="submit"  className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm">Search</button> */}
                </div>
              </form>
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              {businesses.map((business) => (
                <Card business={business} key={business.id}/>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
}
