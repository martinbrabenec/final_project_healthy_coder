import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Modal from 'react-modal';
import '../../../css/recipes.scss';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recipesPerPage = 8; // Number of recipes per page
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [editMode, setEditMode] = useState(false);
  const [newRecipe, setNewRecipe] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = () => {
    axios.get('/api/recipes')
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.error('Error fetching recipes:', error);
      });
  };

  const openModal = (recipeId) => {
    axios.get(`/api/recipes/${recipeId}`)
      .then(response => {
        setSelectedRecipe(response.data);
        setModalIsOpen(true);
      })
      .catch(error => {
        console.error('Error fetching recipe details:', error);
      });
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setSelectedRecipe(null);
    setEditMode(false);
    setNewRecipe(false);
    setErrors({});
  };

  const handleEdit = () => {
    setEditMode(true);
  };

  const handleDelete = (recipeId) => {
    axios.delete(`/api/recipes/${recipeId}`)
      .then(() => {
        fetchRecipes();
        closeModal();
      })
      .catch(error => {
        console.error('Error deleting recipe:', error);
      });
  };

  const handleSave = () => {
    const request = newRecipe ? axios.post : axios.put;
    const url = newRecipe ? '/api/recipes/create' : `/api/recipes/${selectedRecipe.id}`;
    request(url, selectedRecipe)
      .then(() => {
        fetchRecipes();
        closeModal();
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          setErrors(error.response.data.errors);
        } else {
          console.error('Error saving recipe:', error);
        }
      });
  };

  const handleAddIngredient = () => {
    setSelectedRecipe({
      ...selectedRecipe,
      ingredients: [...selectedRecipe.ingredients, { ingredient: { name: '' }, quantity: '', unit: '' }]
    });
  };

  const handleRemoveIngredient = (index) => {
    const ingredients = selectedRecipe.ingredients.filter((_, i) => i !== index);
    setSelectedRecipe({ ...selectedRecipe, ingredients });
  };

  const handleAddStep = () => {
    setSelectedRecipe({
      ...selectedRecipe,
      steps: [...selectedRecipe.steps, { description: '' }]
    });
  };

  const handleRemoveStep = (index) => {
    const steps = selectedRecipe.steps.filter((_, i) => i !== index);
    setSelectedRecipe({ ...selectedRecipe, steps });
  };

  const handleChange = (e, field, index, type) => {
    const value = e.target.value;
    if (type === 'ingredient') {
      const ingredients = [...selectedRecipe.ingredients];
      if (field === 'name') {
        ingredients[index]['ingredient'][field] = value;
      } else {
        ingredients[index][field] = value;
      }
      setSelectedRecipe({ ...selectedRecipe, ingredients });
    } else if (type === 'step') {
      const steps = [...selectedRecipe.steps];
      steps[index][field] = value;
      setSelectedRecipe({ ...selectedRecipe, steps });
    } else if (type === 'checkbox') {
      setSelectedRecipe({ ...selectedRecipe, is_vegetarian: e.target.checked ? true : false });
    } else {
      setSelectedRecipe({ ...selectedRecipe, [field]: value });
    }
  };

  // Pagination logic
  const indexOfLastRecipe = currentPage * recipesPerPage;
  const indexOfFirstRecipe = indexOfLastRecipe - recipesPerPage;
  const currentRecipes = recipes.slice(indexOfFirstRecipe, indexOfLastRecipe);

  const handleNextPage = () => {
    setCurrentPage(prevPage => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage(prevPage => prevPage - 1);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(recipes.length / recipesPerPage);

  return (
    <div className="container">
      <button className="new-recipe-button" onClick={() => { setNewRecipe(true); setSelectedRecipe({ name: '', photo: '', is_vegetarian: false, ingredients: [], steps: [] }); setModalIsOpen(true); }}>New Recipe</button>
      <div className="row">
        {currentRecipes.map(recipe => {
          const imageUrl = `/assets/food images/${recipe.photo}`;
          
          return (
            <div className="col-md-3 col-sm-6 mb-4" key={recipe.id}>
              <div className="card h-100 recipe-card">
                <div className="image-container">
                  <img src={imageUrl} alt={recipe.name} className="card-img-top" />
                </div>
                <div className="card-body">
                  <h5 className="card-title" onClick={() => openModal(recipe.id)}>{recipe.name}</h5>
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
                  <div className="card-buttons">
                    <button onClick={() => { openModal(recipe.id); handleEdit(); }}>Edit</button>
                    <button onClick={() => handleDelete(recipe.id)}>Delete</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      
      <div className="pagination-buttons">
        {Array.from({ length: totalPages }, (_, index) => (
          <span
            key={index + 1}
            className={currentPage === index + 1 ? 'active' : ''}
            onClick={() => handlePageChange(index + 1)}
          >
            {index + 1}
          </span>
        ))}
      </div>
      
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Recipe Details"
        className="modal-content"
        overlayClassName="modal-overlay"
      >
        {selectedRecipe && (
          <div>
            <h2>{editMode || newRecipe ? 'Edit Recipe' : selectedRecipe.name}</h2>
            {editMode || newRecipe ? (
              <>
                <input type="text" value={selectedRecipe.name} onChange={(e) => handleChange(e, 'name')} placeholder="Recipe Name" />
                {errors.name && <span className="error">{errors.name[0]}</span>}
                <input type="text" value={selectedRecipe.photo} onChange={(e) => handleChange(e, 'photo')} placeholder="Photo URL" />
                {errors.photo && <span className="error">{errors.photo[0]}</span>}
                <label>
                  Vegetarian
                  <input type="checkbox" checked={selectedRecipe.is_vegetarian} onChange={(e) => handleChange(e, 'is_vegetarian', null, 'checkbox')} />
                </label>
                {errors.is_vegetarian && <span className="error">{errors.is_vegetarian[0]}</span>}
                <h3>Ingredients</h3>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                  <div key={index}>
                    <input type="text" value={ingredient.quantity} onChange={(e) => handleChange(e, 'quantity', index, 'ingredient')} placeholder="Quantity" />
                    {errors[`ingredients.${index}.quantity`] && <span className="error">{errors[`ingredients.${index}.quantity`][0]}</span>}
                    <input type="text" value={ingredient.unit} onChange={(e) => handleChange(e, 'unit', index, 'ingredient')} placeholder="Unit" />
                    {errors[`ingredients.${index}.unit`] && <span className="error">{errors[`ingredients.${index}.unit`][0]}</span>}
                    <input type="text" value={ingredient.ingredient.name} onChange={(e) => handleChange(e, 'name', index, 'ingredient')} placeholder="Ingredient" />
                    {errors[`ingredients.${index}.name`] && <span className="error">{errors[`ingredients.${index}.name`][0]}</span>}
                    <button onClick={() => handleRemoveIngredient(index)}>-</button>
                  </div>
                ))}
                <button onClick={handleAddIngredient}>+</button>
                <h3>Steps</h3>
                {selectedRecipe.steps.map((step, index) => (
                  <div key={index}>
                    <textarea value={step.description} onChange={(e) => handleChange(e, 'description', index, 'step')} placeholder="Step Description"></textarea>
                    {errors[`steps.${index}.description`] && <span className="error">{errors[`steps.${index}.description`][0]}</span>}
                    <button onClick={() => handleRemoveStep(index)}>-</button>
                  </div>
                ))}
                <button onClick={handleAddStep}>+</button>
                <button onClick={handleSave}>Save</button>
              </>
            ) : (
              <>
                <h3>Ingredients</h3>
                <ul>
                  {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient.quantity} {ingredient.unit} {ingredient.ingredient.name}</li>
                  ))}
                </ul>
                <h3>Steps</h3>
                <ol>
                  {selectedRecipe.steps.map((step, index) => (
                    <li key={index}>{step.description}</li>
                  ))}
                </ol>
              </>
            )}
            <button onClick={closeModal}>Close</button>
          </div>
        )}
      </Modal>
    </div>
  );
}

export default Recipes;
