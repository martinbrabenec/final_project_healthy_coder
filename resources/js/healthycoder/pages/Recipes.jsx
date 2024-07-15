import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import '../../../css/recipes.scss';

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
          
          return (
            <div className="col-md-3 col-sm-6 mb-4" key={recipe.id}>
              <div className="card h-100 recipe-card">
                <div className="image-container">
                  <img src={imageUrl} alt={recipe.name} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{recipe.name}</h5>
                  <div className="vegetarian-icon-container">
                    {recipe.is_vegetarian ? (
                      <div className="vegetarian-icon-wrapper">
                        <img 
                          src="/ASSETS/svgs/veg.svg" 
                          alt="Vegetarian" 
                          className="vegetarian-icon" 
                          title="Suitable for Vegetarians"
                        />
                        <div className="vegetarian-tooltip">
                          Suitable for Vegetarians
                        </div>
                      </div>
                    ) : null}
                  </div>
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
