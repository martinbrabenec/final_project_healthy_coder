import React from 'react';
import { Link } from 'react-router-dom';
import { FaSearch } from 'react-icons/fa';
import '../../../css/navigation.scss';

const Navigation = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">Healthy Coder App</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/users">Users</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/alternative_activities">I'm feeling lucky</Link>
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
        </div>
      </div>
    </nav>
    <div className="search-container">
      <div className="input-group">
        <input type="text" className="form-control custom-search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-secondary search-button" type="button">
          <FaSearch />
        </button>
      </div>
    </div>
  </>
);

export default Navigation;