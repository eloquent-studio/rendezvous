"use client";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function CalendarItem({
  day,
  month,
  disabled = false,
  currentDate,
  year,
  rndv,
  urndv,
}: {
  day: number;
  disabled?: boolean;
  currentDate: any;
  month: number;
  year: number;
  rndv: any;
  urndv: any;
}) {
  const [today, setToday] = useState<number>(0);
  const [thisMonth, setThisMonth] = useState<number>(0);
  const [open, setOpen] = useState(false);

  const dayView = day < 10 ? "0" + day : day;

  useEffect(() => {
    const currentDate = new Date().getDate();
    const currentMonth = new Date().getMonth();
    setToday(currentDate);
    setThisMonth(currentMonth);
  }, []);

  const hasRendezvous = (rndv && urndv).some((item: any) => {
    if (!item.isCancelled) {
      const rendezvousDate = new Date(item.rendezvousAt);
      return (
        rendezvousDate.getDate() === day &&
        rendezvousDate.getMonth() === month &&
        rendezvousDate.getFullYear() === year
      );
    } else {
      return false;
    }
  });

  const rendezvousCount = rndv.concat(urndv).filter((item: any) => {
    const rendezvousDate = new Date(item.rendezvousAt);
    return (
      rendezvousDate.getDate() === day &&
      rendezvousDate.getMonth() === month &&
      rendezvousDate.getFullYear() === year
    );
  }).length;

  if (
    disabled ||
    new Date(year, month, day) <=
      new Date(new Date().setDate(new Date().getDate() - 1))
  ) {
    return (
      <div className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200 bg-gray-100">
        <p className="opacity-50 text-sm font-medium text-gray-800">
          {dayView}
        </p>
      </div>
    );
  }

  return (
    <div className="hover:bg-gray-50">
      <div
        className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200"
        data-id={day}
      >
        <p
          className={
            today === day && thisMonth === month
              ? "bg-sky-600 px-2 py-1.5 rounded-full text-white"
              : "hover:bg-gray-50 text-sm font-medium text-gray-800"
          }
          onClick={() => setOpen(true)}
        >
          {day < 10 ? "0" + day : day}
        </p>

        {hasRendezvous &&
          (rndv && urndv).map((rnd: any) => (
            <div
              key={rnd.id}
              className="w-full flex items-center justify-center"
            >
              {rnd.isCancelled === false && (
                <button
                  type="button"
                  onClick={() => setOpen(true)}
                  className="w-fit h-fit relative"
                >
                  {`${year}-0${month + 1}-${day}` ===
                    rnd.rendezvousAt.toISOString().split("T")[0] && (
                    <>
                      <svg
                        className="w-8 h-8 text-gray-500"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
                      </svg>
                      <span className="absolute -top-1 -right-1 text-xs px-1 bg-green-500 rounded-full text-white font-medium">
                        {rendezvousCount}
                      </span>
                    </>
                  )}
                </button>
              )}
            </div>
          ))}
      </div>

      {open && (
        <Appoint
          currentDate={currentDate}
          hasRendezvous={hasRendezvous}
          urndv={urndv}
          rndv={rndv}
          year={year}
          month={month}
          day={day}
          onClose={() => setOpen(false)}
        />
      )}
    </div>
  );
}

const Appoint = ({
  onClose,
  currentDate,
  urndv,
  rndv,
  hasRendezvous,
  year,
  month,
  day
}: {
  onClose: () => void;
  currentDate: any;
  urndv: any;
  rndv: any;
  hasRendezvous: boolean;
  year: any;
  month: any;
  day: any
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg">
        <div className="absolute top-0 right-0 p-2">
          <button
            onClick={onClose}
            className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-full text-sm h-8 w-8 flex items-center justify-center"
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
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900">
            {currentDate.toDateString()}
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          </p>
          <ul className="my-4">
            {hasRendezvous &&
              (rndv && urndv).map((rnd: any) => (
                <li
                  key={rnd.id}
                  className="flex items-center p-3 text-base font-semibold text-gray-900 bg-gray-50 group hover:shadow whitespace-nowrap mb-2"
                >
                  {rnd.isCancelled === false && `${year}-0${month + 1}-${day}` ===
                    rnd.rendezvousAt.toISOString().split("T")[0] && (
                    <>
                      <span className="flex-1">{rnd.email}</span>
                      <span className="my-2">-</span>
                      <span className="flex-1 text-end">
                        {rnd.rendezvousAt.toTimeString().substring(0, 5)}
                      </span>
                    </>
                  )}
                </li>
              ))}
          </ul>
          <div>
            <Link
              href="#"
              className="inline-flex items-center text-xs font-normal text-gray-500 hover:underline"
            >
              <svg
                className="w-3 h-3 me-2"
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
                  d="M7.529 7.988a2.502 2.502 0 0 1 5 .191A2.441 2.441 0 0 1 10 10.582V12m-.01 3.008H10M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              How can I cancel my rendezvouses?
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
