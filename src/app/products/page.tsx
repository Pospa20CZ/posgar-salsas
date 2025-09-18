import ProductCard from "../components/ProductCard";

type Sauce = {
  id: number;
  name: string;
  description: string;
  image?: string;
};

const sauces: Sauce[] = [
  {
    id: 1,
    name: "Smoky Jalapeño",
    description: "A bold blend of smoked jalapeños and garlic.",
    image: "/globe.svg",
  },
  {
    id: 2,
    name: "Mango Habanero",
    description: "Sweet mango meets fiery habanero for a tropical kick.",
    image: "/server.svg",
  },
  {
    id: 3,
    name: "Classic Garlic",
    description: "Smooth, rich garlic flavor perfect for any dish.",
    image: "/window.svg",
  },
];

export default function ProductsPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold text-center mb-8">Naše omáčky</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sauces.map((sauce) => (
          <ProductCard
            key={sauce.id}
            name={sauce.name}
            description={sauce.description}
            image={sauce.image}
          />
        ))}
      </div>
    </main>
  );
}
