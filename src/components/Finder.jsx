// import React, { useState } from "react";
// import "./Finder.css";

// function Finder() {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filter, setFilter] = useState("");
//   const [mealType, setMealType] = useState("lunch");
//   const [calorieRange, setCalorieRange] = useState([0, 1000]);
//   const [recipes, setRecipes] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [cart, setCart] = useState([]);

//   const popularIngredients = [
//     "potato",
//     "mushroom",
//     "carrot",
//     "chicken",
//     "beef",
//     "tomato",
//     "spinach",
//     "garlic",
//     "onion",
//   ];

//   const fetchRecipes = async () => {
//     try {
//       setIsLoading(true);
//       const response = await fetch(
//         `https://api.spoonacular.com/recipes/complexSearch?query=${searchTerm}&includeIngredients=${filter}&mealType=${mealType}&minCalories=${calorieRange[0]}&maxCalories=${calorieRange[1]}&apiKey=8dfc2711fdad4318b9518e0613893c0c`
//       );
//       const data = await response.json();
//       setRecipes(data.results || []);
//     } catch (error) {
//       console.error("Error fetching recipes:", error);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchRecipes();
//   };

//   const handleCheckboxChange = (ingredient) => {
//     setFilter((prev) =>
//       prev.includes(ingredient)
//         ? prev.replace(ingredient, "")
//         : `${prev}${ingredient},`
//     );
//   };

//   const handleAddToCart = (recipe) => {
//     setCart((prevCart) => [...prevCart, recipe]);
//   };

//   const handleCalorieRangeChange = (e) => {
//     const { name, value } = e.target;
//     setCalorieRange((prevRange) =>
//       name === "minCalories"
//         ? [value, prevRange[1]]
//         : [prevRange[0], value]
//     );
//   };

//   return (
//     <div className="finder">
//       <h1>Find Your Perfect Recipe</h1>

//       {/* Search and Filter Section */}
//       <form onSubmit={handleSearch} className="search-form">
//         <input
//           type="text"
//           placeholder="Search for recipes..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//         <div>
//           <h3>Select Meal Type:</h3>
//           <select
//             value={mealType}
//             onChange={(e) => setMealType(e.target.value)}
//           >
//             <option value="breakfast">Breakfast</option>
//             <option value="lunch">Lunch</option>
//             <option value="dinner">Dinner</option>
//             <option value="snack">Snack</option>
//           </select>
//         </div>
//         <div>
//           <h3>Select Calorie Range:</h3>
//           <input
//             type="number"
//             name="minCalories"
//             value={calorieRange[0]}
//             onChange={handleCalorieRangeChange}
//             placeholder="Min Calories"
//           />
//           <input
//             type="number"
//             name="maxCalories"
//             value={calorieRange[1]}
//             onChange={handleCalorieRangeChange}
//             placeholder="Max Calories"
//           />
//         </div>

//         {/* Popular Ingredients Checkboxes */}
//         <div className="ingredients-checkboxes">
//           <h3>Select Ingredients:</h3>
//           {popularIngredients.map((ingredient) => (
//             <label key={ingredient}>
//               <input
//                 type="checkbox"
//                 onChange={() => handleCheckboxChange(ingredient)}
//               />
//               {ingredient}
//             </label>
//           ))}
//         </div>

//         <button type="submit">Search</button>
//       </form>

//       {/* Loading Spinner */}
//       {isLoading && <div className="loading-spinner">Loading...</div>}

//       {/* No Recipes Found */}
//       {recipes.length === 0 && !isLoading && (
//         <div className="no-recipes">
//           <img
//             src="https://via.placeholder.com/300"
//             alt="Nothing Found"
//             className="no-recipes-img"
//           />
//           <p>No recipes found. Try adjusting your filters.</p>
//         </div>
//       )}

//       {/* Recipes Section */}
//       <div className="recipes">
//         {recipes.map((recipe) => (
//           <div className="recipe-card" key={recipe.id}>
//             <img
//               src={recipe.image || "https://via.placeholder.com/150"}
//               alt={recipe.title}
//             />
//             <h3>{recipe.title}</h3>
//             <button onClick={() => handleAddToCart(recipe)}>Add to Cart</button>
//             {/* Optional: Add a link to recipe details page */}
//           </div>
//         ))}
//       </div>

//       {/* Cart Section */}
//       {cart.length > 0 && (
//         <div className="cart">
//           <h3>Your Cart</h3>
//           {cart.map((item, index) => (
//             <p key={index}>{item.title}</p>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// }

// export default Finder;

// 

import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Finder.css";

const Finder = () => {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [mealType, setMealType] = useState("");
  const [diet, setDiet] = useState("");
  const [caloriesRange, setCaloriesRange] = useState([0, 500]);
  const [selectedIngredients, setSelectedIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const popularIngredients = ["Chicken", "Tomato", "Cheese", "Egg", "Onion"];
  const popularDiets = ["Keto", "Vegetarian", "Vegan", "Gluten Free", "Paleo"];

  const fetchRecipes = async () => {
    try {
      setIsLoading(true);
      setError("");

      // Combine manually entered and checkbox-selected ingredients
      const selectedIngredientsString = selectedIngredients.join(",");
      const finalIngredients = [ingredients, selectedIngredientsString]
        .filter(Boolean)
        .join(",");

      // Construct API request with all filter criteria
      const response = await fetch(
        `https://api.spoonacular.com/recipes/complexSearch?query=${search}&ingredients=${finalIngredients}&type=${mealType}&diet=${diet}&minCalories=${caloriesRange[0]}&maxCalories=${caloriesRange[1]}&apiKey=e5bf91de95104e89ab8d6b5cb017dee4`
      );
      const data = await response.json();

      // Filter results to match ALL criteria
      const filteredRecipes = (data.results || []).filter((recipe) => {
        const recipeCalories = recipe.nutrition?.nutrients?.find(
          (n) => n.name === "Calories"
        )?.amount;

        const matchesCalories =
          !recipeCalories ||
          (recipeCalories >= caloriesRange[0] &&
            recipeCalories <= caloriesRange[1]);

        const matchesIngredients =
          selectedIngredients.every((ing) =>
            recipe.ingredients?.some((ri) =>
              ri.toLowerCase().includes(ing.toLowerCase())
            )
          );

        return matchesCalories && matchesIngredients;
      });

      setRecipes(filteredRecipes);
    } catch (err) {
      setError("Failed to fetch recipes. Please try again.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchRecipes();
  };

  const handleIngredientChange = (ingredient) => {
    setSelectedIngredients((prev) =>
      prev.includes(ingredient)
        ? prev.filter((ing) => ing !== ingredient)
        : [...prev, ingredient]
    );
  };

  return (
    <div className="finder-container">
      <h2>Find Your Perfect Recipe</h2>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          placeholder="Search for a recipe"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Ingredients (comma separated)"
          value={ingredients}
          onChange={(e) => setIngredients(e.target.value)}
        />
        <div className="popular-ingredients">
          <p>Popular Ingredients:</p>
          {popularIngredients.map((ingredient) => (
            <label key={ingredient}>
              <input
                type="checkbox"
                value={ingredient}
                checked={selectedIngredients.includes(ingredient)}
                onChange={() => handleIngredientChange(ingredient)}
              />
              {ingredient}
            </label>
          ))}
        </div>
        <select onChange={(e) => setMealType(e.target.value)} value={mealType}>
          <option value="">Select Meal Type</option>
          <option value="breakfast">Breakfast</option>
          <option value="lunch">Lunch</option>
          <option value="dinner">Dinner</option>
        </select>
        <select onChange={(e) => setDiet(e.target.value)} value={diet}>
          <option value="">Select Diet</option>
          {popularDiets.map((dietOption) => (
            <option key={dietOption} value={dietOption.toLowerCase()}>
              {dietOption}
            </option>
          ))}
        </select>
        <div className="calories-range">
          <input
            type="number"
            min="0"
            max="1000"
            value={caloriesRange[0] || ""}
            onChange={(e) =>
              setCaloriesRange([Number(e.target.value) || 0, caloriesRange[1]])
            }
            placeholder="Min"
          />
          <input
            type="number"
            min="0"
            max="1000"
            value={caloriesRange[1] || ""}
            onChange={(e) =>
              setCaloriesRange([caloriesRange[0], Number(e.target.value) || 0])
            }
            placeholder="Max"
          />
          <span>
            Calories: {caloriesRange[0]} - {caloriesRange[1]}
          </span>
        </div>
        <button type="submit">Search</button>
      </form>

      {isLoading && <div className="loading">Loading...</div>}

      {error && <div className="error-message">{error}</div>}

      <div className="recipes-list">
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <div key={recipe.id} className="recipe-card">
              <img src={recipe.image} alt={recipe.title} />
              <h3>{recipe.title}</h3>
              <Link to={`/recipe/${recipe.id}`}>View Recipe</Link>
            </div>
          ))
        ) : (
          !isLoading && (
            <div className="no-results">
              <p>No recipes found. Try another search!</p>
            </div>
          )
        )}
      </div>
    </div>
  );
};

export default Finder;
