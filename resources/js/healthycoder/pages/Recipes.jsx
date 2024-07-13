import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [showAddForm, setShowAddForm] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [newRecipe, setNewRecipe] = useState({ name: '', photo: '', is_vegetarian: 0 });

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    setIsLoading(true);
    setError(null);
    axios.get('http://www.thehealthycoder.test/api/recipes')
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

  const handleAddRecipe = () => {
    axios.post('http://www.thehealthycoder.test/api/recipes/create', newRecipe)
      .then(() => {
        fetchRecipes();
        setShowAddForm(false);
        setNewRecipe({ name: '', photo: '', is_vegetarian: 0 });
      })
      .catch(error => {
        setError('Error adding recipe: ' + error.message);
      });
  };

  const handleRecipeClick = (recipe) => {
    setSelectedRecipe(recipe);
    console.log(`<img src="assets/food images/${recipe.photo}" alt="${recipe.name}" />`);
  };

  return (
    <div>
      <h2>All Recipes</h2>
      <Button variant="primary" onClick={() => setShowAddForm(!showAddForm)}>
        {showAddForm ? 'Cancel' : 'Add New Recipe'}
      </Button>
      {showAddForm && (
        <div>
          <input
            type="text"
            placeholder="Recipe Name"
            value={newRecipe.name}
            onChange={(e) => setNewRecipe({ ...newRecipe, name: e.target.value })}
          />
          <input
            type="text"
            placeholder="Recipe Photo"
            value={newRecipe.photo}
            onChange={(e) => setNewRecipe({ ...newRecipe, photo: e.target.value })}
          />
          <label>
            Is Vegetarian:
            <input
              type="checkbox"
              checked={newRecipe.is_vegetarian === 1}
              onChange={(e) => setNewRecipe({ ...newRecipe, is_vegetarian: e.target.checked ? 1 : 0 })}
            />
          </label>
          <Button variant="success" onClick={handleAddRecipe}>Add Recipe</Button>
        </div>
      )}
      {isLoading && <p>Loading...</p>}
      {error && <p>Error: {error}</p>}
      {!isLoading && !error && (
        <div className="recipe-grid">
          {recipes.map(recipe => (
            <div key={recipe.id} className="recipe-card" onClick={() => handleRecipeClick(recipe)}>
              <img src={`assets/food images/${recipe.photo}`} alt={recipe.name} />
              <div className="recipe-name">{recipe.name}</div>
              <div>{recipe.is_vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</div>
            </div>
          ))}
        </div>
      )}
      {selectedRecipe && (
        <div className="selected-recipe">
          <h3>{selectedRecipe.name}</h3>
          <img src={`assets/food images/${selectedRecipe.photo}`} alt={selectedRecipe.name} />
          <p>{selectedRecipe.description}</p>
          <p>{selectedRecipe.is_vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</p>
        </div>
      )}
    </div>
  );
}

export default Recipes;
