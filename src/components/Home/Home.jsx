// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// function Home() {
//   return (
//     <div className="home">
//       {/* Hero Section */}
//       <header className="hero">
//         <div className="hero-content">
//           <h1>Welcome to Recipe Finder</h1>
//           <p>Your gateway to delicious and healthy recipes!</p>
//           <Link to="/finder">
//             <button className="cta-button">Start Your Culinary Journey</button>
//           </Link>
//         </div>
//         <img
//           src="https://via.placeholder.com/800x400"
//           alt="Delicious Food"
//           className="hero-image"
//         />
//       </header>

//       {/* Popular Diets Section */}
//       <section className="info-section">
//         <h2>Explore Popular Diets</h2>
//         <div className="diet-cards">
//           <div className="diet-card">
//             <img src="https://via.placeholder.com/150" alt="Keto Diet" />
//             <h3>Keto</h3>
//             <p>Low-carb, high-fat diet for energy and weight management.</p>
//           </div>
//           <div className="diet-card">
//             <img src="https://via.placeholder.com/150" alt="Vegan Diet" />
//             <h3>Vegan</h3>
//             <p>Plant-based eating for health and sustainability.</p>
//           </div>
//           <div className="diet-card">
//             <img src="https://via.placeholder.com/150" alt="Mediterranean Diet" />
//             <h3>Mediterranean</h3>
//             <p>A balanced diet inspired by Mediterranean traditions.</p>
//           </div>
//         </div>
//       </section>

//       {/* Featured Articles Section */}
//       <section className="articles-section">
//         <h2>Featured Articles</h2>
//         <div className="articles">
//           <div className="article-card">
//             <img src="https://via.placeholder.com/200" alt="Healthy Eating" />
//             <h3>5 Tips for Healthy Eating</h3>
//             <p>
//               Discover how to balance nutrients and create a healthier diet.
//             </p>
//           </div>
//           <div className="article-card">
//             <img src="https://via.placeholder.com/200" alt="Quick Recipes" />
//             <h3>Quick 15-Minute Recipes</h3>
//             <p>
//               Learn how to whip up delicious meals in just 15 minutes!
//             </p>
//           </div>
//           <div className="article-card">
//             <img src="https://via.placeholder.com/200" alt="Meal Prepping" />
//             <h3>Meal Prepping for Beginners</h3>
//             <p>
//               Save time and eat better with these meal prepping tips.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Cooking Advice Section */}
//       <section className="advice-section">
//         <h2>Cooking Advice</h2>
//         <ul>
//           <li>Always taste as you cook for better flavor balance.</li>
//           <li>Use fresh herbs to enhance your dishes.</li>
//           <li>Prep ingredients before starting to cook for better workflow.</li>
//         </ul>
//       </section>

//       {/* Call-to-Action Section */}
//       <section className="cta-section">
//         <h2>Ready to Find Your Next Recipe?</h2>
//         <Link to="/finder">
//           <button className="cta-button">Explore Now</button>
//         </Link>
//       </section>
//     </div>
//   );
// }

// export default Home;


// import React from "react";
// import { Link } from "react-router-dom";
// import "./Home.css";

// const Home = () => {
//     return (
//         <div className="home-container">
//             {/* Main Banner */}

//             <div className="main-banner">

//                 <div className="banner-text">
//                     <h1>Welcome to Healthy Body Hub</h1>
//                     <p>Discover healthy recipes and fitness routines to transform your life!</p>
//                     <div className="action-btns">
//                         <button><Link to="/fitness" className="cta-button">Fitness</Link> </button>
//                         <button> <Link to="/finder" className="cta-button">Food</Link></button>
//                     </div>
//                 </div>

//                 <img className="banner-image" src="https://www.shutterstock.com/shutterstock/photos/2468950243/display_1500/stock-photo-pepper-pak-choi-onion-rucola-tomato-cucumber-isolated-on-white-background-healthy-eating-and-2468950243.jpg" alt="main-img" />


//             </div>


//             <section className="body-health-section">
//                 <div className="section-content">
//                     <h2>Why Body Health Matters</h2>
//                     <p>Our body is the foundation of everything we do. A healthy body means better energy, improved mood, and a longer, more active life.</p>
//                     <div className="health-icons">
//                         <div className="icon">
//                             <img src="path-to-heart-icon.png" alt="Heart Health" />
//                             <p>Cardiovascular Health</p>
//                         </div>
//                         <div className="icon">
//                             <img src="path-to-brain-icon.png" alt="Brain Health" />
//                             <p>Mental Clarity</p>
//                         </div>
//                         <div className="icon">
//                             <img src="path-to-muscle-icon.png" alt="Muscle Health" />
//                             <p>Strength & Endurance</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="healthy-diet-section">
//                 <div className="section-content">
//                     <h2>Fuel Your Body: The Power of Nutrition</h2>
//                     <p>What you eat directly impacts your health and fitness. A balanced diet provides the energy needed to stay active and achieve your goals.</p>
//                     <div className="food-images">
//                         <div className="image">
//                             <img src="path-to-healthy-food1.jpg" alt="Healthy Food" />
//                             <p>Vegetables & Fruits</p>
//                         </div>
//                         <div className="image">
//                             <img src="path-to-healthy-food2.jpg" alt="Healthy Food" />
//                             <p>Proteins & Grains</p>
//                         </div>
//                         <div className="image">
//                             <img src="path-to-healthy-food3.jpg" alt="Healthy Food" />
//                             <p>Healthy Fats</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>


//             <section className="exercise-section">
//                 <div className="section-content">
//                     <h2>Move Your Body: The Key to Fitness</h2>
//                     <p>Exercise is essential for building strength, improving cardiovascular health, and boosting mood. Find the workout routine that fits your lifestyle.</p>
//                     <div className="exercise-categories">
//                         <div className="category">
//                             <h3>Strength Training</h3>
//                             <p>Build muscle and improve endurance.</p>
//                         </div>
//                         <div className="category">
//                             <h3>Cardio</h3>
//                             <p>Boost your heart health and energy levels.</p>
//                         </div>
//                         <div className="category">
//                             <h3>Yoga & Stretching</h3>
//                             <p>Improve flexibility and reduce stress.</p>
//                         </div>
//                     </div>
//                 </div>
//             </section>
//             <section className="cta-section">
//                 <div className="cta-content">
//                     <h2>Ready to Transform Your Body?</h2>
//                     <p>Join now and get access to personalized fitness routines and meal plans to kickstart your health journey.</p>
//                     <button><Link to="/signup" className="cta-button">Get Started</Link></button>
//                 </div>
//             </section>


//             {/* Featured Sections */}
//             <div className="featured-sections">
//                 {/* Popular Diets */}
//                 <section class="popular-diets-section">
//                     <h2>Most Popular Diets</h2>
//                     <p>Explore the top diets that are loved by people worldwide. Find one that fits your lifestyle and start your healthy journey!</p>

//                     <div class="scroll-buttons">
//                         <button class="scroll-btn left-btn">←</button>
//                         <button class="scroll-btn right-btn">→</button>
//                     </div>

//                     <div class="diet-cards">
//                         <div class="diet-card">
//                             <img src="path-to-diet-image1.jpg" alt="Keto Diet" />
//                             <h3>Keto Diet</h3>
//                             <p>A low-carb, high-fat diet to promote fat burning and ketosis.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image2.jpg" alt="Mediterranean Diet" />
//                             <h3>Mediterranean Diet</h3>
//                             <p>A plant-based diet rich in healthy fats, vegetables, and lean proteins.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image3.jpg" alt="Vegan Diet" />
//                             <h3>Vegan Diet</h3>
//                             <p>A plant-based diet focusing on whole, unprocessed foods.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image4.jpg" alt="Paleo Diet" />
//                             <h3>Paleo Diet</h3>
//                             <p>A diet that emphasizes eating like our ancestors, with whole foods and no processed sugars.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image5.jpg" alt="Intermittent Fasting" />
//                             <h3>Intermittent Fasting</h3>
//                             <p>A diet pattern that cycles between periods of eating and fasting.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image6.jpg" alt="Whole30 Diet" />
//                             <h3>Whole30 Diet</h3>
//                             <p>A 30-day elimination diet that removes sugar, grains, and processed foods.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                         <div class="diet-card">
//                             <img src="path-to-diet-image7.jpg" alt="DASH Diet" />
//                             <h3>DASH Diet</h3>
//                             <p>A diet designed to fight high blood pressure, rich in fruits, vegetables, and low-fat dairy.</p>
//                             <button class="cta-button">Learn More</button>
//                         </div>
//                     </div>
//                 </section>


//                 {/* Healthy Ingredients */}
//                 <section className="healthy-ingredients">
//                     <h2>Healthy Ingredients</h2>
//                     <div className="ingredients-grid">
//                         <div className="ingredient-item">
//                             <img
//                                 src="https://images.unsplash.com/photo-1567306226416-28f0efdc88ce?crop=entropy&cs=tinysrgb&w=400&fit=max"
//                                 alt="Avocado"
//                             />
//                             <h3>Avocado</h3>
//                             <p>Rich in healthy fats and great for your skin and heart.</p>
//                         </div>
//                         <div className="ingredient-item">
//                             <img
//                                 src="https://images.unsplash.com/photo-1514996937319-344454492b37?crop=entropy&cs=tinysrgb&w=400&fit=max"
//                                 alt="Quinoa"
//                             />
//                             <h3>Quinoa</h3>
//                             <p>A complete protein packed with essential nutrients.</p>
//                         </div>
//                     </div>
//                 </section>

//                 {/* Fitness Tips */}
//                 <section className="fitness-tips">
//                     <h2>Fitness Tips</h2>
//                     <ul>
//                         <li>Start with 10 minutes of stretching every morning.</li>
//                         <li>Incorporate strength training at least twice a week.</li>
//                         <li>Stay hydrated before, during, and after workouts.</li>
//                     </ul>
//                 </section>
//             </div>

//             {/* Navigation */}
//             <div className="navigation-section">
//                 <Link to="/recipes" className="nav-link">Explore Recipes</Link>
//                 <Link to="/fitness" className="nav-link">Fitness Tracker</Link>
//                 <Link to="/blog" className="nav-link">Health Blog</Link>
//             </div>
//         </div>
//     );
// };

// export default Home;

import React, { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

const Home = () => {
 
    const scrollContainerRef = useRef();

    useEffect(() => {
      const container = scrollContainerRef.current;
      if (container) {
        // Clone the content for infinite scroll effect
        const cards = container.innerHTML;
        container.innerHTML += cards; // Duplicate the content
      }
    }, []);
  
    // const scrollLeft = () => {
    //   const container = scrollContainerRef.current;
    //   if (container.scrollLeft === 0) {
    //     // Seamlessly reset to the second half
    //     container.scrollLeft = container.scrollWidth / 2;
    //   }
    //   container.scrollBy({ left: -300, behavior: "smooth" });
    // };
  
    // const scrollRight = () => {
    //   const container = scrollContainerRef.current;
    //   if (container.scrollLeft + container.offsetWidth >= container.scrollWidth) {
    //     // Seamlessly reset to the first half
    //     container.scrollLeft = container.scrollWidth / 2;
    //   }
    //   container.scrollBy({ left: 300, behavior: "smooth" });
    // };
  

  return (
    <div className="home-container">
      {/* Main Banner */}
      <div className="main-banner">
        <div className="banner-text">
          <h1>Welcome to Healthy Body Hub</h1>
          <p>Discover healthy recipes and fitness routines to transform your life!</p>
          <div className="action-btns">
            <button>
              <Link to="/fitness" className="cta-button">
                Fitness
              </Link>
            </button>
            <button>
              <Link to="/finder" className="cta-button">
                Food
              </Link>
            </button>
          </div>
        </div>
        <img
          className="banner-image"
          src="https://www.shutterstock.com/shutterstock/photos/2468950243/display_1500/stock-photo-pepper-pak-choi-onion-rucola-tomato-cucumber-isolated-on-white-background-healthy-eating-and-2468950243.jpg"
          alt="main-img"
        />
      </div>

      {/* Body Health Section */}
      <section className="body-health-section">
        <div className="section-content">
          <h2>Why Body Health Matters</h2>
          <p>Our body is the foundation of everything we do. A healthy body means better energy, improved mood, and a longer, more active life.</p>
          <div className="health-icons">
            <div className="icon">
              <img src="https://www.shutterstock.com/shutterstock/photos/2179613885/display_1500/stock-photo-healthy-green-salad-with-avocado-feta-cheese-and-fresh-vegetables-isolated-on-white-2179613885.jpg" alt="Heart Health" />
              <p>Cardiovascular Health</p>
            </div>
            <div className="icon">
              <img src="https://www.shutterstock.com/shutterstock/photos/2179613885/display_1500/stock-photo-healthy-green-salad-with-avocado-feta-cheese-and-fresh-vegetables-isolated-on-white-2179613885.jpg" alt="Brain Health" />
              <p>Mental Clarity</p>
            </div>
            <div className="icon">
              <img src="https://www.shutterstock.com/shutterstock/photos/2179613885/display_1500/stock-photo-healthy-green-salad-with-avocado-feta-cheese-and-fresh-vegetables-isolated-on-white-2179613885.jpg" alt="Muscle Health" />
              <p>Strength & Endurance</p>
            </div>
          </div>
        </div>
      </section>

      {/* Healthy Diet Section */}
      <section className="healthy-diet-section">
        <div className="section-content">
          <h2>Fuel Your Body: The Power of Nutrition</h2>
          <p>What you eat directly impacts your health and fitness. A balanced diet provides the energy needed to stay active and achieve your goals.</p>
          <div className="food-images">
            <div className="image">
              <img src="path-to-healthy-food1.jpg" alt="Healthy Food" />
              <p>Vegetables & Fruits</p>
            </div>
            <div className="image">
              <img src="path-to-healthy-food2.jpg" alt="Healthy Food" />
              <p>Proteins & Grains</p>
            </div>
            <div className="image">
              <img src="path-to-healthy-food3.jpg" alt="Healthy Food" />
              <p>Healthy Fats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Exercise Section */}
      <section className="exercise-section">
        <div className="section-content">
          <h2>Move Your Body: The Key to Fitness</h2>
          <p>Exercise is essential for building strength, improving cardiovascular health, and boosting mood. Find the workout routine that fits your lifestyle.</p>
          <div className="exercise-categories">
            <div className="category">
              <h3>Strength Training</h3>
              <p>Build muscle and improve endurance.</p>
            </div>
            <div className="category">
              <h3>Cardio</h3>
              <p>Boost your heart health and energy levels.</p>
            </div>
            <div className="category">
              <h3>Yoga & Stretching</h3>
              <p>Improve flexibility and reduce stress.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Diets Section */}
      <div className="featured-sections">
        <section className="popular-diets-section">
          <h2>Most Popular Diets</h2>
          <p>
            Explore the top diets that are loved by people worldwide. Find one that fits your lifestyle and start your healthy journey!
          </p>

          {/* Scroll Buttons */}
          {/* <div className="scroll-buttons">
            <button className="scroll-btn left-btn" onClick={scrollLeft}>
              ←
            </button>
            <button className="scroll-btn right-btn" onClick={scrollRight}>
              →
            </button>
          </div> */}

          {/* Diet Cards Container */}
          <div className="diet-cards-container" >
            <div className="diet-cards" ref={scrollContainerRef}>
              {/* Individual Diet Cards */}
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Keto Diet" />
                <h3>Keto Diet</h3>
                <p>A low-carb, high-fat diet to promote fat burning and ketosis.</p>
                <button className="cta-button">Learn More</button>
              </div>
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Mediterranean Diet" />
                <h3>Mediterranean Diet</h3>
                <p>A plant-based diet rich in healthy fats, vegetables, and lean proteins.</p>
                <button className="cta-button">Learn More</button>
              </div>
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Vegan Diet" />
                <h3>Vegan Diet</h3>
                <p>A plant-based diet focusing on whole, unprocessed foods.</p>
                <button className="cta-button">Learn More</button>
              </div>
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Paleo Diet" />
                <h3>Paleo Diet</h3>
                <p>A diet that emphasizes eating like our ancestors, with whole foods and no processed sugars.</p>
                <button className="cta-button">Learn More</button>
              </div>
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Intermittent Fasting" />
                <h3>Intermittent Fasting</h3>
                <p>A diet pattern that cycles between periods of eating and fasting.</p>
                <button className="cta-button">Learn More</button>
              </div>
              <div className="diet-card">
                <img src="https://www.shutterstock.com/shutterstock/photos/2160690081/display_1500/stock-photo-grilled-salmon-fish-fillet-and-fresh-vegetable-salad-with-tomato-red-onion-black-olives-and-2160690081.jpg" alt="Whole30 Diet" />
                <h3>Whole30 Diet</h3>
                <p>A 30-day elimination diet that removes sugar, grains, and processed foods.</p>
                <button className="cta-button">Learn More</button>
              </div>
              
            </div>
          </div>
        </section>
      </div>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="cta-content">
          <h2>Ready to Transform Your Body?</h2>
          <p>Join now and get access to personalized fitness routines and meal plans to kickstart your health journey.</p>
          <button>
            <Link to="/signup" className="cta-button">
              Get Started
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
