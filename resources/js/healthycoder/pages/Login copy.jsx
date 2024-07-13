import React, { useState } from 'react';
import axios from 'axios';

const Ingredients = () => {
  const [name, setName] = useState('');
  const [photo, setPhoto] = useState('');
  const [isVegetarian, setIsVegetarian] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      name,
      photo,
      is_vegetarian: isVegetarian // Send as boolean
    };

    try {
      const res = await axios.post('/api/recipes/create', data, {
        headers: {
          'Content-Type': 'application/json',
          'X-CSRF-TOKEN': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
        }
      });
      setResponse(res.data);
      setError(null);
      // Clear form after successful submission
      setName('');
      setPhoto('');
      setIsVegetarian(false);
    } catch (error) {
      if (error.response) {
        setError(error.response.data.errors);
        console.error('Validation error:', error.response.data.errors);
      } else {
        console.error(error);
      }
    }
  };

  return (
    <div className="container">
      <h1>Create a New Recipe</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            className="form-control"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Photo URL</label>
          <input
            type="text"
            className="form-control"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            checked={isVegetarian}
            onChange={(e) => setIsVegetarian(e.target.checked)}
            id="isVegetarian"
          />
          <label className="form-check-label" htmlFor="isVegetarian">Is Vegetarian</label>
        </div>
        <button type="submit" className="btn btn-primary">Submit</button>
      </form>

      {response && (
        <div className="mt-3">
          <h2>Response:</h2>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}

      {error && (
        <div className="mt-3 alert alert-danger">
          <h2>Error:</h2>
          <ul>
            {Object.entries(error).map(([key, messages]) => (
              messages.map((message, index) => (
                <li key={`${key}-${index}`}>{message}</li>
              ))
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Ingredients;