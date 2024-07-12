import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function RecipeList() {
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
            <Link to={`${recipe.id}`}>{recipe.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RecipeList;