import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import ThreeColumn from "./components/ThreeColumn";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <ThreeColumn />
      <Footer />
    </div>
  );
}

export default App;
