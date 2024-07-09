

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

