// import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";

// function Favorites() {
//   const [favorites, setFavorites] = useState([]);

//   // Load favorites from localStorage when the component mounts
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   // Remove a recipe from favorites
//   const removeFavorite = (id) => {
//     const updatedFavorites = favorites.filter((recipe) => recipe.idMeal !== id);
//     setFavorites(updatedFavorites);
//     localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//   };

//   return (
//     <div className="container">
//       <h1>My Favorite Recipes</h1>
//       {favorites.length === 0 ? (
//         <p>You have no favorite recipes. Start adding some!</p>
//       ) : (
//         <div className="recipe-grid">
//           {favorites.map((recipe) => (
//             <div className="recipe-card" key={recipe.idMeal}>
//               <Link to={`/recipe/${recipe.idMeal}`}>
//                 <img
//                   src={recipe.strMealThumb}
//                   alt={recipe.strMeal}
//                   className="recipe-img"
//                 />
//                 <h3>{recipe.strMeal}</h3>
//               </Link>
//               <button
//                 className="remove-btn"
//                 onClick={() => removeFavorite(recipe.idMeal)}
//               >
//                 Remove from Favorites
//               </button>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Favorites;




