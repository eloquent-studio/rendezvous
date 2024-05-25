"use client";

import { useState } from "react";
import Image from "next/image";
import Info from "@/components/dashboard/customers/info";
import Notes from "@/components/dashboard/customers/notes";
import ButtonItem from "./button-item";

const SELECTED_TAB_STYLE =
  "inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500";
const NOT_SELECTED_TAB_STYLE =
  "inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300";

export default function CustomerContainer({ data }: { data: any }) {
  const [deleteModal, SetDeleteModal] = useState(false);

  const [tab, SetTab] = useState(0);
  const [cIndex, SetCIndex] = useState(0);

  const tabComponent = () => {
    switch (tab) {
      case 0:
        return <Info />;
      case 1:
        return <Appointments userRendezvous={data[cIndex]?.rendezvous ?? []} />;
      case 2:
        return <Notes />;
    }
  };

  return (
    <>
      <div className="flex flex-row w-full h-full">
        <div className={`w-full md:w-[512px] lg:w-[512px] bg-gray-100 h-full`}>
          <div className="m-4">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-3 h-3 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                className="block w-full p-2 ps-9 text-xs font-medium text-gray-900 border border-gray-300 rounded bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Name, Email..."
              />
            </div>
          </div>
          <div className="flex flex-col px-4 py-2">
            <span className="text-xs">All</span>
            <div className="w-full flex flex-row justify-between items-center">
              <span className="text-lg">Customers</span>
              <button
                type="button"
                className="flex flex-row items-center text-[#087396] hover:text-[#81c0d4] focus:ring-0 focus:outline-none font-medium text-sm p-2.5 pr-0 text-center"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z"
                    fill="currentColor"
                    fillRule="evenodd"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="ml-0.5">New Customer</span>
              </button>
            </div>
          </div>
          <div className="text-xs flex flex-row justify-end px-4">
            <span className="text-[#087396] mr-1"> 1 - 1</span> of 1
          </div>
          <ul>
            {data.map((item: any, index: number) => (
              <ButtonItem
                key={index}
                {...item}
                onClick={() => SetCIndex(index)}
                deleteClick={(event: any) => {
                  event.stopPropagation();
                  SetDeleteModal(true);
                }}
              />
            ))}
          </ul>
        </div>
        <div className="bg-white w-full h-full cursor-default flex flex-col">
          <div className="w-full">
            <div className="border-gray-400 bg-white text-black flex flex-row rounded-lg p-2 px-2 mx-4 my-2">
              {/* <div>
                                <Image
                                    src={`https://ui-avatars.com/api/?name=${"MustafaKemal"}`}
                                    id="output"
                                    width={64}
                                    height={64}
                                    className="rounded-full w-16 h-16 object-cover"
                                    alt="profile image"
                                />
                            </div> */}
              <div className="flex flex-col justify-evenly ml-2 px-2 font-medium">
                <div className="uppercase">{data[cIndex]?.fullname ?? ""}</div>
                <div className="text-xs text-gray-700 ">
                  {data[cIndex]?.email ?? ""}
                </div>
              </div>
            </div>
          </div>
          <div className="w-full p-4">
            <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200">
              <ul className="flex flex-wrap -mb-px">
                <li className="me-2">
                  <button
                    onClick={() => SetTab(0)}
                    className={
                      tab == 0 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE
                    }
                  >
                    Info
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => SetTab(1)}
                    className={
                      tab == 1 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE
                    }
                  >
                    Appointments
                  </button>
                </li>
                <li className="me-2">
                  <button
                    onClick={() => SetTab(2)}
                    className={
                      tab == 2 ? SELECTED_TAB_STYLE : NOT_SELECTED_TAB_STYLE
                    }
                  >
                    Notes
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div className="w-full h-full flex flex-col">{tabComponent()}</div>
        </div>
      </div>
      <div
        id="popup-modal"
        tabIndex={-1}
        className={`${
          deleteModal ? "flex fixed" : "hidden"
        } mx-auto z-50 justify-center items-center w-full inset-0 h-full`}
      >
        <div className="relative p-4 w-full max-w-md max-h-full">
          <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button
              onClick={() => SetDeleteModal(false)}
              type="button"
              className="absolute top-3 end-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
              data-modal-hide="popup-modal"
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
              <span className="sr-only">Close modal</span>
            </button>
            <div className="p-4 md:p-5 text-center">
              <svg
                className="mx-auto mb-4 text-gray-400 w-12 h-12 dark:text-gray-200"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M10 11V6m0 8h.01M19 10a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                />
              </svg>
              <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
                Are you sure you want to delete this product?
              </h3>
              <button
                data-modal-hide="popup-modal"
                type="button"
                className="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center me-2"
              >
                Yes, I&apos;m sure
              </button>
              <button
                onClick={() => SetDeleteModal(false)}
                data-modal-hide="popup-modal"
                type="button"
                className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600"
              >
                No, cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

const Appointments = ({ userRendezvous = [] }) => {
  console.log(userRendezvous);
  return (
    <div className="relative overflow-x-auto shadow sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500">
        <tbody>
          {userRendezvous.map((rendezvous: any) => (
            <tr
              key={rendezvous.id}
              className={`${
                rendezvous.isCancelled
                  ? "bg-gray-200 cursor-not-allowed opacity-50"
                  : "bg-white border-b hover:bg-gray-50"
              }`}
            >
              <th
                scope="row"
                className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap"
              >
                <Image
                  height={40}
                  width={40}
                  className="w-10 h-10 rounded-full object-cover"
                  src={
                    rendezvous?.business?.image
                      ? process.env.NEXT_PUBLIC_AWS_BUCKET_URL +
                        rendezvous?.business?.image
                      : "/anonymous.webp"
                  }
                  alt="business image"
                />
                <div className="ps-3">
                  <div className="text-base font-semibold">
                    {rendezvous?.business?.name}
                  </div>
                  <div className="font-normal text-gray-500">
                    {rendezvous?.business?.profession}
                  </div>
                </div>
              </th>
              <td className="px-6 py-4">{rendezvous?.business?.location}</td>
              <td className="px-6 py-4">
                <span>
                  {rendezvous.rendezvousAt.toLocaleDateString()} -{" "}
                  {rendezvous.rendezvousAt.toTimeString().substring(0, 5)}
                </span>
              </td>
              <td className="px-6 py-4">
                {/* <CancelButton
                                userId={userId!}
                                businessId={String(rendezvous.businessId)}
                                cancelled={rendezvous.isCancelled}
                            /> */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
