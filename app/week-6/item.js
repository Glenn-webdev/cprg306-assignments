

import React from 'react';


const Item = ({name,quantity,category}) => {

    return (
        
        <div className=' w-60 h-35 py-8  text-center border-2 rounded-lg shadow-md  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
            
        <p className="text-sm font-semibold">{name}</p>
        <p className="text-sm font-semibold">Category: {category}</p>
        <p className="text-sm font-semibold">Quantity: {quantity}</p>
        
      
      </div>
      
    
    );

};

export default Item;


/*import React from "react";

const Item = ({ name, quantity, category }) => {
  return (
    <li className="flex justify-between items-center border-b border-gray-300 py-2">
      <div className="flex-1 font-semibold">{name}</div>
      <div className="w-20 text-right">{quantity} pcs</div>
      <div className="flex-1 text-right italic text-gray-500">{category}</div>
    </li>
  );
};

export default Item; */