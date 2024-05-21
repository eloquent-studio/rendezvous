"use client";

import React from "react";
import Link from "next/link";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ count }: { count: number }) => {
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const pathname = usePathname();

  const page = searchParams.get("page") || 1;
  const params = new URLSearchParams(searchParams);
  const ITEM_PER_PAGE = 3;

  const hasPrev = ITEM_PER_PAGE * (Number(page) - 1) > 0;
  const hasNext = ITEM_PER_PAGE * (Number(page) - 1) + ITEM_PER_PAGE < count;

  const handleChange = (type: string) => {
    type === "prev"
      ? params.set("page", (Number(page) - 1).toString())
      : params.set("page", (Number(page) + 1).toString());

    replace(`${pathname}?${params}`);
  };

  return (
    <nav className="w-fit self-end flex flex-row justify-center items-center md:mb-8">
      <button
        type="button"
        disabled={!hasPrev}
        onClick={() => handleChange("prev")}
        className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 disabled:text-gray-300 disabled:cursor-none disabled:hover:bg-white"
      >
        <span className="sr-only">Previous</span>
        <svg
          className="w-3 h-3 rtl:rotate-180"
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
      <button
        type="button"
        disabled={!hasNext}
        onClick={() => handleChange("next")}
        className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 disabled:text-gray-300 disabled:cursor-none disabled:hover:bg-white"
      >
        <span className="sr-only">Next</span>
        <svg
          className="w-3 h-3 rtl:rotate-180"
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
    </nav>
  );
};

export default Pagination;
