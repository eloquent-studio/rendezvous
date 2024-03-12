import React from "react";
import Link from "next/link";
import Image from "next/image";

const Card = () => {
  return (
    <>
      <div className="w-full h-full bg-white border border-gray-200 rounded-lg shadow hover:shadow-md">
        <div className="h-64 relative w-full">
          <Image
            fill
            className="absolute rounded-t-lg"
            src="/1.jpg"
            alt="image"
          />
        </div>
        <div className="p-4">
          <Link href="#">
            <h5 className="text-lg font-semibold tracking-tight text-gray-900 dark:text-white">
              Apple Watch Series
            </h5>
          </Link>
          <a href="#">
            <h5 className="text-xs font-medium tracking-tight text-gray-700">
              Apple Watch Series 7 GPS, Aluminium Case, Starlight Sport
            </h5>
          </a>
          <div className="w-full flex items-center justify-between mt-2.5 mb-4">
            <div className="flex items-center my-3">
              <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-800">
                <svg
                  className="w-4 h-4"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 20"
                >
                  <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                </svg>
              </div>
              <span className="text-xs font-semibold ms-1">5.0</span>
            </div>
            <span className="text-sm underline font-semibold">Dentist</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-gray-900 dark:text-white">
              $599
            </span>
            <Link
              href="#"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-6 py-2 text-center "
            >
              Visit
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
