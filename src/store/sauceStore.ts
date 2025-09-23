import { create } from "zustand";

export type Sauce = {
  id: number;
  name: string; // ✅ místo title
  description: string;
  image: string;
  price: number;
  heatLevel: number; // ✅ přidáno
};

type SauceStore = {
  sauces: Sauce[];
  setSauces: (sauces: Sauce[]) => void;
};

export const useSauceStore = create<SauceStore>((set) => ({
  sauces: [],
  setSauces: (sauces) => set({ sauces }),
}));
