import { create } from "zustand";

interface Pet {
  _id: string;
  // Include other pet properties as needed
}

type AddVisitState = {
  isOpen: boolean;
  pet: Pet | null;
  onOpen: (pet: Pet) => void;
  onClose: () => void;
};

export const useVisit = create<AddVisitState>((set) => ({
  isOpen: false,
  pet: null,
  onOpen: (pet) => set({ isOpen: true, pet }),
  onClose: () => set({ isOpen: false, pet: null }),
}));