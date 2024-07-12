import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function RecipeDetail() {
  const [recipe, setRecipe] = useState(null);
  const [ingredients, setIngredients] = useState([]);
  const [steps, setSteps] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      // Reset states when a new recipe is selected
      setRecipe(null);
      setIngredients([]);
      setSteps([]);

      // Fetch recipe details
      axios.get(`${API_BASE_URL}/recipes/${id}`)
        .then(response => {
          setRecipe(response.data);
        })
        .catch(error => {
          console.error('Error fetching recipe:', error);
        });

      // Fetch recipe ingredients
      axios.get(`${API_BASE_URL}/recipe-ingredients`)
        .then(response => {
          const recipeIngredients = response.data.filter(item => item.recipe_id === parseInt(id));
          return Promise.all(recipeIngredients.map(item => 
            axios.get(`${API_BASE_URL}/ingredients/${item.ingredient_id}`)
          ));
        })
        .then(ingredientResponses => {
          const ingredientsWithQuantities = ingredientResponses.map((response, index) => ({
            ...response.data,
            quantity: response.data.quantity,
            unit: response.data.unit
          }));
          setIngredients(ingredientsWithQuantities);
        })
        .catch(error => {
          console.error('Error fetching ingredients:', error);
        });

      // Fetch recipe steps
      axios.get(`${API_BASE_URL}/recipe-steps`)
        .then(response => {
          const recipeSteps = response.data.filter(item => item.recipe_id === parseInt(id));
          setSteps(recipeSteps);
        })
        .catch(error => {
          console.error('Error fetching recipe steps:', error);
        });
    }
  }, [id]);

  if (!recipe) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{recipe.name}</h1>
      <h2>Ingredients:</h2>
      <ul>
        {ingredients.map(ingredient => (
          <li key={ingredient.id}>
            {ingredient.name}: {ingredient.quantity} {ingredient.unit}
          </li>
        ))}
      </ul>
      <h2>Steps:</h2>
      <ol>
        {steps.map(step => (
          <li key={step.id}>{step.description}</li>
        ))}
      </ol>
    </div>
  );
}

export default RecipeDetail;