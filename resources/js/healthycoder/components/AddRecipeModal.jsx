import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function AddRecipeModal({ show, onClose, onAdd }) {
  const [newRecipe, setNewRecipe] = useState({ name: '', photo: '' });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    let tempErrors = {};
    if (!newRecipe.name) tempErrors.name = "Name is required";
    if (!newRecipe.photo) tempErrors.photo = "Photo URL is required";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setIsLoading(true);
      setError(null);
      axios.post('/api/recipe/create', newRecipe)
        .then(() => {
          onAdd();
          onClose();
        })
        .catch(error => {
          setError('Error adding recipe: ' + error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={newRecipe.name} 
              onChange={handleInputChange} 
              isInvalid={!!errors.name}
            />
            <Form.Control.Feedback type="invalid">{errors.name}</Form.Control.Feedback>
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control 
              type="text" 
              name="photo" 
              value={newRecipe.photo} 
              onChange={handleInputChange} 
              isInvalid={!!errors.photo}
            />
            <Form.Control.Feedback type="invalid">{errors.photo}</Form.Control.Feedback>
          </Form.Group>
          <Button variant="primary" type="submit" disabled={isLoading}>
            {isLoading ? 'Adding...' : 'Add Recipe'}
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddRecipeModal;