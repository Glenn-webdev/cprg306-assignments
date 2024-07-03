import React, { useState, useEffect } from 'react';

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        async function fetchMealIdeas(ingredient) {
            try {
                const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
                const data = await response.json();
                if (data.meals) {
                    setMeals(data.meals);
                } else {
                    setMeals([]);
                }
            } catch (error) {
                console.log("Error fetching data:", error);
            }
        }

        if (ingredient) {
            fetchMealIdeas(ingredient);
        }
    }, [ingredient]);

    return (
        <div>
            <h1>Meal Ideas with {ingredient}</h1>
            <ul>
                {meals.map(meal => (
                    <li key={meal.idMeal}>
                        <h2>{meal.strMeal}</h2>
                        <img src={meal.strMealThumb} alt={meal.strMeal} />
                    </li>
                ))}
            </ul>
        </div>
    );
}
