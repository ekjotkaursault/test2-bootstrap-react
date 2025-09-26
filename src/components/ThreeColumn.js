import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaJava, FaLaptopCode, FaDatabase } from "react-icons/fa";
import "./ThreeColumn.css";

function ThreeColumn() {
  return (
    <section className="skills-section" id="three-col"> {/* 🔑 matches Navbar */}
      <Container>
        <h2 className="skills-title">💡 My Skills</h2>
        <Row>
          <Col md={4}>
            <div className="skill-card">
              <FaJava className="skill-icon java" />
              <h3>Java Development</h3>
              <p>Building applications with OOP, inheritance, and testing.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <FaLaptopCode className="skill-icon web" />
              <h3>Web Development</h3>
              <p>Creating responsive websites using React, Bootstrap, and JavaScript.</p>
            </div>
          </Col>
          <Col md={4}>
            <div className="skill-card">
              <FaDatabase className="skill-icon db" />
              <h3>Database Management</h3>
              <p>Designing and managing SQL/NoSQL databases with efficiency.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default ThreeColumn;
