// import React from "react";
// import { Link } from "react-router-dom";

// function Navbar() {
//   return (
//     <nav className="navbar">
//       <div className="navbar-container">
//         <Link to="/" className="navbar-logo">
//           Recipe Finder
//         </Link>
//         <div className="navbar-links">
//           <Link to="/">Home</Link>
//           <Link to="/favorites">Favorites</Link>
//         </div>
//       </div>
//     </nav>
//   );
// }

// export default Navbar;

import React from "react"; 
import { Link } from "react-router-dom"; 
import "./NavBar.css"; 

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo"> 
          Recipe Finder
        </Link>
        <ul className="navbar-links">
            
          <li><Link to="/recipes">Recipe Finder</Link></li>
          <li> <Link to="/fitness">Fitness Tracker</Link></li>
          <li> <Link to="/blog">Blog</Link></li>
        </ul>
        <div className="navbar-cta">
          <Link to="/login" className="cta-button">Log In</Link>
          <Link to="/signup" className="cta-button">Sign Up</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

