'use client';
import useMobile from '@/hooks/useMobile';
import useNotification from '@/hooks/useNotification';
import Link from 'next/link';

export default function Notification() {
    const isOpen = useMobile((state) => state.isOpen);
    return (
        <div className="flex flex-row w-full h-full">
            <div className={`w-full md:w-[320px] lg:w-[360px] bg-slate-300 h-full`}>
                Notification

            </div>
            <Link
                href="/dashboard"
                className="bg-gray-600 bg-opacity-75 transition-opacity w-full h-full cursor-default"
            ></Link>
        </div>
    );
}

