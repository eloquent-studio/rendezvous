'use client';
import useMobile from '@/hooks/useMobile';
import useNotification from '@/hooks/useNotification';
import Link from 'next/link';

export default function Notification() {
    const isOpen = useMobile((state) => state.isOpen);
    return (
        <div
            className={`${isOpen && 'ml-16'} sm:ml-16 w-full h-full bg-slate-300 fixed inset-0 flex flex-row`}
        >
            <div className="w-[420px]">Notification</div>
            <Link
                href="/dashboard"
                className="bg-gray-600 bg-opacity-75 transition-opacity w-full h-full cursor-default"
            ></Link>
        </div>
    );
}
