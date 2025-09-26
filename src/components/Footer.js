// Import React and required libraries/components
import React from "react";
import { Container } from "react-bootstrap"; // Bootstrap container for layout
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa"; // Font Awesome icons
import "./Footer.css"; // Custom footer styles

// Functional component for the footer section
function Footer() {
  return (
    // Semantic HTML <footer> tag with custom "footer" class (styled in Footer.css)
    <footer className="footer">
      {/* Bootstrap container for responsive layout and centered content */}
      <Container className="text-center">
        
        {/* Social icons section */}
        <div className="social-icons">
          {/* GitHub link icon */}
          <a
            href="https://github.com/ekjotkaursault/test2-bootstrap-react" // GitHub profile/project link
            target="_blank" // Opens link in new tab
            rel="noopener noreferrer" // Security: prevents tab hijacking
            title="GitHub" // Tooltip shown on hover
          >
            <FaGithub /> {/* GitHub icon */}
          </a>

          {/* LinkedIn link icon */}
          <a
            href="https://www.linkedin.com/in/ekjotkaur-tech" // LinkedIn profile link
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
          >
            <FaLinkedin /> {/* LinkedIn icon */}
          </a>

          {/* Email link icon */}
          <a
            href="mailto:Ekjot.kaur@triosstudent.com" // Opens default mail client
            title="Email Me"
          >
            <FaEnvelope /> {/* Envelope (Email) icon */}
          </a>
        </div>

        {/* Footer text with dynamic year (auto-updates every year) */}
        <p>© {new Date().getFullYear()} Ekjot Kaur. All rights reserved.</p>
      </Container>
    </footer>
  );
}

// Export Footer component to use in other files
export default Footer;