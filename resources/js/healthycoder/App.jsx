import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import User from './pages/Users';
import Activities from './pages/Activities';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';
import Alternatives from './pages/Alternatives';
import '../../css/custom.scss'; // Ensure global styles are imported

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(true); // Assuming user is authenticated initially, set based on your auth logic

  const handleLogout = () => {
    setIsAuthenticated(false);
  }

  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="flex-grow-1 d-flex">
          <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
          <main className={`flex-grow-1 p-3 ${sidebarVisible ? 'main-with-sidebar' : ''}`}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<User />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/alternatives" element={<Alternatives />} />
            </Routes>
          </main>
        </div>
        <Footer onLogout={handleLogout} />
      </div>
    </Router>
  );
};

export default App;
