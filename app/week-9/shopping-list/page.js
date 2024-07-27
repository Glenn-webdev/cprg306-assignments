'use client';

import React, { useState, useEffect } from 'react';
import { getItems, addItem } from '../_services/shopping-list-service';
import ItemList from '@/app/week-9/item-list';
import NewItem from '@/app/week-9/new-item';
import { getGitHubUserId } from '../_utils/firebase';

export default function ShoppingList() {
    const [items, setItems] = useState([]);
    const [userId, setUserId] = useState(null);
   
 
    const loadItems = async (uid) => {
        try {
            const result = await getItems(uid);
            setItems(result);
        } catch (error) {
            console.error('Error loading items:', error);
        }
    };

    // Fetch GitHub user ID on mount and then load items
    useEffect(() => {
        const fetchUserIdAndLoadItems = async () => {
            try {
                const uid = await getGitHubUserId(userId);
                setUserId(uid);
                await loadItems(uid);
            } catch (error) {
                console.error('Error fetching GitHub user ID or loading items:', error);
            }
        };

        fetchUserIdAndLoadItems();
    }, []);

    // Function to handle adding a new item
    const handleAddItem = async (itemName) => {
        if (!userId) return;

        try {
            const newItem = await addItem(userId, itemName);
            setItems((prevItems) => [...prevItems, { ...newItem, id: newItem.id }]);
        } catch (error) {
            console.error('Error adding item:', error);
        }
    };

    return (
        <div>
            <h1>Shopping List</h1>
            <loadItems></loadItems>
          
        </div>
    );
}
