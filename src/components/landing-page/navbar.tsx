"use client";

import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [active, setActive] = useState(false);

  const isActive = () => {
    window.scrollY > 0 ? setActive(true) : setActive(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", isActive);

    return () => {
      window.removeEventListener("scroll", isActive);
    };
  }, []);

  return (
    <nav
      className={`transition-all ease-in-out duration-500 fixed w-full top-0 left-0 z-[100] ${
        active
          ? "bg-gray-50 text-black border-b border-gray-300"
          : "bg-gray-950 text-white border-none"
      }`}
    >
      <div className="max-w-screen-lg mx-auto lg:px-0">
        <div className="flex flex-row justify-between items-center px-4 py-3 md:px-0">
          <Link href="/" className="text-start font-bold text-2xl">
            R.
          </Link>
          <div className="flex flex-row justify-center items-center gap-4">
          <Link
            href="/business"
            className={`text-sm duration-200 transition-all ease-in border-e py-1 px-4 hover:underline ${
              active ? "hover:text-black/70 border-zinc-500" : "hover:text-white/80 border-zinc-300"
            }`}
          >
            Businesses
          </Link>
          <Link
            href="/login"
            className={`text-sm duration-200 transition-all ease-in hover:underline ${
              active ? "hover:text-black/70" : "hover:text-white/80"
            }`}
          >
            Sign In
          </Link>
          </div>
        </div>
      </div>
      <div
        className={`transition-all ease-in-out duration-500 w-full ${
          active ? "border-t border-gray-300" : " order-none"
        }`}
      >
        <div className="max-w-screen-lg mx-auto flex flex-row items-center justify-between w-full font-bold text-xs py-2 px-4 md:px-0 text-black/80">
          {active && (
            <>
              <Link href="/">Be a Seller</Link>
              <Link href="/">Become a Part</Link>
              <Link href="/">Rendezvous</Link>
              <Link href="/">Source</Link>
              <Link href="/">Contact</Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
