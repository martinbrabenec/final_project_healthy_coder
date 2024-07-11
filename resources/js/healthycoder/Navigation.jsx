import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">Healthy Coder App</Link>
        <div className="navbar-nav">
          <Link className="nav-link" to="/users">Users</Link>
          <Link className="nav-link" to="/activities">Activities</Link>
          <Link className="nav-link" to="/recipes">Recipes</Link>
          <Link className="nav-link" to="/ingredients">Ingredients</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;