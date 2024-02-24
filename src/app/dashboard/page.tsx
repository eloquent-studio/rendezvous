// import SideWindow from "@/components/side-window"
import Notification from "@/components/dashboard/notification"

export default function DashboardPage() {
  return <>
    <div className="w-full h-screen">
      <div className="container max-w-screen-sm min-h-[90vh] py-4 px-8 mx-auto text-white bg-black/80 flex flex-col m-4">
        <ol className="relative border-s border-gray-200">
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
              <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 font-semibold">Rendezvous Name
            </h3>
            <div className="w-full flex flex-row justify-between items-center font-medium text-gray-100 leading-none text-sm mb-4">
              <time className="block mb-2 leading-none">JAN 9, 2024 - 12:00 AM</time>
              <time className="block mb-2">Mary Caroline</time>
              <span>45$</span>
            </div>
            <div className="w-full flex flex-row justify-end items-end gap-4 font-medium text-gray-100 leading-none text-sm">
              <button type="button" className="bg-transparent font-medium text-xs px-4 py-1.5 text-blue-500 hover:underline inline-flex items-center" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                <svg className="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                Dismiss
              </button>
              <button type="button" className="font-medium text-xs px-4 py-1.5 text-center inline-flex items-center text-red-600 hover:underline">
                <svg className="w-2 h-2 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                Cancel
              </button>
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
              <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 font-semibold">Rendezvous Name
            </h3>
            <div className="w-full flex flex-row justify-between items-center font-medium text-gray-100 leading-none text-sm mb-4">
              <time className="block mb-2 leading-none">JAN 9, 2024 - 12:00 AM</time>
              <time className="block mb-2">Mary Caroline</time>
              <span>45$</span>
            </div>
            <div className="w-full flex flex-row justify-end items-end gap-4 font-medium text-gray-100 leading-none text-sm">
              <button type="button" className="bg-transparent font-medium text-xs px-4 py-1.5 text-blue-500 hover:underline inline-flex items-center" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                <svg className="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                Dismiss
              </button>
              <button type="button" className="font-medium text-xs px-4 py-1.5 text-center inline-flex items-center text-red-600 hover:underline">
                <svg className="w-2 h-2 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                Cancel
              </button>
            </div>
          </li>
          <li className="mb-10 ms-8">
            <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -start-3">
              <svg className="w-2.5 h-2.5 text-blue-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
              </svg>
            </span>
            <h3 className="flex items-center mb-2 font-semibold">Rendezvous Name
            </h3>
            <div className="w-full flex flex-row justify-between items-center font-medium text-gray-100 leading-none text-sm mb-4">
              <time className="block mb-2 leading-none">JAN 9, 2024 - 12:00 AM</time>
              <time className="block mb-2">Mary Caroline</time>
              <span>45$</span>
            </div>
            <div className="w-full flex flex-row justify-end items-end gap-4 font-medium text-gray-100 leading-none text-sm">
              <button type="button" className="bg-transparent font-medium text-xs px-4 py-1.5 text-blue-500 hover:underline inline-flex items-center" data-dismiss-target="#alert-additional-content-2" aria-label="Close">
                <svg className="w-2.5 h-2.5 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5.917 5.724 10.5 15 1.5" />
                </svg>
                Dismiss
              </button>
              <button type="button" className="font-medium text-xs px-4 py-1.5 text-center inline-flex items-center text-red-600 hover:underline">
                <svg className="w-2 h-2 me-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
                Cancel
              </button>
            </div>
          </li>
        </ol>
      </div>
    </div>
    {/* <Notification /> */}
  </>

}