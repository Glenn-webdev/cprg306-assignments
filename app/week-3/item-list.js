
import Item from './item';

const ItemList = () => {
    


const item1 = {
    name: "milk, 4 L 🥛",
    quantity: 1,
    category: "dairy",
  };

  const item2 = {
    name: "bread 🍞",
    quantity: 2,
    category: "bakery",
  };
  


return (
    <div>
<h1>Shopping List</h1>
<ul>

<Item
name = {item1.name}
quantity = {item1.quantity}
category = {item1.category}
/>


<Item
name = {item2.name}
quantity = {item2.quantity}
category = {item2.category}
/>




</ul>
    </div>
);
}

export default ItemList;