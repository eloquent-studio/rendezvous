"use client";

import { useEffect, useState } from "react";
import CalendarItem from "./item";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getDayOfWeek(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay();
}

export default function Calendar({ rndv, urndv }: { rndv: any, urndv: any }) {
  function handlePrevMonth() {
    setCurrentDate((prevDate) => {
      const prevMonth =
        prevDate.getMonth() === 0 ? 11 : prevDate.getMonth() - 1;
      const prevYear =
        prevDate.getMonth() === 0
          ? prevDate.getFullYear() - 1
          : prevDate.getFullYear();
      return new Date(prevYear, prevMonth, 1);
    });
  }

  function handleNextMonth() {
    setCurrentDate((prevDate) => {
      const nextMonth =
        prevDate.getMonth() === 11 ? 0 : prevDate.getMonth() + 1;
      const nextYear =
        prevDate.getMonth() === 11
          ? prevDate.getFullYear() + 1
          : prevDate.getFullYear();
      return new Date(nextYear, nextMonth, 1);
    });
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [groupedWeeks, SetGroupedWeeks] = useState<
    { day: number; month: number; year: number; disabled: boolean }[][]
  >([]);

  useEffect(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    const daysInMonth = getDaysInMonth(year, month);
    const firstDayOfWeek = getDayOfWeek(year, month, 1);

    const prevMonthDaysCount = firstDayOfWeek - 1;
    const prevMonth = month === 0 ? 11 : month - 1;
    const prevMonthDays = getDaysInMonth(year, prevMonth);
    const startingDay = prevMonthDays - prevMonthDaysCount + 1;

    const weeks = [];

    for (let i = 0; i < prevMonthDaysCount; i++) {
      weeks.push({
        day: startingDay + i,
        month: prevMonth,
        year: month === 0 && prevMonth === 11 ? year - 1 : year,
        disabled: true,
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      weeks.push({
        day: i,
        month,
        year,
        disabled: false,
      });
    }

    const remainingDays = 35 - weeks.length;
    const nextMonth = month === 11 ? 0 : month + 1;

    for (let i = 1; i <= remainingDays; i++) {
      weeks.push({
        day: i,
        month: nextMonth,
        year: month === 11 ? year + 1 : year,
        disabled: true,
      });
    }

    const tempGroupedWeeks = [];
    for (let i = 0; i < 5; i++) {
      tempGroupedWeeks.push(weeks.slice(i * 7, (i + 1) * 7));
    }

    SetGroupedWeeks(tempGroupedWeeks);
  }, [currentDate]);

  const monthName = currentDate.toLocaleString("en-US", { month: "long" });

  return (
    <>
      <div className="w-full h-full overflow-auto flex flex-row justify-center items-center relative no-scrollbar pt-0 md:pt-48">
        <div className="md:p-2 w-full no-scrollbar">
          {/* <div className="w-full flex flex-row justify-between items-center mb-8">
            <p className="text-4xl font-bold text-gray-800">
              {monthName} {currentDate.getFullYear()}
            </p>
          </div> */}
          <div className="w-full flex flex-row items-center gap-2 justify-start mb-8">
            <button onClick={handlePrevMonth}>
              <svg
                className="w-3 h-3 rtl:rotate-180 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 1 1 5l4 4"
                />
              </svg>
            </button>
            <h1 className="font-medium text-xl uppercase">{monthName}</h1>
            <button onClick={handleNextMonth}>
              <svg
                className="w-3 h-3 rtl:rotate-180 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
            </button>
          </div>
          <div className="inline-flex flex-col items-start justify-start h-full w-full">
            <div className="flex overflow-x-auto items-start justify-start h-6">
              {[...Array(7)].map((_, i) => (
                <p
                  key={i}
                  className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase"
                >
                  {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][i]}
                </p>
              ))}
            </div>
            <div className="flex flex-col items-start justify-start overflow-y-visible">
              {groupedWeeks.map((week, index) => (
                <div
                  className="inline-flex items-center justify-start h-full w-full"
                  key={index}
                >
                  {week.map((dayInfo) => (
                    <CalendarItem
                      key={`${dayInfo.year}-${dayInfo.month}-${dayInfo.day}`}
                      year={dayInfo.year}
                      month={dayInfo.month}
                      day={dayInfo.day}
                      disabled={dayInfo.disabled}
                      rndv={rndv?.filter((item: any) => {
                        const rendezvousDate = new Date(item.rendezvousAt);
                        return (
                          rendezvousDate.getDate() === dayInfo.day &&
                          (rendezvousDate.getMonth()) === dayInfo.month &&
                          rendezvousDate.getFullYear() === dayInfo.year
                        );
                      })}
                      urndv={urndv?.filter((item: any) => {
                        const rendezvousDate = new Date(item.rendezvousAt);
                        return (
                          rendezvousDate.getDate() === dayInfo.day &&
                          (rendezvousDate.getMonth()) === dayInfo.month &&
                          rendezvousDate.getFullYear() === dayInfo.year
                        );
                      })}
                      currentDate={currentDate}
                    />
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
