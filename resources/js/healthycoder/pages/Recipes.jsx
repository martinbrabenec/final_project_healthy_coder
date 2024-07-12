import React, { useState, useEffect } from 'react';
import axios from 'axios';
import RecipeModal from '../components/RecipeModal';
import AddRecipeModal from '../components/AddRecipeModal';
import { Button } from 'react-bootstrap';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddModal, setShowAddModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    setIsLoading(true);
    setError(null);
    axios.get(`${API_BASE_URL}/recipes`)
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        setError('Error fetching recipes: ' + error.message);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <div>
      <h2>All Recipes</h2>
      <Button variant="primary" onClick={() => setShowAddModal(true)}>Add New Recipe</Button>
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card" onClick={() => setSelectedRecipe(recipe)}>
              <img src={recipe.photo} alt={recipe.name} />
              <div className="recipe-name">{recipe.name}</div>
            </div>
          ))}
        </div>
      )}
      {selectedRecipe && (
        <RecipeModal 
          recipe={selectedRecipe} 
          onClose={() => setSelectedRecipe(null)}
          onUpdate={fetchRecipes}
        />
      )}
      <AddRecipeModal 
        show={showAddModal}
        onClose={() => setShowAddModal(false)}
        onAdd={fetchRecipes}
      />
    </div>
  );
}

export default Recipes;