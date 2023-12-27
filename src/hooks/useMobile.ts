import { create } from 'zustand';

interface MobileProps {
    isOpen: boolean;
    onOpen: () => void;
    onClose: () => void;
}

const useMobile = create<MobileProps>((set) => ({
    isOpen: false,
    onOpen: () => set({ isOpen: true }),
    onClose: () => set({ isOpen: false }),
}));

export default useMobile;
