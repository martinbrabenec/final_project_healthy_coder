import React from 'react';
import PhotoGrid from '../components/PhotoGrid';

const Home = () => {
  return (
    <div className="container">
      <h1 className="mb-4">Welcome to the Healthy Coder App</h1>
      <div className="row">
        <div className="col-md-6">
          <PhotoGrid />
        </div>
        <div className="col-md-6">
          <PhotoGrid />
        </div>
      </div>
    </div>
  );
};

export default Home;