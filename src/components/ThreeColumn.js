// Import React and required components
import React from "react";
import { Container, Row, Col } from "react-bootstrap"; // Bootstrap layout system
import { FaJava, FaLaptopCode, FaDatabase } from "react-icons/fa"; // Font Awesome icons
import "./ThreeColumn.css"; // Custom CSS for styling

// Functional component for the three-column "Skills" section
function ThreeColumn() {
  return (
    // Section wrapper with ID for navigation and class for styling
    <section className="skills-section" id="three-col">
      <Container>
        {/* Section Title */}
        <h2 className="skills-title">💡 My Skills</h2>

        {/* Bootstrap Row for 3 equal-width columns */}
        <Row>
          {/* ===== First Column: Java Development ===== */}
          <Col md={4}>
            <div className="skill-card">
              {/* Java icon with custom orange color */}
              <FaJava className="skill-icon java" />
              <h3>Java Development</h3>
              <p>Building applications with OOP, inheritance, and testing.</p>
            </div>
          </Col>

          {/* ===== Second Column: Web Development ===== */}
          <Col md={4}>
            <div className="skill-card">
              {/* Laptop code icon with Bootstrap primary blue color */}
              <FaLaptopCode className="skill-icon web" />
              <h3>Web Development</h3>
              <p>
                Creating responsive websites using React, Bootstrap, and
                JavaScript.
              </p>
            </div>
          </Col>

          {/* ===== Third Column: Database Management ===== */}
          <Col md={4}>
            <div className="skill-card">
              {/* Database icon with purple color */}
              <FaDatabase className="skill-icon db" />
              <h3>Database Management</h3>
              <p>
                Designing and managing SQL/NoSQL databases with efficiency.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export component so it can be imported into App.js
export default ThreeColumn;