import React, { useState } from 'react';
import axios from 'axios';
import { Modal, Button, Form } from 'react-bootstrap';

const API_BASE_URL = 'http://www.thehealthycoder.test/api';

function AddRecipeModal({ show, onClose, onAdd }) {
  const [newRecipe, setNewRecipe] = useState({ name: '', photo: '' });

  const handleInputChange = (e) => {
    setNewRecipe({ ...newRecipe, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${API_BASE_URL}/recipes`, newRecipe)
      .then(() => {
        onAdd();
        onClose();
      })
      .catch(error => {
        console.error('Error adding new recipe:', error);
      });
  };

  return (
    <Modal show={show} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Add New Recipe</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>Recipe Name</Form.Label>
            <Form.Control 
              type="text" 
              name="name" 
              value={newRecipe.name} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Photo URL</Form.Label>
            <Form.Control 
              type="text" 
              name="photo" 
              value={newRecipe.photo} 
              onChange={handleInputChange} 
              required 
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add Recipe
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default AddRecipeModal;