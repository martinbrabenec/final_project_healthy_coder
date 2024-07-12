import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/recipes`)
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div>
      <h2>All Recipes</h2>
      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <a href={`/recipes/${recipe.id}`} target="_blank" rel="noopener noreferrer">
              {recipe.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Recipes;