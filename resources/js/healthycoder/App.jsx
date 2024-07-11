// import React from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './Navigation';
// import Home from './Home';
// import User from './Users';  // Note: importing 'User' from 'Users.jsx'
// import Activities from './Activities';
// import Recipes from './Recipes';
// import Ingredients from './Ingredients';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navigation />
//         <div className="container mt-4">
//           <Routes>
//             <Route path="/" element={<Home />} />
//             <Route path="/users" element={<User />} />  // Using 'User' component
//             <Route path="/activities" element={<Activities />} />
//             <Route path="/recipes" element={<Recipes />} />
//             <Route path="/ingredients" element={<Ingredients />} />
//           </Routes>
//         </div>
//       </div>
//     </Router>
//   );
// };

// export default App;

import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import Sidebar from './components/Sidebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import User from './pages/Users';
import Activities from './pages/Activities';
import Recipes from './pages/Recipes';
import Ingredients from './pages/Ingredients';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

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
              <Route path="/ingredients" element={<Ingredients />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;