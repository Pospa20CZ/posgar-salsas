export default function CartPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">🛒 Košík</h1>

      <section className="max-w-2xl mx-auto space-y-6">
        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Smoky Jalapeño</h2>
          <p className="text-gray-600">Pálivá omáčka s uzeným jalapeñem</p>
          <p className="font-bold mt-2">Cena: 129 Kč</p>
        </div>

        <div className="border p-4 rounded shadow">
          <h2 className="text-xl font-semibold mb-2">Garlic Inferno</h2>
          <p className="text-gray-600">Česneková bomba s chilli</p>
          <p className="font-bold mt-2">Cena: 149 Kč</p>
        </div>

        <div className="text-right text-lg font-bold mt-8">
          Celkem: 278 Kč
        </div>

        <div className="text-center mt-6">
          <button className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition">
            Objednat
          </button>
        </div>
      </section>
    </main>
  );
}
