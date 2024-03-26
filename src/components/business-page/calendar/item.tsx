"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function CalendarItem({
  day,
  month,
  disabled = false,
  username,
  year,
}: {
  day: number;
  disabled?: boolean;
  username: string;
  month: number;
  year: number,
}) {
  const [today, setToday] = useState<number>();
  const dayView = day < 10 ? "0" + day : day;

  useEffect(() => {
    const currentDate = new Date().getDate();
    setToday(currentDate);
  }, []);

  if (disabled) {
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
    <Link href={`/business/${username}/t?date=${year}-${month + 1}-${day}`} className="hover:bg-gray-50">
      <div
        className="flex items-start justify-start w-32 md:w-36 p-2 h-32 flex-col relative border border-gray-200"
        data-id={day}
      >
        <p
          className={
            today === day
              ? "bg-sky-600 px-2 py-1 rounded-full text-white"
              : "hover:bg-gray-50 text-sm font-medium text-gray-800"
          }
        >
          {dayView}
        </p>

        <div className=""></div>
      </div>
    </Link>
  );
}
