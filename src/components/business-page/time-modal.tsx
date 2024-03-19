"use client";

import React, { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";

export default function TimeModal() {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  //for exiting when you click anywhere except the white part
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const BodyContent = (
    <div className="flex flex-col gap-4">
      <header className="w-full h-full mb-4">
        <h1 className="uppercase font-medium text-xl">select time </h1>
      </header>
      <div className="w-full h-full flex flex-col md:flex-row gap-8 md:gap-4">
        <div className="w-full h-full md:h-[65vh] p-4">
          <ol className="relative text-gray-500 border-s border-gray-200">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-4 ring-white">
                <h1 className="font-extrabold">✓</h1>
              </span>
              <h3 className="font-medium leading-tight">Business Name</h3>
              <p className="text-sm">Dentist</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-4 ring-white">
                <h1 className="font-extrabold">✓</h1>
              </span>
              <h3 className="font-medium leading-tight">Select Date</h3>
              <p className="text-sm">Mar 12, 2024</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-4 ring-white">
                <h1 className="font-extrabold">✓</h1>
              </span>
              <h3 className="font-medium leading-tight">Select Time</h3>
              <p className="text-sm">Select a suitable time for you!</p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Complete</h3>
            </li>
          </ol>
        </div>
        <div className="w-full h-full md:h-[65vh]">
          <form className="mb-6">
            <div className="w-full h-full grid grid-flow-row gap-1">
              <Appoint date={"09:00"} />
              <Appoint date={"10:00"} />
              <Appoint date={"11:00"} />
              <Appoint date={"13:00"} />
              <Appoint date={"14:00"} full={true} />
            </div>
            <button
              type="submit"
              className="text-white bg-blue-700 hover:bg-blue-800 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block"
            >
              Complete
            </button>
          </form>
        </div>
      </div>
    </div>
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-2 right-8 text-white/80 hover:text-white/20 duration-500 transition-all ease-in"
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
      </button>

      <div
        ref={wrapper}
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 py-16 overflow-auto"
      >
        {BodyContent}
      </div>
    </div>
  );
}

const Appoint = ({ date, full }: { date: string; full?: boolean }) => {
  return (
    <button
      className={`border border-gray-300 hover:bg-lime-200 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block ${
        full == true &&
        "text-white bg-gray-300 rounded focus:outline-none hover:bg-gray-300"
      }`}
      disabled={full}
    >
      {date}
    </button>
  );
};
