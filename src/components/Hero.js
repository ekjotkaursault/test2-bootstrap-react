// Import React library
import React from "react";
// Import background image for the hero section
import circuitTech from "../circuit-tech.jpg"; 

// Functional component for the Hero section
function Hero() {
  return (
    // Hero section with background image applied via inline style
    <section
      id="hero"                     // Anchor ID for navigation
      className="hero-section"      // CSS class for styling (defined in Hero.css or global CSS)
      style={{ backgroundImage: `url(${circuitTech})` }} // Dynamic background image
    >
      {/* Content container inside the hero section */}
      <div className="hero-content">
        {/* Main heading */}
        <h1>Welcome to My Programming Portfolio!</h1>
        
        {/* Subheading / description */}
        <p>Exploring Java, Web Development, and Databases with React & Bootstrap</p>
        
        {/* Call-to-action button that scrolls to the "three-col" section */}
        <a href="#three-col" className="btn btn-primary">
          Explore My Skills
        </a> 
      </div>
    </section>
  );
}

// Export Hero component so it can be used in App.js or elsewhere
export default Hero;
