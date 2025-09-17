import ProductCard from "../components/ProductCard";

export default function Home() {
  const products = [
    {
      title: "Chili Sosa",
      description: "Spicy sauce with fresh chili peppers.",
      image: "/file.svg",
    },
    {
      title: "Mild Sosa",
      description: "Smoky barbecue sauce with a gentle touch.",
      image: "/globe.svg",
    },
    {
      title: "Creamy Sosa",
      description: "Creamy sauce with a bold garlic flavor.",
      image: "/window.svg",
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-red-100 to-yellow-50 p-8">
      {/* Intro section */}
      <section className="flex flex-col items-center justify-center text-center mb-16">
        <h1 className="text-5xl font-extrabold text-red-600 mb-4">PosGar Salsas 🌶️</h1>
        <h2 className="text-xl text-gray-700 mb-6">The taste that connects Pospíšil and Garza</h2>
        <p className="text-lg text-gray-600 max-w-xl mb-8">
          Welcome to the world of sauces, where tradition meets passion. Explore our selection of flavors that warm and surprise.
        </p>
        <button className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded shadow">
          Explore the offer
        </button>
      </section>

      {/* Product section */}
      <section className="max-w-5xl mx-auto">
        <h3 className="text-3xl font-bold text-gray-800 mb-6">Our Sauces</h3>
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
