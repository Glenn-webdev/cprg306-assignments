import React from 'react';

const Item = ({ name, quantity, category, onSelect }) => {
  return (
    <div
      onClick={onSelect}
      className="w-60 h-35 py-8 text-center border-2 rounded-lg shadow-md bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
    >
      <h1 className="text-sm font-semibold">{name}</h1>
      <h2 className="text-sm font-semibold">Category: {category}</h2>
      <h2 className="text-sm font-semibold">Quantity: {quantity}</h2>
    </div>
  );
};

export default Item;
