'use client'

import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
import SauceItem from "@/app/components/SauceItem";
import { useCartStore } from "@/lib/store";
import { sauces } from "@/lib/products";
import toast from "react-hot-toast";

type Sauce = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  heatLevel: number;
};

function groupCartItems(items: Sauce[]) {
  const grouped = new Map<string, Sauce & { quantity: number }>();

  items.forEach((item) => {
    if (grouped.has(item.id)) {
      grouped.get(item.id)!.quantity += 1;
    } else {
      grouped.set(item.id, { ...item, quantity: 1 });
    }
  });

  return Array.from(grouped.values());
}

export default function CartPage() {
  const router = useRouter();
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);
  const addToCart = useCartStore((state) => state.addToCart);

  const cartItems = cart
    .map((id) => sauces.find((sauce) => sauce.id === id))
    .filter(Boolean) as Sauce[];

  const groupedItems = groupCartItems(cartItems);
  const total = groupedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleOrder = () => {
    toast.success("📦 Order placed");
    clearCart();
    router.push("/confirmation");
  };

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Cart</h1>

        {groupedItems.length === 0 ? (
          <p className="text-center text-gray-500">Your cart is empty.</p>
        ) : (
          <section className="max-w-2xl mx-auto space-y-6">
            {groupedItems.map((item) => (
              <SauceItem
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                onAdd={() => {
                  addToCart(item.id);
                  toast("➕ Added 1 item");
                }}
                onRemove={() => {
                  removeFromCart(item.id);
                  toast("❌ Removed 1 item");
                }}
              />
            ))}

            <div className="text-right text-lg font-bold mt-8">
              Total: {total} CZK
            </div>

            <div className="text-center mt-6 space-x-4">
              <button
                onClick={() => {
                  clearCart();
                  toast("🧹 Cart cleared");
                }}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Clear cart
              </button>
              <button
                onClick={handleOrder}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Place order
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
