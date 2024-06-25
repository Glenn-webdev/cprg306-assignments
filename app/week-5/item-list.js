import React, { useState, useEffect } from 'react';
import itemsData from '../week-5/item.json'; 
import Item from './item';


const ItemList = () => {
  const [items, setItems] = useState([]);
  const [sortBy, setSortBy] = useState('name'); 

  useEffect(() => {
   
   
    setTimeout(() => {
    
      
      const sortedItems = [...itemsData].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        } else {
          return 0;
        }
      });
      setItems(sortedItems);}, 1000);}, [sortBy]); 

  return (
    <div>
      <h2 class='font-extrabold text-center bg-clip-padding'>Shopping List</h2>
      <div>


         

        
         <div className='space-x-5 px-5'>
         <label id="sort">Sort by:</label>
         <button className="rounded-lg px-4 border-neutral-600"
            data-value="name"
            onClick={(e) => setSortBy(e.target.getAttribute('data-value'))}
            style={{ backgroundColor: sortBy === 'name' ? 'blue' : 'grey', color: 'white' }}
          >
            Name
          </button>

          <button className="rounded-lg px-4"
            data-value="category"
            onClick={(e) => setSortBy(e.target.getAttribute('data-value'))}
            style={{ backgroundColor: sortBy === 'category' ? 'blue' : 'grey', color: 'white' }}
          >
            Category
          </button>
    </div>

     
      
      </div>


      <div className='pl-10 pt-4 pb-4'>
        {items.map(item => (
          
          <Item key={item.id}
          name={item.name}
          category={item.category}
          quantity={item.quantity}></Item>
        ))} 
      </div>
    </div>
  );
};

export default ItemList;