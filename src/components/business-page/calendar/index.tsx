"use client"

import { useEffect, useState } from "react";

import CalendarItem from "./item";

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getDayOfWeek(year: number, month: number, day: number) {
  return new Date(year, month, day).getDay();
}

const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];


export default function Calendar() {

  function handlePrevMonth() {
    setCurrentDate(prevDate => {
      const prevMonth = prevDate.getMonth() === 0 ? 11 : prevDate.getMonth() - 1;
      const prevYear = prevDate.getMonth() === 0 ? prevDate.getFullYear() - 1 : prevDate.getFullYear();
      return new Date(prevYear, prevMonth, 1);
    });
  }

  function handleNextMonth() {
    setCurrentDate(prevDate => {
      const nextMonth = prevDate.getMonth() === 11 ? 0 : prevDate.getMonth() + 1;
      const nextYear = prevDate.getMonth() === 11 ? prevDate.getFullYear() + 1 : prevDate.getFullYear();
      return new Date(nextYear, nextMonth, 1);
    });
  }

  const [currentDate, setCurrentDate] = useState(new Date());
  const [groupedWeeks, SetGroupedWeeks] = useState<{ day: number; month: number; year: number; disabled: boolean; }[][]>([])

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
        disabled: true
      });
    }

    for (let i = 1; i <= daysInMonth; i++) {
      weeks.push({
        day: i,
        month,
        year,
        disabled: false
      });
    }

    const remainingDays = 35 - weeks.length;
    const nextMonth = month === 11 ? 0 : month + 1;

    for (let i = 1; i <= remainingDays; i++) {
      weeks.push({
        day: i,
        month: nextMonth,
        year: month === 11 ? year + 1 : year,
        disabled: true
      });
    }

    const tempGroupedWeeks = [];
    for (let i = 0; i < 5; i++) {
      tempGroupedWeeks.push(weeks.slice(i * 7, (i + 1) * 7));
    }

    SetGroupedWeeks(tempGroupedWeeks)

  }, [currentDate])



  return (
    <>
      <div className="w-full h-full overflow-y-auto overflow-x-auto flex flex-row justify-center items-center relative no-scrollbar bg-white">
        <div className="bg-white md:p-2 w-full no-scrollbar">
          <p className="text-4xl font-bold text-gray-800 mb-2">{monthNames[currentDate.getMonth()]} {currentDate.getFullYear()}</p>
          <div className="w-full my-1 flex flex-row justify-between items-center">
            <button className="p-2 px-4 border rounded" onClick={handlePrevMonth}>{"<- Previous Month"}</button>
            <button className="p-2 px-4 border rounded" onClick={handleNextMonth}>{"Next Month ->"}</button>
          </div>
          <div className="inline-flex flex-col items-start justify-start h-full w-full">
            <div className="flex overflow-x-auto items-start justify-start h-6">
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Mon
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Tue
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Wed
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Thu
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Fri
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Sat
              </p>
              <p className="w-32 md:w-36 h-full text-sm font-semibold text-gray-800 uppercase">
                Sun
              </p>
            </div>
            <div className=" flex flex-col items-start justify-start">
              {
                groupedWeeks.map((item, index) =>
                  <div className="inline-flex items-center justify-start h-full w-full" key={index}>
                    {
                      item?.map((element, i) => {
                        return <CalendarItem day={element?.day} disabled={element?.disabled} key={element?.day} />
                      })
                    }
                  </div>

                )
              }
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
