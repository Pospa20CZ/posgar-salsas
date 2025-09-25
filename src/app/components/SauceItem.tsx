'use client';

type Props = {
  name: string;
  description: string;
  image: string;
  price: number;
  quantity?: number;
  onAdd?: () => void;
  onRemove?: () => void;
};

export default function SauceItem({
  name,
  description,
  image,
  price,
  quantity = 0,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="border p-6 rounded shadow hover:shadow-lg transition flex flex-col items-center text-center bg-white">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-32 h-32 object-contain mb-4"
        />
      )}
      <h2 className="text-xl font-semibold mb-2">{name}</h2>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="font-bold text-orange-600 mb-2">Cena: {price} Kč</p>

      {quantity > 0 && (
        <>
          <p className="mb-2 text-sm text-gray-500">
            Celkem za typ: <span className="font-semibold">{price * quantity} Kč</span>
          </p>
          <div className="flex items-center justify-center gap-4 mt-2">
            <button
              onClick={onRemove}
              className="px-3 py-1 bg-red-100 rounded hover:bg-red-200"
            >
              −
            </button>
            <span className="font-bold">{quantity} ks</span>
            <button
              onClick={onAdd}
              className="px-3 py-1 bg-green-100 rounded hover:bg-green-200"
            >
              +
            </button>
          </div>
        </>
      )}

      {quantity === 0 && onAdd && (
        <button
          onClick={onAdd}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition"
        >
          Přidat do košíku
        </button>
      )}
    </div>
  );
}
