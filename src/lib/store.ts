import { create } from "zustand";

type CartItem = {
  id: number;
};

type CartStore = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (item) =>
    set((state) => ({ cart: [...state.cart, item] })),
  clearCart: () => set({ cart: [] }),
}));
