'use client'

import { useRouter } from "next/navigation";
import { useCartStore } from "@/lib/store";
import { sauces } from "@/lib/products";
import toast from "react-hot-toast";

export default function CartPage() {
  const router = useRouter(); // ✅ pro přesměrování
  const cart = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const removeFromCart = useCartStore((state) => state.removeFromCart);

  const cartItems = cart
    .map((item) => sauces.find((sauce) => sauce.id === item.id))
    .filter(Boolean);

  const total = cartItems.reduce((sum, item) => sum + (item?.price || 0), 0);

  const handleOrder = () => {
  console.log("Objednávka spuštěna ✅"); // ✅ testovací výpis
  toast.success("📦 Objednávka odeslána");
  clearCart();
  router.push("/confirmation");
  };


  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Košík</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Košík je prázdný.</p>
      ) : (
        <section className="max-w-2xl mx-auto space-y-6">
          {cartItems.map((item) => (
            <div key={item!.id} className="border p-4 rounded shadow">
              <h2 className="text-xl font-semibold mb-2">{item!.name}</h2>
              <p className="text-gray-600">{item!.description}</p>
              <p className="font-bold mt-2">Cena: {item!.price} Kč</p>
              <button
                onClick={() => {
                  removeFromCart(item!.id);
                  toast("❌ Odebráno z košíku");
                }}
                className="mt-4 text-sm text-red-600 hover:underline"
              >
                Odebrat z košíku
              </button>
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
              onClick={handleOrder} // ✅ objednávka
              className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
            >
              Objednat
            </button>
          </div>
        </section>
      )}
    </main>
  );
}
