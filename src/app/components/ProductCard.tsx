type Props = {
  name: string;
  description: string;
  image: string;
  onAddToCart: () => void;
};

export default function ProductCard({ name, description, image, onAddToCart }: Props) {
  return (
    <div className="border p-4 rounded shadow hover:shadow-md transition">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-40 object-contain mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm">{description}</p>
      <button
        onClick={onAddToCart}
        className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
      >
        Přidat do košíku
      </button>
    </div>
  );
}
