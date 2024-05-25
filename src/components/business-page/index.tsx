"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useState } from "react";

export default function BusinessPage({ business, Calendar }: any) {
  return (
    <div className="w-full h-fit mt-16">
      <main className="max-w-screen-lg w-full h-full mx-auto">
        <section className="w-full flex flex-col gap-1 lg:gap-4 h-full justify-center md:p-0">
          <div className="px-4 md:px-0 w-full h-full flex flex-col items-start justify-center md:flex-row md:items-center md:justify-start gap-4">
            <div className="shrink-0 relative w-full h-48 md:h-48 md:w-48">
              <Image
                src={
                  business?.image
                    ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + business.image
                    : "/anonymous.webp"
                }
                fill
                alt="business image"
                className="absolute object-cover rounded object-center w-full h-48 md:h-48 md:w-48"
              />
            </div>
            <div className="w-full h-full md:h-48 flex flex-col items-start justify-between gap-1 pr-4">
              <div className="text-base font-semibold leading-none text-gray-900">
                <h1 className="uppercase text-lg">{business?.name}</h1>
                {business?.user?.fullname ? (
                  <p className="text-xs text-gray-500">
                    by{" "}
                    <span className="text-black font-bold">
                      {business.user.fullname}
                    </span>
                  </p>
                ) : null}
              </div>
              {business?.bio && (
                <p className="text-sm w-4/5 md:w-full">{business.bio}</p>
              )}
              <ul className="w-fit h-fit flex flex-col justify-start items-start gap-1.5 text-sm">
                <li className="flex items-center justify-center">
                  <span className="me-1 font-semibold text-gray-400 w-5 h-5 flex justify-center items-center">
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
                  <span className="text-sky-600">{business?.profession}</span>
                </li>
                <li className="flex items-center justify-center">
                  <span className="me-1 font-semibold text-gray-400">
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
                  <span className="text-center">{business?.location}</span>
                </li>
              </ul>
              <Link
                href={`/business/${business.name}/c`}
                className="inline-flex items-center justify-center w-fit px-16 py-2 mt-2 text-sm font-medium bg-gray-900 text-white border border-gray-900 rounded-md focus:outline-none hover:bg-gray-950 focus:z-10 focus:ring-4 focus:ring-gray-200"
              >
                Contact
              </Link>
            </div>
          </div>
        </section>
        <div className="w-full h-full p-4 md:p-0 my-8">{Calendar}</div>
      </main>
    </div>
  );
}
