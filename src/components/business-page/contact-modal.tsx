"use client";

import { useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import ContactForm from "./contact-form";

interface ContactProps {
  name: string;
  location: string | null;
  email: string;
}
interface ContactModalProps {
  info: ContactProps | null;
  businessName: string;
}

export default function ContactModal({
  businessName,
  info,
}: ContactModalProps) {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // const timestamp = notification?.createdAt;
  // const time = dateFormat(timestamp);

  const onDismiss = useCallback(() => {
    router.back();
  }, [router]);

  //for exiting when you click anywhere except the white part
  const handleClick = useCallback(
    (e: React.MouseEvent) => {
      if (e.target === overlay.current && onDismiss) {
        onDismiss();
      }
    },
    [onDismiss, overlay]
  );

  const BodyContent = (
    <div className="flex flex-col gap-4">
      <div className="w-full h-full mb-4">
        <h1 className="uppercase font-medium text-xl">contact</h1>
      </div>
      <main className="w-full h-full flex flex-col md:flex-row gap-8 md:gap-4 px-4">
        <section className="w-full h-full md:h-[65vh]">
          <ol className="relative text-gray-500 border-s border-gray-200">
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-green-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                  <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Business Name</h3>
              <p className="text-sm text-gray-700 font-medium">{info?.name}</p>
            </li>
            <li className="mb-10 ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 16"
                >
                  <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Business Email</h3>
              <p className="text-sm text-gray-700 font-medium">{info?.email}</p>
            </li>
            <li className="ms-6">
              <span className="absolute flex items-center justify-center w-8 h-8 bg-gray-100 rounded-full -start-4 ring-4 ring-white">
                <svg
                  className="w-3.5 h-3.5 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 20"
                >
                  <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                </svg>
              </span>
              <h3 className="font-medium leading-tight">Location</h3>
              <p className="text-sm text-gray-700 font-medium">
                {info?.location}
              </p>
            </li>
          </ol>
        </section>
        <section className="w-full h-full md:h-[65vh]">
          <ContactForm businessName={businessName} />
        </section>
      </main>
    </div>
  );

  return (
    <div
      ref={overlay}
      className="fixed z-10 left-0 right-0 top-0 bottom-0 mx-auto bg-black/80"
      onClick={handleClick}
    >
      <button
        type="button"
        onClick={onDismiss}
        className="absolute top-2 right-8 text-white/80 hover:text-white/20 duration-500 transition-all ease-in"
      >
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 14"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>

      <div
        ref={wrapper}
        className="flex flex-col absolute h-[95%] w-full bottom-0 bg-white rounded-t-3xl lg:px-40 px-8 py-16 overflow-auto"
      >
        {BodyContent}
      </div>
    </div>
  );
}
