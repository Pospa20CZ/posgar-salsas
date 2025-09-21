type Props = {
  name: string;
  description: string;
  image?: string;
  onAddToCart?: () => void;
};

export default function ProductCard({ name, description, image, onAddToCart }: Props) {
  return (
    <div className="border p-4 rounded shadow flex flex-col justify-between">
      <div>
        {image && <img src={image} alt={name} className="w-16 h-16 mb-4" />}
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{description}</p>
      </div>

      {onAddToCart && (
        <button
          onClick={onAddToCart}
          className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
        >
          Přidat do košíku
        </button>
      )}
    </div>
  );
}
