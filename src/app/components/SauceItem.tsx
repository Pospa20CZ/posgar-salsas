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
    <div className="w-[220px] min-h-[360px] flex flex-col justify-between items-center text-center bg-white border border-gray-200 p-4 rounded-lg shadow-sm hover:shadow-md transition">
      {image && (
        <img
          src={image}
          alt={name}
          className="w-24 h-24 object-contain mb-3"
        />
      )}
      <h2 className="text-base font-semibold mb-1">{name}</h2>
      <p className="text-gray-600 text-sm mb-2">{description}</p>
      <p className="font-bold text-orange-600 mb-2">Price: {price} CZK</p>

      {quantity > 0 && (
        <>
          <p className="mb-2 text-sm text-gray-500">
            Total for type: <span className="font-semibold">{price * quantity} CZK</span>
          </p>
          <div className="flex items-center justify-center gap-2 mt-2">
            <button
              onClick={onRemove}
              className="px-2 py-1 bg-red-100 rounded hover:bg-red-200 text-sm"
            >
              −
            </button>
            <span className="font-bold text-sm">{quantity} pcs</span>
            <button
              onClick={onAdd}
              className="px-2 py-1 bg-green-100 rounded hover:bg-green-200 text-sm"
            >
              +
            </button>
          </div>
        </>
      )}

      {quantity === 0 && onAdd && (
        <button
          onClick={onAdd}
          className="mt-4 px-4 py-2 bg-orange-500 text-white rounded hover:bg-orange-600 transition text-sm"
        >
          Add to cart
        </button>
      )}
    </div>
  );
}
