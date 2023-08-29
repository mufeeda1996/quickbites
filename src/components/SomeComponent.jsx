// SomeComponent.js
import React from 'react';
import ProductCard from './ProductCard';

const SomeComponent = () => {
  // Assuming you have some product data in your state or fetched from an API
  const products = [
    {
      id: 1,
      title: 'Product 1',
      image: 'https://example.com/product1.jpg',
      price: 29.99,
      description: 'This is the description of Product 1.',
    },
    // Add more product objects as needed
  ];

  return (
    <div>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default SomeComponent;
