import React from "react";
import Link from "next/link";
import Image from "next/image";

interface Business {
  id: number,
  name: string,
  profession?: string | null,
  location?: string | null, 
  image?: string | null,
  bio?: string | null
}
interface BusinessProps {
  business: Business
}

const Card = ({business}: BusinessProps) => {
  return (
    <>
      <div className="w-full h-full bg-white border border-gray-200 rounded-2xl shadow hover:shadow-md">
        <div className="h-48 relative w-full">
          <Image
            fill
            className="absolute rounded-t-2xl object-contain object-center h-full w-full"
            src={
              business?.image
                ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                  business.image
                : "/anonymous.webp"
            }
            alt="image"
          />
        </div>
        <div>
          <div className="w-full h-full flex flex-col items-start justify-normal gap-1 px-4 pt-2">
            <Link
              href={`/business/${business.name}`}
              className="w-full text-lg font-semibold tracking-tight text-gray-900 truncate hover:underline"
            >
              {business.name}
            </Link>
            <span
            className={`text-xs font-medium tracking-tight text-gray-800 w-full line-clamp-1 ${business.bio ? "p-0" : "py-2"}`}
            >
              {business.bio}
            </span>
          </div>
          <div className="p-4">
            <div className="w-full flex items-center justify-around border rounded-lg border-gray-500 p-3 text-xs">
              <div className="flex items-center">
                <div className="flex items-center space-x-1 rtl:space-x-reverse text-gray-800">
                  <svg
                    className="w-3.5 h-3.5 text-amber-400"
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
              <span className="text-gray-500">|</span>
              <span className="font-semibold">{business.location}</span>
              <span className="text-gray-500">|</span>
              <span className="font-semibold">{business.profession}</span>
            </div>
          </div>
          <div className="w-full flex items-center justify-end border-t p-4 bg-gray-100  rounded-b-2xl">
            <Link
              href={`/business/${business.name}`}
              className="flex flex-row gap-0.5 items-center text-blue-900 hover:text-blue-950 font-semibold text-sm text-center"
            >
              <p>Visit</p>
              <svg className="w-4 h-4 hover:rotate-45" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 9 10" fill="currentcolor" aria-hidden="true"><path d="M5.793 3H3.5V2h4v4h-1V3.707L2.354 7.854l-.708-.708L5.793 3Z"/></svg>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
