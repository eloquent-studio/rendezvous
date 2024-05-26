"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CalendarItem({
  day,
  month,
  disabled = false,
  username,
  year,
  rndv,
  urndv,
}: {
  day: number;
  disabled?: boolean;
  username: string;
  month: number;
  year: number;
  rndv: any;
  urndv: any;
}) {
  const [today, setToday] = useState<number>(0);
  const [thisMonth, setThisMonth] = useState<number>(0);

  const dayView = day < 10 ? "0" + day : day.toString().padStart(2, "0");
  const monthView = (month + 1).toString().padStart(2, "0");

  useEffect(() => {
    const currentDate = new Date();
    setToday(currentDate.getDate());
    setThisMonth(currentDate.getMonth());
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
    <Link
      href={`/business/${username}/t?date=${year}-${monthView}-${dayView}`}
      className="hover:bg-gray-50"
    >
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
        >
          {dayView}
        </p>
        {hasRendezvous
          ? (rndv && urndv).map((rnd: any) => {
              const rendezvousDate = new Date(rnd.rendezvousAt);
              const rendezvousDay = rendezvousDate.getDate().toString().padStart(2, "0");
              const rendezvousMonth = (rendezvousDate.getMonth() + 1).toString().padStart(2, "0");
              const rendezvousYear = rendezvousDate.getFullYear();
              const rendezvousHour = rendezvousDate.getHours().toString().padStart(2, "0");

              return (
                !rnd.isCancelled && `${year}-${monthView}-${dayView}` === `${rendezvousYear}-${rendezvousMonth}-${rendezvousDay}` ? (
                  <span key={rnd.id} className="w-full">
                    <p className="w-full px-1 py-0.5 bg-lime-600 text-white rounded mt-1">
                      {`${rendezvousHour}:00`}
                    </p>
                  </span>
                ) : null
              );
            })
          : null}
      </div>
    </Link>
  );
}

// {hasRendezvous &&
//   (rndv && urndv).map((rnd: any) => (
//     <div
//       key={rnd.id}
//       className="w-full flex items-center justify-center"
//     >
//       {rnd.isCancelled === false && (
//         <button
//           type="button"
//           onClick={() => setOpen(true)}
//           className="w-fit h-fit relative"
//         >
//           {`${year}-0${month + 1}-${day}` ===
//             rnd.rendezvousAt.toISOString().split("T")[0] && (
//             <>
//               <svg
//                 className="w-8 h-8 text-gray-500"
//                 aria-hidden="true"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="currentColor"
//                 viewBox="0 0 20 20"
//               >
//                 <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z" />
//               </svg>
//               <span className="absolute -top-1 -right-1 text-xs px-1 bg-green-500 rounded-full text-white font-medium">
//                 {rendezvousCount}
//               </span>
//             </>
//           )}
//         </button>
//       )}
//     </div>
//   ))}