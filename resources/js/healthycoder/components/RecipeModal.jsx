// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Modal, Button, Form } from 'react-bootstrap';

// const API_BASE_URL = 'http://www.thehealthycoder.test/api';

// function RecipeModal({ recipe, onClose, onUpdate }) {
//   const [ingredients, setIngredients] = useState([]);
//   const [steps, setSteps] = useState([]);
//   const [isEditing, setIsEditing] = useState(false);
//   const [editedRecipe, setEditedRecipe] = useState({ ...recipe });

//   useEffect(() => {
//     fetchIngredients();
//     fetchSteps();
//   }, [recipe.id]);

//   const fetchIngredients = () => {
//     axios.get(`${API_BASE_URL}/recipe-ingredients`)
//       .then(response => {
//         const recipeIngredients = response.data.filter(item => item.recipe_id === recipe.id);
//         return Promise.all(recipeIngredients.map(item => 
//           axios.get(`${API_BASE_URL}/ingredients/${item.ingredient_id}`)
//             .then(ingredientResponse => ({
//               ...ingredientResponse.data,
//               quantity: item.quantity,
//               unit: item.unit
//             }))
//         ));
//       })
//       .then(ingredientsWithDetails => {
//         setIngredients(ingredientsWithDetails);
//       })
//       .catch(error => {
//         console.error('Error fetching ingredients:', error);
//       });
//   };

//   const fetchSteps = () => {
//     axios.get(`${API_BASE_URL}/recipe-steps`)
//       .then(response => {
//         const recipeSteps = response.data.filter(item => item.recipe_id === recipe.id);
//         setSteps(recipeSteps);
//       })
//       .catch(error => {
//         console.error('Error fetching recipe steps:', error);
//       });
//   };

//   const handleEdit = () => {
//     setIsEditing(true);
//   };

//   const handleSave = () => {
//     axios.put(`${API_BASE_URL}/recipes/${recipe.id}`, editedRecipe)
//       .then(() => {
//         setIsEditing(false);
//         onUpdate();
//       })
//       .catch(error => {
//         console.error('Error updating recipe:', error);
//       });
//   };

//   const handleInputChange = (e) => {
//     setEditedRecipe({ ...editedRecipe, [e.target.name]: e.target.value });
//   };

//   return (
//     <Modal show={true} onHide={onClose} size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>{recipe.name}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         {isEditing ? (
//           <Form>
//             <Form.Group>
//               <Form.Label>Recipe Name</Form.Label>
//               <Form.Control 
//                 type="text" 
//                 name="name" 
//                 value={editedRecipe.name} 
//                 onChange={handleInputChange} 
//               />
//             </Form.Group>
//             {/* Add more form fields for editing other recipe properties */}
//           </Form>
//         ) : (
//           <>
//             <img src={recipe.photo} alt={recipe.name} style={{ maxWidth: '100%' }} />
//             <h3>Ingredients:</h3>
//             <ul>
//               {ingredients.map(ingredient => (
//                 <li key={ingredient.id}>
//                   {ingredient.quantity} {ingredient.unit} {ingredient.name}
//                 </li>
//               ))}
//             </ul>
//             <h3>Steps:</h3>
//             <ol>
//               {steps.map(step => (
//                 <li key={step.id}>{step.description}</li>
//               ))}
//             </ol>
//           </>
//         )}
//       </Modal.Body>
//       <Modal.Footer>
//         {isEditing ? (
//           <Button variant="primary" onClick={handleSave}>Save Changes</Button>
//         ) : (
//           <Button variant="secondary" onClick={handleEdit}>Edit Recipe</Button>
//         )}
//         <Button variant="secondary" onClick={onClose}>Close</Button>
//       </Modal.Footer>
//     </Modal>
//   );
// }

// export default RecipeModal;