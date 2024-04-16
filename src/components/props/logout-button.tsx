"use client";

import { LogOutAction } from "@/actions/auth/logout";
import React from "react";

export default function LogoutButton() {
  return (
    <button
      type="button"
      onClick={async () => {
        await LogOutAction();
      }}
      className="flex items-center p-2 text-gray-900 transition duration-75 rounded-lg hover:bg-gray-100 group w-full"
    >
      <svg
        className="flex-shrink-0 w-5 h-5 text-gray-500 transition duration-75 group-hover:text-gray-900"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 18 16"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
        />
      </svg>
      <span className="ms-3 whitespace-nowrap">Log Out</span>
    </button>
  );
}
