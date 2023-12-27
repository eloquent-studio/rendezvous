import { create } from 'zustand';

interface NotificationProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useNotification = create<NotificationProps>((set) => ({
    isOpen: true,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useNotification;
