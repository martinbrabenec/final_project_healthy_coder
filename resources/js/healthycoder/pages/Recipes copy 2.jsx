import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../css/recipe.scss'; // Using the same CSS file

function Recipes() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  }, []);

  return (
    <div className="container">
      <h2 className="my-4">All Recipes</h2>
      <div className="row">
        {recipes.map(recipe => {
          const imageUrl = `/assets/food images/${recipe.photo}`;
          console.log(`Image URL: ${imageUrl}`);
          
          return (
            <div className="col-md-3 col-sm-6 mb-4" key={recipe.id}>
              <div className="card h-100">
                <div className="image-container">
                  <img src={imageUrl} alt={recipe.name} className="card-img-top activity-image" />
                  <div className="overlay">
                    <Link to={`/recipes/${recipe.id}`} className="activity-name">{recipe.name}</Link>
                  </div>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <p className="card-text">
                    {recipe.is_vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Recipes;
