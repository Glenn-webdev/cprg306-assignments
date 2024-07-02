"use client";

import React,{ useState } from "react";




export default function NewItem() {

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [category,setCategory] = useState("Produce");
   

    const handleSubmit = async (event) => {
        event.preventDefault();

        const newID = () => {
            return Math.random();
        }
    
        const newItem = {
            id:newID,
          name,
          quantity,
          category,
          
        };
    
        try {
            const response = await fetch('/api/add-item', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newItem),
            });
            const data = await response.json();
            console.log('Item added successfully:', data);
      
            // Optional: Clear form fields after submission
            setName('');
            setQuantity(1);
            setCategory('Produce');
          } catch (error) {
            console.error('Error adding item:', error);
          }
      };
        
    
   
            
    
    

    


    const handleTextChange = (event) => {
        setName(event.target.value);

    }
   
    const handleQuantityChange = (event) => {
          setQuantity(event.target.value);
        
      

    }
    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    return (

        <form onSubmit={handleSubmit}>
            <div className="border border-indigo-600 flex-initial p-4 rounded-lg bg-red bg-zinc-300">
                <div>
                    <label htmlFor="name">Name</label>
                    </div>
                    <div> 
                    <input type="text" value={name} onChange={handleTextChange}/>
                </div>
               
                <div>
                    <label htmlFor="quantity">Quantity</label>
                    </div>
                    <div>
                    <input type="number" value={quantity} onChange={handleQuantityChange}/>
                </div>
                <div>
                <label htmlFor="category">Category</label>
                </div>
                    <div>

                        <select value={category} onChange={handleCategoryChange} >
                            <option value="Produce">Produce</option>
                            <option value="Baker">Baker</option>
                            <option value="Meat">Meat</option>
                            <option value="Frozen Foods">Frozen Foods</option>
                            <option value="Canned Goods">Canned Goods</option>
                            <option value="Dry Goods">Dry Goods</option>
                            <option value="Beverage">Beverage</option>
                            <option value="Snacks">Snacks</option>
                            <option value="Household">Household</option>
                            <option value="Others">Others</option>


                        </select>     
                    
                    </div>
                    <div className ='py-4 flex justify-center '>
                        <button onClick={console.log(category)} className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>
                             
                 </div>

</form>


        
           
        
       
        

    )
    
};
