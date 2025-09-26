// Import required React and Bootstrap components
import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container } from "react-bootstrap";

function MyNavbar() {
  // useState hook to manage modal visibility (true = show, false = hide)
  const [show, setShow] = useState(false);

  // Close modal
  const handleClose = () => setShow(false);
  // Open modal
  const handleShow = () => setShow(true);

  return (
    <>
      {/* Bootstrap Navbar fixed to the top with dark theme */}
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        fixed="top"
        className="custom-navbar"
      >
        <Container>
          {/* Brand/Logo linking back to Hero section */}
          <Navbar.Brand href="#hero" className="fw-bold fs-4 brand-name">
            Ekjot Kaur
          </Navbar.Brand>

          {/* Hamburger menu toggle for smaller screens */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          {/* Navbar collapsible content */}
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              {/* Navigation links with custom styling */}
              <Nav.Link href="#hero" className="nav-link-custom">
                Hero Section
              </Nav.Link>
              <Nav.Link href="#three-col" className="nav-link-custom">
                Three-Column Section
              </Nav.Link>

              {/* Button that opens copyright modal */}
              <Button className="copyright-btn ms-3" onClick={handleShow}>
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal popup for copyright info */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>© 2025 Ekjot Kaur. All rights reserved.</Modal.Body>
        <Modal.Footer>
          {/* Close button to hide modal */}
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

// Export Navbar component so it can be imported in App.js
export default MyNavbar;
