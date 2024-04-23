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
      console.log("Aaaaaaa");
      return (
        rendezvousDate.getDate() === day &&
        rendezvousDate.getMonth() === month &&
        rendezvousDate.getFullYear() === year
      );
    } else {
      return false;
    }
  });

  console.log(hasRendezvous);

  if (
    disabled ||
    new Date(year, month, day) <=
      new Date(new Date().setDate(new Date().getDate() - 1))
  ) {
    return (
      <div>
        <div className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200 bg-gray-100">
          <p className="opacity-50 text-sm font-medium text-gray-800">
            {dayView}
          </p>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/business/${username}/t?date=${year}-${month + 1}-${day}`}
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
          ? (rndv && urndv).map((rnd: any) => (
              <span key={rnd.id} className="w-full">
                {rnd.isCancelled === false ? (
                  <p className="w-full px-1 py-0.5 bg-lime-600 text-white rounded mt-1">
                    {rnd.rendezvousAt.getHours().toString()}:00
                  </p>
                ) : null}
              </span>
            ))
          : null}
      </div>
    </Link>
  );
}
