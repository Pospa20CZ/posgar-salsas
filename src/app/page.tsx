import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      title: "Chilli Sosa",
      description: "Pikantní omáčka s čerstvými chilli papričkami.",
      image: "/file.svg",
    },
    {
      title: "Sosa Jemná",
      description: "Jemná barbecue omáčka s kouřovým aroma.",
      image: "/globe.svg",
    },
    {
      title: "Sosa Krémová",
      description: "Krémová omáčka s výraznou chutí česneku.",
      image: "/window.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-50 p-8">
      {/* Úvodní sekce */}
      <section className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">PosGar Salsas 🌶️</h1>
        <h2 className="text-xl text-gray-700 mb-6">Chuť, která spojuje Pospíšila a Garzu</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Vítej ve světě omáček, kde se tradice mísí s vášní. Objev naši nabídku chutí, které tě zahřejí i překvapí.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow">
          Prozkoumat nabídku
        </button>
      </section>

      {/* Sekce produktů */}
      <section className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Naše omáčky</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={index}
              name={product.title}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
