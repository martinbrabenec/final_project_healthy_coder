import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../css/navigation.scss';
import SearchBar from './Searchbar';

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto"> {/* Use ml-auto to align the items to the right */}
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/users' ? 'active' : ''}`} to="/users" onClick={() => handleClick('/users')}>User Sphere</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/activities' ? 'active' : ''}`} to="/activities" onClick={() => handleClick('/activities')}>Exercise to Energize</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/recipes' ? 'active' : ''}`} to="/recipes" onClick={() => handleClick('/recipes')}>Nourish to Flourish</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/login' ? 'active' : ''}`} to="/login" onClick={() => handleClick('/login')}>Login</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/register' ? 'active' : ''}`} to="/register" onClick={() => handleClick('/register')}>Register</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/alternatives' ? 'active' : ''}`} to="/alternatives" onClick={() => handleClick('/alternatives')}>Health Mavericks</Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </div>
    </nav>
  );
};

export default Navigation;