'use client'

import ProductCard from "./../components/ProductCard";
import { sauces } from "@/lib/products";
import { useCartStore } from "@/lib/store";

export default function ProductsPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);

  return (
    <main className="text-center">
      <h1 className="text-3xl font-bold text-center mb-8">🌶️ Naše omáčky</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {sauces.map((sauce) => (
          <ProductCard
            key={sauce.id}
            name={sauce.name}
            description={sauce.description}
            image={sauce.image}
            onAddToCart={() => addToCart({ id: sauce.id })}
          />
        ))}
      </div>
      <div className="mt-8 text-center text-gray-500">
        V košíku: {cart.length} položek
      </div>
    </main>
  );
}
