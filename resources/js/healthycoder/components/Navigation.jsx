import React, { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../../../css/navigation.scss';
import SearchBar from './Searchbar';
import UserContext from '../context/UserContext';

const Navigation = () => {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState(location.pathname);
  const { user } = useContext(UserContext);

  const handleClick = (path) => {
    setActiveLink(path);
  };

  

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Link className="navbar-brand home-link" to="/" onClick={() => handleClick('/')}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            width="24"
            height="24"
          >
            <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
            <path d="M0 0h24v24H0z" fill="none"/>
          </svg>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/users' ? 'active' : ''}`} to="/users" onClick={() => handleClick('/users')}>User Sphere</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/activities' ? 'active' : ''}`} to="/activities" onClick={() => handleClick('/activities')}>Exercise to Energize</Link>
            </li>
            <li className="nav-item">
              <Link className={`nav-link ${activeLink === '/recipes' ? 'active' : ''}`} to="/recipes" onClick={() => handleClick('/recipes')}>Nourish to Flourish</Link>
            </li>
            {
              user ? 
                'Logout'
              :
              <>
                <li className="nav-item">
                  <Link className={`nav-link ${activeLink === '/login' ? 'active' : ''}`} to="/login" onClick={() => handleClick('/login')}>Login</Link>
                </li>
                <li className="nav-item">
                  <Link className={`nav-link ${activeLink === '/register' ? 'active' : ''}`} to="/register" onClick={() => handleClick('/register')}>Register</Link>
                </li>
              </>
            }
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
