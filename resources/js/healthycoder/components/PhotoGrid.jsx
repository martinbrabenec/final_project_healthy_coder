import React from 'react';

const PhotoGrid = () => {
  const placeholders = Array(8).fill(null);

  return (
    <div className="row">
      {placeholders.map((_, index) => (
        <div key={index} className="col-md-3 mb-4">
          <div className="photo-placeholder">
            <img src="https://via.placeholder.com/150" alt={`Placeholder ${index + 1}`} className="img-fluid" />
          </div>
        </div>
      ))}
    </div>
  );
};

export default PhotoGrid;