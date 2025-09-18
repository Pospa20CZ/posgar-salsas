type ProductProps = {
  name: string;
  description: string;
  image?: string;
};

export default function ProductCard({ name, description, image }: ProductProps) {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-full h-32 object-contain mb-4"
        />
      )}
      <h4 className="text-lg font-semibold mb-1">{name}</h4>
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">
        Do košíku
      </button>
    </div>
  );
}
