// Import React core
import React from "react";

// Import Bootstrap CSS & JS for styling and functionality
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

// Import custom global styles
import "./App.css";

// Import custom components
import Navbar from "./components/Navbar";       // Top navigation bar
import Hero from "./components/Hero";           // Hero banner section
import ThreeColumn from "./components/ThreeColumn"; // Skills section (3 columns)
import Footer from "./components/Footer";       // Footer with social links

// Main App component (root of the application)
function App() {
  return (
    <div>
      {/* Top navigation bar */}
      <Navbar />

      {/* Hero section with welcome message */}
      <Hero />

      {/* Three-column skills showcase */}
      <ThreeColumn />

      {/* Footer with social icons and copyright */}
      <Footer />
    </div>
  );
}

// Export App so it can be rendered in index.js
export default App;
