'use client'

import { useEffect } from "react";
import ProductCard from "@/app/components/ProductCard";
import Navbar from "@/app/components/Navbar";
import { useCartStore } from "@/lib/store";
import { useSauceStore } from "@/store/sauceStore";
import { sauces as staticSauces } from "@/lib/products";
import toast from "react-hot-toast";

export default function ProductsPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const cart = useCartStore((state) => state.cart);
  const sauces = useSauceStore((state) => state.sauces);
  const setSauces = useSauceStore((state) => state.setSauces);

  useEffect(() => {
    setSauces(staticSauces);
  }, [setSauces]);

  return (
    <>
      <Navbar />
      <main className="text-center">
        <h1 className="text-3xl font-bold text-center mb-8">🌶️ Naše omáčky</h1>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {sauces.map((sauce) => (
            <ProductCard
              key={sauce.id}
              image={sauce.image}
              name={sauce.name}
              description={sauce.description}
              onAddToCart={() => {
                addToCart(sauce.id);
                toast.success("✅ Přidáno do košíku");
              }}
            />
          ))}
        </div>
        <div className="mt-8 text-center text-gray-500">
          V košíku: {cart.length} položek
        </div>
      </main>
    </>
  );
}
