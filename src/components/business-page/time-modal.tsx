"use client";

import React, { useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { CompleteSubmit } from "./submit-button";
import { GuestRendevous } from "@/actions/business/guest-rendevous";
import { useFormState } from "react-dom";

const initialState: { error: string; success:"" } = {
  error: "",
  success: "",
};

export default function TimeModal({
  date,
  businessName,
}: {
  date: String;
  businessName: string;
}) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const [time, setTime] = useState("");

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

  const onClick = (date: string) => {
    setTime(date);
  };

  const [state, formAction] = useFormState(GuestRendevous, initialState);

  const BodyContent = (
    <div className="flex flex-col gap-4">
      {/* <header className="w-full h-full">
        <h1 className="uppercase font-medium text-xl">select time </h1>
      </header> */}
      <div className="w-full h-full flex flex-col md:flex-row gap-8 md:gap-4">
        <div className="w-full h-full md:h-[65vh]">
          <header className="">
            <h1 className="uppercase font-medium text-xl">Select Time </h1>
          </header>
          <form className="">
            <div className="w-full h-full grid grid-flow-row gap-1">
              <Appoint date={"09:00"} onClick={onClick} />
              <Appoint date={"10:00"} onClick={onClick} />
              <Appoint date={"11:00"} onClick={onClick} />
              <Appoint date={"13:00"} onClick={onClick} />
              <Appoint date={"14:00"} full={true} onClick={onClick} />
              <Appoint date={"15:00"} onClick={onClick} />
              <Appoint date={"16:00"} onClick={onClick} />
              <Appoint date={"17:00"} onClick={onClick} />
            </div>
          </form>
        </div>
        <div className="w-full h-full md:h-[65vh]">
          {/* <ol className="relative text-gray-500 border-s border-gray-200">
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
          </ol> */}
          <form action={formAction}>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="name@company.com"
                required
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                placeholder="Full Name"
                required
              />
            </div>
            <div className="mb-4">
              <div>
                <div className="mb-4">
                  <label
                    htmlFor="phoneNumber"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone Number
                  </label>
                  <input
                    type="text"
                    id="phoneNumber"
                    name="phoneNumber"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    pattern="[0-9]{10}"
                    placeholder="1234567890"
                    required
                  />
                </div>
              </div>
            </div>
            <div className="mb-2">
              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows={2}
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Your message..."
              ></textarea>
            </div>
            <div className="py-2">
            {state.error && (
              <p className="text-xs font-medium text-red-600">{state.error}</p>
            )}
            {state.success && (
              <p className="text-xs font-medium text-green-600">{state.success}</p>
            )}
          </div>

            <input type="hidden" name="date" value={date as string} />
            <input type="hidden" name="time" value={time} />
            <input type="hidden" name="businessName" value={businessName} />

            <CompleteSubmit />
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

const Appoint = ({
  date,
  full,
  onClick,
}: {
  date: string;
  full?: boolean;
  onClick: (date: string) => void;
}) => {
  return (
    <button
      type="button"
      className={`border border-gray-300 hover:bg-lime-200 w-full focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 focus:outline-none block ${
        full == true &&
        "text-white bg-gray-300 rounded focus:outline-none hover:bg-gray-300"
      }`}
      disabled={full}
      onClick={() => {
        onClick(date);
      }}
    >
      {date}
    </button>
  );
};
