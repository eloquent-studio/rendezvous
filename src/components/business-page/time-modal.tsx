"use client";

import React, { useRef, useCallback, useState } from "react";
import { useRouter } from "next/navigation";
import { CompleteSubmit } from "./submit-button";
import { GuestRendezvous } from "@/actions/business/guest-rendezvous";
import { useFormState } from "react-dom";
import { UserRendezvous } from "@/actions/business/user-rendezvous";
import Link from "next/link";

const initialState: { error: ""; success: boolean } = {
  error: "",
  success: false,
};

export default function TimeModal({
  date,
  businessName,
  rndv,
  user,
  id,
  urndv,
  dateString,
}: {
  date: String;
  businessName: string;
  rndv: any;
  user: any;
  id: any;
  urndv: any;
  dateString: string;
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

  const full = (time: string, dateString: string) => {
    const isFull = (urndv || rndv).some((item: any) => {
      if (!item.isCancelled) {
        const rndvDate = new Date(item.rendezvousAt);
        const rndvDay = rndvDate.getDate().toString().padStart(2, "0");
        const rndvHour = rndvDate.getHours().toString().padStart(2, "0");
        return rndvHour === time && rndvDay === dateString.substring(8, 10);
      } else {
        return false;
      }
    });
    return isFull;
  };

  const [state, formAction] = useFormState(GuestRendezvous, initialState);

  const [stateu, formAction2] = useFormState(UserRendezvous, initialState);

  const BodyContent = (
    <div className="flex flex-col gap-4">
      {/* <header className="w-full h-full">
        <h1 className="uppercase font-medium text-xl">select time </h1>
      </header> */}
      <div className="w-full h-full flex flex-col md:flex-row gap-8 md:gap-4">
        <div className="w-full h-full md:h-[65vh]">
          <header>
            <h1 className="uppercase font-medium text-xl">Select Time </h1>
          </header>
          <form>
            <div
              className={`w-full h-full grid grid-flow-row gap-1`}
            >
              <Appoint
                date={"09:00"}
                isFull={full("09", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"10:00"}
                isFull={full("10", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"11:00"}
                isFull={full("11", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"13:00"}
                isFull={full("13", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"14:00"}
                isFull={full("14", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"15:00"}
                isFull={full("15", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"16:00"}
                isFull={full("16", dateString)}
                onClick={onClick}
                time={time}
              />
              <Appoint
                date={"17:00"}
                isFull={full("17", dateString)}
                onClick={onClick}
                time={time}
              />
            </div>
          </form>
        </div>
        <div className="w-full h-full flex justify-center items-center p-0 md:px-4">
          {id ? (
            <form action={formAction2} className="w-full">
              <ol
                className={"ml-8 relative w-fulltext-gray-500 border-s border-gray-200"}
              >
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

              <input type="hidden" name="date" value={date as string} />
              <input type="hidden" name="time" value={time} />
              <input type="hidden" name="businessName" value={businessName} />
              <input type="hidden" name="userId" value={id} />
              <input type="hidden" name="email" value={user.email} />
              <input type="hidden" name="fullName" value={user.fullname} />

              <div className="p-4">
                <CompleteSubmit />
              </div>
            </form>
          ) : (
            <form action={formAction} className="w-full">
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
              <div className="mb-">
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
                  <p className="text-xs font-medium text-red-600">
                    {state.error}
                  </p>
                )}
                {state.success && (
                  <p className="text-xs font-medium text-green-600">
                    {state.success}
                  </p>
                )}
              </div>
              <span className="font-base text-sm w-full flex flex-row justify-end items-center gap-2 mb-3">Don&apos;t have an account?
                <Link
                  href={`/register?next=/business/${businessName}`}
                  className="font-semibold hover:underline"
                >
                  Sign Up Now!
                </Link>
              </span>



              <input type="hidden" name="date" value={date as string} />
              <input type="hidden" name="time" value={time} />
              <input type="hidden" name="businessName" value={businessName} />

              <CompleteSubmit />
            </form>
          )}
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
        {state.success ? (
          <div className="w-full h-full flex items-center justify-center flex-col  sm:flex-row">
            <span className="text-lime-300">
              <svg
                className="fill-current"
                xmlns="http://www.w3.org/2000/svg"
                height="80"
                viewBox="0 -960 960 960"
                width="80"
              >
                <path d="M382-240 154-468l57-57 171 171 367-367 57 57-424 424Z" />
              </svg>
            </span>
            <div className="flex flex-col items-center sm:items-start text-lg">
              <div>The transaction is successful.</div>
              <div className="text-center">
                Rendezvous information will be sent to your e-mail.
              </div>
            </div>
          </div>
        ) : (
          BodyContent
        )}
      </div>
    </div>
  );
}

const Appoint = ({
  date,
  onClick,
  isFull,
  time,
}: {
  date: string;
  onClick: (date: string) => void;
  isFull: boolean;
  time: string;
}) => {
  console.log("TIME"+time)
  console.log("DATE"+date)

  return (
    <button
      type="button"
      className={`rounded w-full focus:ring-4 focus:ring-blue-300 font-medium text-sm px-5 py-2.5 mb-2 block focus:outline-none border border-gray-300 focus:border-none ${isFull
        ? "text-white bg-gray-300 cursor-not-allowed hover:bg-gray-300"
        : "hover:bg-gray-200"
        }  ${time == date ? "bg-lime-300" : ""}`}
      disabled={isFull}
      onClick={() => {
        onClick(date);
      }}
    >
      {date}
    </button>
  );
};