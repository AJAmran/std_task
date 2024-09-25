import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div
      key={product.id}
      className="bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
    >
      <h3 className="text-xl font-bold">{product.name}</h3>
      <p className="text-gray-600">${product.price}</p>
    </div>
  );
};

export default ProductCard;
