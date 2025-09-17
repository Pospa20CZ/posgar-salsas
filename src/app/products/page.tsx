type Sauce = {
  id: number;
  name: string;
  description: string;
};

const sauces: Sauce[] = [
  { id: 1, name: "Smoky Jalapeño", description: "A bold blend of smoked jalapeños and garlic." },
  { id: 2, name: "Mango Habanero", description: "Sweet mango meets fiery habanero for a tropical kick." },
  { id: 3, name: "Classic Garlic", description: "Smooth, rich garlic flavor perfect for any dish." },
];

export default function ProductsPage() {
  return (
    <main style={{ padding: '2rem' }}>
      <h1 style={{ textAlign: 'center' }}>Our Sauces</h1>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {sauces.map((sauce) => (
          <li key={sauce.id} style={{ marginBottom: '2rem', borderBottom: '1px solid #eee', paddingBottom: '1rem' }}>
            <h2>{sauce.name}</h2>
            <p>{sauce.description}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
