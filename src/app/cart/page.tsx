'use client'

import { useRouter } from "next/navigation";
import Navbar from "@/app/components/Navbar";
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

  const total = cartItems.reduce((sum, item) => sum + (item?.price || 0), 0);

  const handleOrder = () => {
    toast.success("📦 Objednávka odeslána");
    clearCart();
    router.push("/confirmation");
  };

  return (
    <>
      <Navbar />
      <main className="p-8">
        <h1 className="text-3xl font-bold mb-6 text-center">🛒 Košík</h1>

        {cartItems.length === 0 ? (
          <p className="text-center text-gray-500">Košík je prázdný.</p>
        ) : (
          <section className="max-w-2xl mx-auto space-y-6">
            {groupCartItems(cartItems).map((item) => (
              <div key={item.id} className="border p-4 rounded shadow">
                <h2 className="text-xl font-semibold mb-2">{item.name}</h2>
                <p className="text-gray-600">{item.description}</p>
                <p className="font-bold mt-2">Cena: {item.price} Kč</p>
                <p className="mt-2">Celkem za typ: {item.price * item.quantity} Kč</p>

                <div className="flex items-center gap-4 mt-4">
                  <button
                    onClick={() => {
                      removeFromCart(item.id);
                      toast("❌ Odebráno 1 ks");
                    }}
                    className="px-3 py-1 bg-red-100 rounded hover:bg-red-200"
                  >
                    −
                  </button>

                  <span className="font-bold">{item.quantity} ks</span>

                  <button
                    onClick={() => {
                      addToCart(item.id);
                      toast("➕ Přidáno 1 ks");
                    }}
                    className="px-3 py-1 bg-green-100 rounded hover:bg-green-200"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="text-right text-lg font-bold mt-8">
              Celkem: {total} Kč
            </div>

            <div className="text-center mt-6 space-x-4">
              <button
                onClick={() => {
                  clearCart();
                  toast("🧹 Košík vyprázdněn");
                }}
                className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
              >
                Vyprázdnit košík
              </button>
              <button
                onClick={handleOrder}
                className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
              >
                Objednat
              </button>
            </div>
          </section>
        )}
      </main>
    </>
  );
}
