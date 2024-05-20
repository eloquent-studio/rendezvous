import Link from "next/link";
import React from "react";
import Card from "@/components/business-page/card";
import SecondaryNavbar from "@/components/business-page/secondary-navbar";
import { getBusinesses } from "@/actions/business/business";
import SearchBar from "@/components/business-page/search";
import Pagination from "@/components/business-page/pagination";

export default async function BusinessesPage({
  searchParams,
}: {
  searchParams?: {
    q?: string;
    page?: string;
  };
}) {
  const q = searchParams?.q || "";
  const page = searchParams?.page || 1;

  const { count, businesses } = await getBusinesses(q, page);

  return (
    <>
      <SecondaryNavbar />
      <div className="max-w-screen-lg mx-auto h-full my-16 p-2 md:p-0">
        <div className="w-full h-48 bg-blue-950 rounded-md">
          <div className="w-full h-full p-8 md:p-2 text-white flex flex-col items-center justify-center gap-4">
            <div>
              <p className="font-extrabold text-xl md:text-2xl lg:text-3xl">
                何か特にお考えですか。
              </p>
              <p className="font-bold md:text-lg lg:text-xl">
                You think it. And got a rendezvous
              </p>
            </div>
            <Link
              href="/"
              className="border border-gray-50 rounded-full px-8 py-1 text-sm font-semibold"
            >
              How Rendezvous Work
            </Link>
          </div>
        </div>
        <main className="max-w-screen-lg mx-auto my-4">
          <div className="w-full h-full px-2 md:p-0 flex flex-col gap-4">
            <nav className="w-full">
              <SearchBar placeholder="Search..." />
            </nav>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-4">
              {businesses.map((business) => (
                <Card business={business} key={business.id} />
              ))}
            </div>
            <Pagination count={count}/>
          </div>
        </main>
      </div>
    </>
  );
}
