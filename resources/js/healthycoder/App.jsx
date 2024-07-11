import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home';
import User from './Users';  // Note: importing 'User' from 'Users.jsx'
import Activities from './Activities';
import Recipes from './Recipes';
import Ingredients from './Ingredients';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<User />} />  // Using 'User' component
            <Route path="/activities" element={<Activities />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/ingredients" element={<Ingredients />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;