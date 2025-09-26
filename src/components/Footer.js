import React from "react";
import { Container } from "react-bootstrap";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import "./Footer.css"; // custom styles

function Footer() {
  return (
    <footer className="footer">
      <Container className="text-center">
        <div className="social-icons">
          <a
            href="https://github.com/ekjotkaursault/test2-bootstrap-react"
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/ekjotkaur-tech"
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin />
          </a>

          <a
            href="mailto:Ekjot.kaur@triosstudent.com"
            title="Email Me"
          >
            <FaEnvelope />
          </a>
        </div>
        <p>© {new Date().getFullYear()} Ekjot Kaur. All rights reserved.</p>
      </Container>
    </footer>
  );
}

export default Footer;
