// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./components/Home";
// import RecipeDetails from "./components/RecipeDetails";
// import Favorites from "./components/Favorites";
// import Navbar from "./components/NavBar";
// import './App.css';
// import Finder from "./components/Finder";
// import { FavoritesProvider } from './components/Favorites'; // Correct named import




// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/recipe/:id" element={<RecipeDetails />} />
//         <Route path="/finder" element={<Finder />} />
//         <Route path="/favorites" element={<Favorites />} />

//       </Routes>
//     </Router>
//   );
// }

// export default App;

// App.js

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import RecipeDetails from "./components/RecipeDetails";
import Navbar from "./components/NavBar";
import './App.css';
import Finder from "./components/Finder";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipeDetails />} />
        <Route path="/finder" element={<Finder />} />
      </Routes>
    </Router>
  );
}

export default App;

