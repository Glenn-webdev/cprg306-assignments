'use client'
import React, { useState, useEffect } from 'react';
import Item from './item';
import ItemDetails from './item.json';

const ItemList = ({ ItemDetails, onItemSelect }) => {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortBy, setSortBy] = useState('name'); 

  useEffect(() => {
    const sortItems = () => {
      const sorted = [...ItemDetails].sort((a, b) => {
        if (sortBy === 'name') {
          return a.name.localeCompare(b.name);
        } else if (sortBy === 'category') {
          return a.category.localeCompare(b.category);
        } else {
          return 0;
        }
      });
      setSortedItems(sorted);
    };

    sortItems();
  }, [items, sortBy]);

  return (
    <div>
      <h2 className='font-extrabold text-center bg-clip-padding'>Shopping List</h2>
      <div>
        <div className='space-x-5 px-5 py-3'>
          <label id="sort">Sort by:</label>

          <button
            className="rounded-lg px-4 border-neutral-600"
            data-value="name"
            onClick={(e) => setSortBy(e.target.getAttribute('data-value'))}
            style={{ backgroundColor: sortBy === 'name' ? 'blue' : 'grey', color: 'white' }}
          >
            Name
          </button>

          <button
            className="rounded-lg px-4"
            data-value="category"
            onClick={(e) => setSortBy(e.target.getAttribute('data-value'))}
            style={{ backgroundColor: sortBy === 'category' ? 'blue' : 'grey', color: 'white' }}
          >
            Category
          </button>
        </div>
      </div>

      <div className='pl-10 pt-4 pb-4'>
        {sortedItems.map(item => (
          <Item
            key={item.id}
            name={item.name}
            category={item.category}
            quantity={item.quantity}
            onSelect={() => onItemSelect(item)}
          />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
