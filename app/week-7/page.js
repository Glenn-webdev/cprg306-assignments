'use client'
import React, { useState } from 'react';
import NewItem from './new-item';
import ItemList from './item-list';
import itemsData from './item.json';

const Page = () => {
  
  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      
      
      <ItemList items={items} />
    </div>
  );
};

export default Page;
