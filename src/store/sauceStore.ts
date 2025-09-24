import { create } from "zustand";

export type Sauce = {
  id: string; // ✅ opraveno z number na string
  name: string;
  description: string;
  image: string;
  price: number;
  heatLevel: number;
};

type SauceStore = {
  sauces: Sauce[];
  setSauces: (sauces: Sauce[]) => void;
};

export const useSauceStore = create<SauceStore>((set) => ({
  sauces: [],
  setSauces: (sauces) => set({ sauces }),
}));
