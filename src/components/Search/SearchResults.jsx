import React from 'react';
import { useLocation } from 'react-router-dom';

// Example products data
const products = [
  { id: 1, name: 'Atta', photo: 'https://example.com/atta.jpg', price: '₹50' },
  { id: 2, name: 'Dal', photo: 'https://example.com/dal.jpg', price: '₹100' },
  { id: 3, name: 'Rice', photo: 'https://example.com/rice.jpg', price: '₹120' },
  { id: 4, name: 'Sugar', photo: 'https://example.com/sugar.jpg', price: '₹40' },
];

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const query = searchParams.get('query').toLowerCase();

  // Filter products based on the search query
  const filteredProducts = products.filter(product => 
    product.name.toLowerCase().includes(query)
  );

  return (
    <div className="p-4">
      <h1 className="text-lg font-bold">Search Results for: {query}</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {filteredProducts.length > 0 ? (
          filteredProducts.map(product => (
            <div key={product.id} className="border p-4 rounded-lg shadow-md">
              <img src={product.photo} alt={product.name} className="w-full h-40 object-cover" />
              <h2 className="text-xl font-semibold mt-2">{product.name}</h2>
              <p className="text-gray-700 mt-1">{product.price}</p>
              <button className="mt-4 bg-green-600 text-white py-2 px-4 rounded">Order Now</button>
            </div>
          ))
        ) : (
          <p>No products found</p>
        )}
      </div>
    </div>
  );
};

export default SearchResults;
