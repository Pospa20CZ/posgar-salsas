'use client'

import { useEffect } from "react";
import Navbar from "@/app/components/Navbar";
import SauceItem from "@/app/components/SauceItem";
import { useCartStore } from "@/lib/store";
import { useSauceStore } from "@/store/sauceStore";
import { sauces as staticSauces } from "@/lib/products";
import toast from "react-hot-toast";

export default function ProductsPage() {
  const addToCart = useCartStore((state) => state.addToCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const cart = useCartStore((state) => state.cart);
  const sauces = useSauceStore((state) => state.sauces);
  const setSauces = useSauceStore((state) => state.setSauces);

  useEffect(() => {
    setSauces(staticSauces);
  }, [setSauces]);

  const getQuantity = (id: string) =>
    cart.filter((itemId) => itemId === id).length;

  return (
    <>
      <Navbar />
      <main className="py-8 px-4">
        <h1 className="text-3xl font-bold text-center mb-10">🌶️ Our Sauces</h1>

        <div className="flex justify-center">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {sauces.map((sauce) => {
              const quantity = getQuantity(sauce.id);

              return (
                <SauceItem
                  key={sauce.id}
                  name={sauce.name}
                  description={sauce.description}
                  image={sauce.image}
                  price={sauce.price}
                  quantity={quantity}
                  onAdd={() => {
                    addToCart(sauce.id);
                    toast.success("➕ Added 1 item");
                  }}
                  onRemove={() => {
                    removeFromCart(sauce.id);
                    toast("❌ Removed 1 item");
                  }}
                />
              );
            })}
          </div>
        </div>

        <div className="mt-10 text-center text-gray-500">
          Cart: {cart.length} items
        </div>
      </main>
    </>
  );
}
