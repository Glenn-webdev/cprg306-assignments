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

  
  return (

    <div className="flex justify-center pt-10 px-4">
      <div className="flex w-full">
        <div className="w-1/3 pr-4">
        
          <ItemList items={items} onItemSelect={handleItemSelect} />
        </div>
        <div className="w-2/3">
          <div className="px-4">
          <MealIdeas ingredient={selectItemName}/>
          </div>
        </div>
      </div>
    </div>
  
  );
};


