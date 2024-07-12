// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navigation from './components/Navigation';
// import Sidebar from './components/Sidebar';
// import Footer from './components/Footer';
// import Home from './pages/Home';
// import User from './pages/Users';
// import Activities from './pages/Activities';
// import Recipes from './pages/Recipes';
// import Ingredients from './pages/Ingredients';
// import Login from './pages/Login';
// import Register from './pages/Register';
// import RecipeList from './components/RecipeList';
// import RecipeDetail from './components/RecipeDetail';

// const App = () => {
//   const [sidebarVisible, setSidebarVisible] = useState(true);

//   return (
//     <Router>
//       <div className="d-flex flex-column min-vh-100">
//         <Navigation />
//         <div className="flex-grow-1 d-flex">
//           <Sidebar visible={sidebarVisible} setVisible={setSidebarVisible} />
//           <main className={`flex-grow-1 p-3 ${sidebarVisible ? 'main-with-sidebar' : ''}`}>
//             <Routes>
//               <Route path="/" element={<Home />} />
//               <Route path="/users" element={<User />} />
//               <Route path="/activities" element={<Activities />} />
//               <Route path="/recipes" element={<Recipes />}>
//                 <Route index element={<RecipeList />} />
//                 <Route path=":id" element={<RecipeDetail />} />
//               </Route>
//               <Route path="/ingredients" element={<Ingredients />} />
//               <Route path="/login" element={<Login />} />
//               <Route path="/register" element={<Register />} />
//             </Routes>
//           </main>
//         </div>
//         <Footer />
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
import RecipeDetail from './components/RecipeDetail';
import Ingredients from './pages/Ingredients';
import Login from './pages/Login';
import Register from './pages/Register';

const App = () => {
  const [sidebarVisible, setSidebarVisible] = useState(true);

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
              <Route path="/recipes" element={<Recipes />}>
                <Route path=":id" element={<RecipeDetail />} />
              </Route>
              <Route path="/ingredients" element={<Ingredients />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;