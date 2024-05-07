"use client";

import React from "react";
import { useState } from "react";

export default function DismissButton({today}: {today: any}) {
  const [dismissedItems, setDismissedItems] = useState<number[]>([]);

  // Function to handle dismissal of an item
  const handleDismiss = (itemId: number) => {
    setDismissedItems([...dismissedItems, itemId]);
  };

  return (
    <button
      type="button"
      className={`bg-transparent font-medium text-xs px-4 py-1.5 text-blue-500 hover:underline inline-flex items-center ${
        dismissedItems.includes(today.id)
          ? "cursor-not-allowed"
          : "cursor-pointer"
      }`}
      onClick={() => 
        {alert("CLICKED")
        handleDismiss(today.id)}}
      disabled={dismissedItems.includes(today.id)}
    >
      <svg
        className="w-2.5 h-2.5 me-1"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 16 12"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M1 5.917 5.724 10.5 15 1.5"
        />
      </svg>
      Dismiss
    </button>
  );
}
