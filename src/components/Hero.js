import React from "react";
import circuitTech from "../circuit-tech.jpg"; // adjust path if needed

function Hero() {
  return (
    <section
      id="hero"   // 🔑 now matches Navbar
      className="hero-section"
      style={{ backgroundImage: `url(${circuitTech})` }}
    >
      <div className="hero-content">
        <h1>Welcome to My Programming Portfolio!</h1>
        <p>Exploring Java, Web Development, and Databases with React & Bootstrap</p>
        <a href="#three-col" className="btn btn-primary">Explore My Skills</a> {/* 🔑 scrolls to skills */}
      </div>
    </section>
  );
}

export default Hero;
