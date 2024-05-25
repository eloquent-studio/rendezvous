"use client";
import Button from "@/components/props/button";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function BusinessPage({ business, Calendar }: any) {
  const [modal, SetModal] = useState(false);
  return (
    <>
      <div className="w-full h-full mt-8">
        <main className="max-w-screen-lg w-full h-full mx-auto pt-8 md:pt-0">
          <div className="w-full flex flex-col gap-1 lg:gap-4 h-full md:h-[40vh] justify-center md:p-0">
            <div className="flex w-full items-center">
              <div className="me-3 shrink-0">
                <Image
                  src={
                    business?.image
                      ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + business.image
                      : "/anonymous.webp"
                  }
                  height={192}
                  width={192}
                  alt="business image"
                  className="object-cover h-48 w-48 rounded-md"
                />
              </div>
              <div>
                <div className="mb-1 text-base font-semibold leading-none text-gray-900">
                  <h1 className="uppercase">{business?.name}</h1>
                </div>
                {business?.user?.fullname ? (
                  <p className="text-sm text-gray-600 font-semibold mb-2">
                    by{" "}
                    <span className="text-black">
                      {business.user.fullname}
                    </span>
                  </p>
                ) : null}

                {business?.bio && (
                  <p className="mb-4 text-sm">{business.bio}</p>
                )}
                <ul className="text-sm">
                  <li className="flex items-center justify-start mb-2">
                    <span className="me-2 font-semibold text-gray-400 w-5 h-5 flex justify-center items-center">
                      <svg
                        className="w-4 h-4"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 21 20"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6.487 1.746c0 4.192 3.592 1.66 4.592 5.754 0 .828 1 1.5 2 1.5s2-.672 2-1.5a1.5 1.5 0 0 1 1.5-1.5h1.5m-16.02.471c4.02 2.248 1.776 4.216 4.878 5.645C10.18 13.61 9 19 9 19m9.366-6h-2.287a3 3 0 0 0-3 3v2m6-8a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                        />
                      </svg>
                    </span>
                    <span className="text-blue-600 hover:underline text-center">
                      {business?.profession}
                    </span>
                  </li>
                  <li className="flex items-center justify-start mb-2">
                    <span className="me-2 font-semibold text-gray-400">
                      <svg
                        className="w-5 h-5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 -960 960 960"
                      >
                        <path d="M360-440h80v-110h80v110h80v-190l-120-80-120 80v190Zm120 254q122-112 181-203.5T720-552q0-109-69.5-178.5T480-800q-101 0-170.5 69.5T240-552q0 71 59 162.5T480-186Zm0 106Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z" />
                      </svg>
                    </span>
                    <span className="text-center">
                      {/* 16192 Coastal Highway Lewes, Delaware 19958 USA */} {business?.location}
                    </span>
                  </li>
                </ul>
                <div className="flex">
                  <Link
                    href={`/business/${business.name}/c`}
                    className="inline-flex items-center justify-center w-full px-5 py-2 mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                  >
                    Contact
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-4 md:p-0 mt-4">
            {Calendar}
          </div>
        </main>
      </div>
    </>
  );
}
