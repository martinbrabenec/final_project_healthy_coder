import React, { useState } from 'react';
import PhotoGrid from '../components/PhotoGrid';
import Sidebar from '../components/Sidebar';

const Home = () => {
  const [selectedZone, setSelectedZone] = useState('');

  return (
    <div className="container-fluid">
      <Sidebar onSelectZone={setSelectedZone} />
      <div className="content">
        <div className="quote-of-the-day">
        </div>
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
    </div>
  );
};

export default Home;
