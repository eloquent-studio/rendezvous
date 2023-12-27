'use client';
import useMobile from '@/hooks/useMobile';
import useNotification from '@/hooks/useNotification';

export default function Notification() {
    const isOpen = useMobile((state) => state.isOpen);
    const { isOpen: isNotification, onClose } = useNotification();
    return (
        <div
            className={`${isOpen && 'ml-16'} sm:ml-16 w-full h-full bg-white ${
                isNotification ? 'fixed' : 'hidden'
            } inset-0 flex flex-row`}
        >
            <div className="w-[420px]">Notification</div>
            <div
                onClick={onClose}
                className=" bg-gray-600 bg-opacity-75 transition-opacity w-full h-full"
            ></div>
        </div>
    );
}
