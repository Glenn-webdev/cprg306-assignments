'use client'
import React, { useState } from 'react';
import ItemList from './item-list';
import itemsData from './item.json';
import MealIdeas from './meal-ideas';

const Page = () => {
  
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      
      
      <ItemList items={items} />
      <MealIdeas/>
    </div>
  );
};

export default Page;
