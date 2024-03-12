"use client";
import Calendar from "@/components/business-page/calendar";
import Button from "@/components/props/button";
import Image from "next/image";
import React from "react";
import { useState } from "react";

export default function BusinessPage({ business }: any) {
  const [modal, SetModal] = useState(false);
  console.log(business);
  return (
    <>
      <div className="w-full h-full mt-8">
        <main className="max-w-screen-lg w-full h-full mx-auto pt-8 md:pt-0">
          <div className="w-full flex flex-col gap-1 lg:gap-4 pt-4 h-full md:h-[50vh] justify-center p-4 md:p-0">
            <div className="flex w-full items-center">
              <div className="me-3 shrink-0">
                <Image
                  src={
                    business?.image
                      ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL + business.image
                      : "/1.jpg"
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
                  <li className="flex items-center mb-2">
                    <span className="me-2 font-semibold text-gray-400">
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
                    <span className="text-blue-600 hover:underline">
                      Dentist
                    </span>
                  </li>
                  <li className="flex items-start mb-2">
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
                    <span>
                      16192 Coastal Highway Lewes, Delaware 19958 USA
                    </span>
                  </li>
                </ul>
                <div className="flex">
                  <button
                    type="button"
                    className="inline-flex items-center justify-center w-full px-5 py-2 mt-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg focus:outline-none hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200"
                  >
                    Contact
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full p-4 md:p-0 mt-4">
            <Calendar onClick={() => SetModal(true)} />
          </div>
        </main>
      </div>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          modal ? "flex fixed" : "hidden"
        } mx-auto z-50 justify-center items-center w-full inset-0 h-full bg-gray-900/40 backdrop-blur-sm backdrop-brightness-5`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700 p-4">
            <button
              onClick={() => SetModal(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
            >
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
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
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-lime-500 hover:bg-lime-700 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                Yes, I&apos;m sure
              </button>
              <button
                onClick={() => SetModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Appoint = ({ date, full }: { date: string; full?: boolean }) => {
  return (
    <button
      className={`rounded-md px-3 py-2 hover border border-gray-300 hover:bg-lime-200 ${
        full == true &&
        "text-white bg-gray-300 rounded focus:outline-none hover:bg-gray-300"
      }`}
      disabled={full}
    >
      {date}
    </button>
  );
};
