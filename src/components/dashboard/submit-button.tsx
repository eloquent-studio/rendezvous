"use client";
import { useFormStatus } from "react-dom";
import { ReloadIcon } from "@radix-ui/react-icons";

export function SubmitButton({ children }: { children: React.ReactNode }) {
  const { pending } = useFormStatus();

  return (
    <>
      {
        <button
          type="submit"
          className="bg-zinc-900 text-white rounded py-2 px-16 flex flex-row items-center justify-center gap-2 text-sm"
        >
          {pending && <ReloadIcon className="mr-1 h-4 w-4 animate-spin" />}
          {children}
        </button>
      }
    </>
  );
}
