'use client';

import { useCartStore } from '@/lib/store';
import NavLink from './NavLink';

export default function Navbar() {
  const cart = useCartStore((state) => state.cart);

  return (
    <nav className="bg-white shadow-md px-6 py-4 flex justify-between items-center sticky top-0 z-50">
      <NavLink href="/products" label="🌶️ TauroSauces" />

      <div className="flex items-center gap-6">
        <NavLink href="/products" label="Produkty" />
        <div className="relative">
          <NavLink href="/cart" label="Košík" />
          {cart.length > 0 && (
            <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {cart.length}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}
