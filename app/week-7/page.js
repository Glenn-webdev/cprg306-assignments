"use client";


import React, { useState } from 'react';
import ItemList from '../week-6/item-list';
import MealIdeas from './meal-ideas';
import items from "./item.json";

export default function Page() {
 
  const [selectedItemName, setSelectedItemName] = useState('');
  /* const handleItemSelect = (item) => {
   const cleanedItemName = item.name.split(',')[0].trim().replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '');
    setSelectedItemName(cleanedItemName);
*/
    
  

  function handleItemSelect(name){
    setSelectedItemName(name)
  }

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div>
       
        
      
        <ItemList items={items} onItemSelect={handleItemSelect} />
      </div>
      <div>
      
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  );
}



