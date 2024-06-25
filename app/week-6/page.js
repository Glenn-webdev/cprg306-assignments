
"use client";

import React,{ useState } from "react";
import ItemList from "../week-5/item-list";
import NewItem from "./new-item";
import ItemsData from "../week-5/item.json";

const Page = () => {
    
        const [items, setItems] = useState([...ItemsData]); // Initialize items with data from items.json
      
         //Event handler to add a new item
        const handleAddItem = (newItem) => {
        setItems((prevItems) => [...prevItems, newItem]);
        };
        
    

    return (
        <div>
           
            <NewItem onAddItem = {handleAddItem}></NewItem>
            <ItemList items={items}></ItemList>

        </div>
    ) 


}

export default Page;
