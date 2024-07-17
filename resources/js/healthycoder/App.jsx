import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './pages/Home';
import Users from './pages/Users';
import Activities from './pages/Activities';
import Recipes from './pages/Recipes';
import Login from './pages/Login';
import Register from './pages/Register';
import Alternatives from './pages/Alternatives';
import Footer from './components/Footer';
import '../../css/app.scss';

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <Navigation />
        <div className="flex-grow-1 d-flex flex-column">
          <main className="flex-grow-1 p-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/users" element={<Users />} />
              <Route path="/activities" element={<Activities />} />
              <Route path="/recipes" element={<Recipes />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/alternatives" element={<Alternatives />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
