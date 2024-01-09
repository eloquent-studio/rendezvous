'use client';
import useMobile from '@/hooks/useMobile';
import useNotification from '@/hooks/useNotification';
import Image from 'next/image';
import Link from 'next/link';

export default function Notification() {
    const isOpen = useMobile((state) => state.isOpen);
    return (
      <div className="flex flex-row w-full h-full">
        <div className={`w-full md:w-[320px] lg:w-[526px] bg-gray-100 h-full`}>
          <header className='p-4 w-full border-b border-slate-300'>
            <h1 className="block font-semibold text-gray-900">
              Notifications
            </h1>
          </header>
              {/* <main className='p-4'>
                <ul className="font-semibold text-sm">
                  <li className='border-b border-slate-400'>
                    <Link href="#" className="flex flex-col items-start  justify-between px-1 py-4 text-gray-900 rounded-lg hover:bg-slate-400 group transition-all ease-in duration-300">
                      <span className="pb-2">Some username</span>
                      <div className='flex w-full h-full flex-row justify-between items-center'>
                        <span className='ms-1'>- Booking details</span>
                        <span className='border-l  border-slate-400 ps-2'>11:42</span>
                      </div>
                    </Link>
                  </li>
                </ul>
              </main> */}
          
          <div className="divide-y divide-gray-300">
            <Link href="#" className="flex p-4 hover:bg-gray-200 transition-all duration-300 ease-in">
              <div className="flex-shrink-0">
                <Image 
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover" src="/1.jpg" alt="user image" />
                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full">
                  <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                  </svg>
                </div>
              </div>
              <div className="w-full ps-3">
                <div className="text-gray-500 text-sm mb-2">New booking from <span className="font-semibold text-gray-900">User Name</span> at <span className='text-gray-900 font-semibold'>11:00</span></div>
                <div className="text-xs text-blue-600">1 hour ago</div>
              </div>
            </Link>
            <Link href="#" className="flex p-4 hover:bg-gray-200 transition-all duration-300 ease-in">
              <div className="flex-shrink-0">
                <Image 
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover" src="/1.jpg" alt="user image" />
                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full">
                  <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                  </svg>
                </div>
              </div>
              <div className="w-full ps-3">
                <div className="text-gray-500 text-sm">New booking from <span className="font-semibold text-gray-900">User Name</span></div>
                <div className="text-gray-500 text-sm mb-1">
                  at <span className='text-gray-900 font-semibold'>11:00</span>
                </div>
                <div className="text-xs text-blue-600">1 hour ago</div>
              </div>
            </Link>
            <Link href="#" className="flex p-4 hover:bg-gray-200 transition-all duration-300 ease-in">
              <div className="flex-shrink-0">
                <Image 
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover" src="/1.jpg" alt="user image" />
                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full">
                  <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                  </svg>
                </div>
              </div>
              <div className="w-full ps-3">
                <div className="text-gray-500 text-sm mb-2">New booking from <span className="font-semibold text-gray-900">User Name</span> at <span className='text-gray-900 font-semibold'>11:00</span></div>
                <div className="text-xs text-blue-600">1 hour ago</div>
              </div>
            </Link>
            <Link href="#" className="flex p-4 hover:bg-gray-200 transition-all duration-300 ease-in">
              <div className="flex-shrink-0">
                <Image 
                width={48}
                height={48}
                className="rounded-full w-12 h-12 object-cover" src="/1.jpg" alt="user image" />
                <div className="absolute flex items-center justify-center w-5 h-5 ms-6 -mt-5 bg-blue-600 border border-white rounded-full">
                  <svg className="w-2 h-2 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 18">
                    <path d="M1 18h16a1 1 0 0 0 1-1v-6h-4.439a.99.99 0 0 0-.908.6 3.978 3.978 0 0 1-7.306 0 .99.99 0 0 0-.908-.6H0v6a1 1 0 0 0 1 1Z"/>
                    <path d="M4.439 9a2.99 2.99 0 0 1 2.742 1.8 1.977 1.977 0 0 0 3.638 0A2.99 2.99 0 0 1 13.561 9H17.8L15.977.783A1 1 0 0 0 15 0H3a1 1 0 0 0-.977.783L.2 9h4.239Z"/>
                  </svg>
                </div>
              </div>
              <div className="w-full ps-3">
                <div className="text-gray-500 text-sm mb-2">New booking from <span className="font-semibold text-gray-900">User Name</span> at <span className='text-gray-900 font-semibold'>11:00</span></div>
                <div className="text-xs text-blue-600">1 hour ago</div>
              </div>
            </Link>
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
          className="bg-gray-600 bg-opacity-75 transition-opacity w-full h-full cursor-default">
        </Link>
      </div>
    );
}

