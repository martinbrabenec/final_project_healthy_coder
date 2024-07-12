// import React from 'react';
// import { Outlet } from 'react-router-dom';

// function Recipes() {
//   return (
//     <div>
//       <h1>Recipes</h1>
//       <Outlet />
//     </div>
//   );
// }

// export default Recipes;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, Outlet, useParams } from 'react-router-dom';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams();

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
    <div className="row">
      <div className="col-md-4">
        <h2>All Recipes</h2>
        <ul>
          {recipes.map(recipe => (
            <li key={recipe.id}>
              <Link to={`/recipes/${recipe.id}`}>{recipe.name}</Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="col-md-8">
        <Outlet />
      </div>
    </div>
  );
}

export default Recipes;