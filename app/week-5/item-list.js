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


         <label id="sort">Sort by:</label>

        
        <select id="sort" value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}>
          <option value="name">Name</option>
          <option value="category">Category</option>
        </select> 
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