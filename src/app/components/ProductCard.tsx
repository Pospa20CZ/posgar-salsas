export default function ProductCard() {
  return (
    <div className="border rounded-lg p-4 bg-white shadow">
      <img src="/file.svg" alt="Omáčka" className="w-full h-32 object-contain mb-4" />
      <h4 className="text-lg font-semibold mb-1">Chilli Salsa</h4>
      <p className="text-sm text-gray-600 mb-3">Pikantní omáčka s čerstvými chilli papričkami.</p>
      <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded">Do košíku</button>
    </div>
  );
}
