// src/components/Ingredients.jsx
import React from 'react';
import { useLocation } from 'react-router-dom';

const Ingredients = () => {
  const location = useLocation();
  const { item } = location.state || {};

  if (!item) {
    return <div>No item selected.</div>;
  }

  const imageUrl = `/assets/${item.image ? 'activities' : item.link_to_photo ? 'alternative_activities' : 'food images'}/${item.image || item.link_to_photo || item.photo}`;

  return (
    <div className="container">
      <h2 className="my-4">{item.name || item.alternative_activity || item.name}</h2>
      <div className="row">
        <div className="col-md-6">
          <img src={imageUrl} alt={item.name || item.alternative_activity || item.name} className="img-fluid" />
        </div>
        <div className="col-md-6">
          <h3>Details</h3>
          {item.description && <p>{item.description}</p>}
          {item.is_vegetarian !== undefined && (
            <p>{item.is_vegetarian ? 'Vegetarian' : 'Non-Vegetarian'}</p>
          )}
          {item.external_info && (
            <a href={item.external_info} target="_blank" rel="noopener noreferrer">Learn more</a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Ingredients;
