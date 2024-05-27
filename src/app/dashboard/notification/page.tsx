import { getNotifications } from "@/actions/business/notification";
import Link from "next/link";
import { headers } from "next/headers";
import prisma from '@/lib/prisma'

export default async function Notification() {
  const headersList = headers();
  const id = headersList.get("id");

  const user = await prisma?.businessAccount.findUnique({
    where: { userId: Number(id) },
    select: { id: true }
  });

  const businessId = user?.id

  console.log("business ID"+ businessId)

  const not = await getNotifications(businessId!);

  console.log(not)

  return (
    <div className="flex flex-row w-full h-full">
      <div className={`w-full md:w-[320px] lg:w-[526px] bg-gray-100 h-full`}>
        <header className="p-4 w-full border-b border-slate-300">
          <h1 className="block font-semibold text-gray-900">Notifications</h1>
        </header>
        <div className="divide-y divide-gray-300">
          {not.length > 0 ? (
            not.map((item) => (
              <div
                key={item.id}
                className="w-full h-full flex p-4 hover:bg-gray-200 transition-all duration-300 ease-in"
              >
                <div className="bg-sky-500 px-2 py-0.5 self-center text-center font-bold text-white rounded-full">
                  +
                </div>
                <div className="w-full ps-3">
                  <div className="text-sm mb-2">
                    {item.body.split(" GMT")[0]}

                    {/* New booking from{" "}<span className="font-semibold text-gray-900">User Name</span>{" "}
                at <span className="text-gray-900 font-semibold">11:00</span> */}
                  </div>
                  <div className="text-xs text-blue-600">
                    {item.createdAt.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <span className="p-4 text-sm">No Notifications yet.</span>
          )}
        </div>
        {/* <a href="#" className="block py-2 text-sm font-medium text-center text-gray-900 rounded-b-lg bg-gray-50 hover:bg-gray-100">
            <div className="inline-flex items-center ">
              <svg className="w-4 h-4 me-2 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 14">
                <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z"/>
              </svg>
                View all
            </div>
          </a> */}
      </div>
      <Link
        href="/dashboard"
        className="bg-gray-600 bg-opacity-75 transition-opacity w-full h-full cursor-default"
      ></Link>
    </div>
  );
}
