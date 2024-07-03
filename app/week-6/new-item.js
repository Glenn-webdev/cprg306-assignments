import React, { useState } from 'react';

const NewItem = ({ onAddItem }) => {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [category, setCategory] = useState('produce');

  // Function to generate a random ID
  const generateId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const newItem = {
      id: generateId(), // Generate a random ID for the new item
      name: name,
      quantity: quantity,
      category: category
    };

    onAddItem(newItem); // Call the onAddItem function passed via props with the new item

    // Reset form fields
    setName('');
    setQuantity(1);
    setCategory('produce');
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

    <form onSubmit={handleSubmit} className='pl-20'>
            <div className="border border-indigo-600 flex-initial p-4 rounded-lg bg-red bg-zinc-300 w-1/4">
                <div>
                    <label for="name">Name</label>
                    </div>
                    <div> 
                    <input type="text" value={name} onChange={handleTextChange}/>
                </div>
               
                <div>
                    <label for="quantity">Quantity</label>
                    </div>
                    <div>
                    <input type="number" value={quantity} onChange={handleQuantityChange}/>
                </div>
                <div>
                <label for="category">Category</label>
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


  );
};

export default NewItem;
