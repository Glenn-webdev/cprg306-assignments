"use client";

import { useState } from "react";

export default function NewItem() {

    const [name,setName] = useState("");
    const [quantity,setQuantity] = useState(1);
    const [category,setCategory] = useState("produce");


    const handleSubmit = (e) => { e.preventDefault(); 

        const item = {name,category,quantity};

        console.log(item);
        alert(`Name: ${name}\nQuantity: ${quantity}\nCategory: ${category}`);


    };


    return (

        <form onSubmit={handleSubmit}>
            <div class="border border-indigo-600 flex-initial w-32">
                <div>
                    <label for="name">Name</label>
                    </div>
                    <div> 
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                </div>
               
                <div>
                    <label for="quantity">Quantity</label>
                    </div>
                    <div>
                    <input type="number" value={quantity} onChange={(e) => setQuantity(e.target.value)}/>
                </div>
                    <div>
                    <label for="category">Category</label>                
                    </div>
                    <div>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)}/>

                    </div>
                    <div>
                        <button name="submit" className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Submit</button>
                    </div>

                
                
            </div>

</form>






    
        
           
        
       
        

    )
    
};
