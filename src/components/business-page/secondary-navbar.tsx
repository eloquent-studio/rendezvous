import Link from "next/link";
import React from "react";

const SecondaryNavbar = () => {
  return (
    <nav className="bg-white fixed w-full z-20 top-0 start-0 border-b border-gray-200">
      <div className="max-w-screen-lg flex flex-wrap items-center justify-between mx-auto p-3 md:py-2 md:px-0">
        <Link
          href="/"
          className="flex items-center space-x-2 rtl:space-x-reverse"
        >
          <span className="self-center font-bold whitespace-nowrap">
            Rendezvous
          </span>
        </Link>
      </div>
    </nav>
  );
};

export default SecondaryNavbar;
