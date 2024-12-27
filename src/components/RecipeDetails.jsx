// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";
// import axios from "axios";

// function RecipeDetails() {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);
//   const [isFavorite, setIsFavorite] = useState(false);

//   // Check if the recipe is already in favorites
//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     setIsFavorite(storedFavorites.some((fav) => fav.idMeal === id));
//   }, [id]);

//   useEffect(() => {
//     const fetchRecipeDetails = async () => {
//       try {
//         const res = await axios.get(
//           `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
//         );
//         setRecipe(res.data.meals[0]);
//       } catch (error) {
//         console.error("Error fetching recipe details:", error);
//       }
//     };

//     fetchRecipeDetails();
//   }, [id]);

//   const handleFavoriteToggle = () => {
//     const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
//     if (isFavorite) {
//       // Remove from favorites
//       const updatedFavorites = storedFavorites.filter(
//         (fav) => fav.idMeal !== id
//       );
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setIsFavorite(false);
//     } else {
//       // Add to favorites
//       const newFavorite = {
//         idMeal: recipe.idMeal,
//         strMeal: recipe.strMeal,
//         strMealThumb: recipe.strMealThumb,
//       };
//       const updatedFavorites = [...storedFavorites, newFavorite];
//       localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
//       setIsFavorite(true);
//     }
//   };

//   return (
//     <div className="container">
//       {recipe ? (
//         <div className="recipe-details">
//           <h1>{recipe.strMeal}</h1>
//           <img
//             src={recipe.strMealThumb}
//             alt={recipe.strMeal}
//             className="recipe-img"
//           />
//           <button className="favorite-btn" onClick={handleFavoriteToggle}>
//             {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
//           </button>
//           <h3>Ingredients:</h3>
//           <ul>
//             {Object.keys(recipe)
//               .filter((key) => key.includes("strIngredient") && recipe[key])
//               .map((key) => (
//                 <li key={key}>{recipe[key]}</li>
//               ))}
//           </ul>
//           <h3>Instructions:</h3>
//           <p>{recipe.strInstructions}</p>
//         </div>
//       ) : (
//         <div className="loading-spinner">Loading...</div>
//       )}
//     </div>
//   );
// }

// export default RecipeDetails;

// import React, { useState, useEffect } from "react";
// import { useParams } from "react-router-dom";

// const RecipeDetails = () => {
//   const { id } = useParams();
//   const [recipe, setRecipe] = useState(null);

//   useEffect(() => {
//     const fetchRecipeDetails = async () => {
//       try {
//         const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8dfc2711fdad4318b9518e0613893c0c`);
//         const data = await response.json();
//         setRecipe(data);
//       } catch (error) {
//         console.error(error);
//       }
//     };
    
//     fetchRecipeDetails();
//   }, [id]);

//   if (!recipe) return <p>Loading...</p>;

//   return (
//     <div className="recipe-details-container">
//       <h2>{recipe.title}</h2>
//       <img src={recipe.image} alt={recipe.title} />
//       <p>{recipe.summary}</p>
//       <h3>Ingredients</h3>
//       <ul>
//         {recipe.extendedIngredients.map((ingredient) => (
//           <li key={ingredient.id}>{ingredient.original}</li>
//         ))}
//       </ul>
//       <h3>Instructions</h3>
//       {/* <div dangerouslySetInnerHTML={{ __html: recipe.instructions }}></div> */}
//       <div className="recipe-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />

//     </div>
//   );
// };

// export default RecipeDetails;


import React, { useState, useEffect } from "react"; 
import { useParams } from "react-router-dom";

const RecipeDetails = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRecipeDetails = async () => {
      try {
        const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8dfc2711fdad4318b9518e0613893c0c`);
        if (!response.ok) {
          throw new Error('Failed to fetch recipe details');
        }
        const data = await response.json();
        setRecipe(data);
      } catch (error) {
        setError('There was an error fetching the recipe details.');
      }
    };
    
    fetchRecipeDetails();
  }, [id]);

  if (error) return <p>{error}</p>;

  if (!recipe) return <div className="loading-spinner">Loading...</div>;

  return (
    <div className="recipe-details-container">
      <h2>{recipe.title}</h2>
      <img src={recipe.image} alt={recipe.title} />
      
      <div className="recipe-summary" dangerouslySetInnerHTML={{ __html: recipe.summary }} />

      <h3>Ingredients</h3>
      <ul>
        {recipe.extendedIngredients && recipe.extendedIngredients.length > 0 ? (
          recipe.extendedIngredients.map((ingredient) => (
            <li key={ingredient.id}>{ingredient.original}</li>
          ))
        ) : (
          <li>No ingredients available.</li>
        )}
      </ul>

      <h3>Instructions</h3>
      <div dangerouslySetInnerHTML={{ __html: recipe.instructions || "Instructions not available." }} />
    </div>
  );
};

export default RecipeDetails;
