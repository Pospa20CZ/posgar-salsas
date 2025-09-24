import { create } from "zustand";

type CartItem = string; // ✅ každý prvek je jen ID omáčky

type CartStore = {
  cart: CartItem[];
  addToCart: (id: string) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  addToCart: (id) =>
    set((state) => ({ cart: [...state.cart, id] })),

  removeFromCart: (id) =>
    set((state) => {
      const index = state.cart.findIndex((item) => item === id);
      if (index !== -1) {
        const updated = [...state.cart];
        updated.splice(index, 1);
        return { cart: updated };
      }
      return state;
    }),

  clearCart: () => set({ cart: [] }),
}));
