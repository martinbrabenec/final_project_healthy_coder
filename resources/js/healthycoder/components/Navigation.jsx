import React from 'react';
import { Link } from 'react-router-dom';
import '../../../css/navigation.scss';
import SearchBar from './Searchbar';

const Navigation = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container-fluid">
      <div className="navbar-header">
        <Link className="navbar-brand" to="/">Healthy Coder App</Link>
      </div>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto"> {/* Use ml-auto to align the items to the right */}
          <li className="nav-item">
            <Link className="nav-link" to="/users">Users</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/activities">Activities</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/recipes">Recipes</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/ingredients">Ingredients</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/login">Login</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/register">Register</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/alternatives">Alternatives</Link>
          </li>
        </ul>
        <SearchBar />
      </div>
    </div>
  </nav>
);

export default Navigation;
