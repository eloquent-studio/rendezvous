"use client";
import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

export function CompleteSubmit() {
  const { pending } = useFormStatus();

  return (
    <>
      {pending ? (
        <button
          disabled={pending}
          type="submit"
          className="w-full inline-flex items-center justify-center py-2 mt-2 text-sm text-center font-medium bg-gray-900 text-white rounded-md focus:outline-none hover:bg-gray-950 focus:z-10 focus:ring-4 focus:ring-gray-200 disabled:text-white disabled:bg-gray-400 disabled:cursor-not-allowed"
        >
          <ReloadIcon className="mr-1 h-4 w-4 animate-spin" />
          Complete
        </button>
      ) : (
        <button
          type="submit"
          className="w-full inline-flex items-center justify-center py-2 mt-2 text-sm text-center font-medium bg-gray-900 text-white border border-gray-900 rounded-md focus:outline-none hover:bg-gray-950 focus:z-10 focus:ring-4 focus:ring-gray-200"
        >
          Complete
        </button>
      )}
    </>
  );
}
