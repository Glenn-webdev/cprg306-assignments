'use client'
import React, { useState } from 'react';
import ItemList from './item-list';
import itemsData from './item.json';
import MealIdeas from './meal-ideas';

export default function  Page () {
  
const [selectItemName,setSelectedItemName] = useState("");

function handleItemSelect(name) {
  const strings = name.split(",");
  const cleanName = strings[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
  setSelectedItemName(cleanName)
  console.log(cleanName);

}


  const [items, setItems] = useState(itemsData);

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
  };

  return (
    <div>
      
      
      <ItemList items={itemsData} onItemSelect={handleItemSelect} />
      <MealIdeas ingredient={selectItemName}/>
    </div>
  );
};


