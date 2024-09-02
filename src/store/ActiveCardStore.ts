import { TaskType } from "@/type/tasksType";
import { create } from "zustand";

type ActiveCardStore = {
  activeCard: TaskType | null
  setActiveCard: (cardId: TaskType | null) => void;
}

export const useActiveCard = create<ActiveCardStore>((set) => ({
  activeCard: null,
  setActiveCard: (card) => set({ activeCard: card }),
}))