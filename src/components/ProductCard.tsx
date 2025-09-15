import React from "react";

interface ProductCardProps {
  name: string;
  description: string;
  image?: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ name, description, image }) => {
  return (
    <div style={{border: '1px solid #eee', borderRadius: '8px', padding: '1rem', background: '#fff'}}>
      {image && (
        <img src={image} alt={name} style={{width: '100%', height: '120px', objectFit: 'contain', marginBottom: '1rem'}} />
      )}
      <h4 style={{margin: '0 0 0.5rem 0'}}>{name}</h4>
      <p style={{margin: '0 0 1rem 0', color: '#666'}}>{description}</p>
      <button style={{padding: '0.5rem 1rem', background: '#e63946', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer'}}>Do košíku</button>
    </div>
  );
};

export default ProductCard;
