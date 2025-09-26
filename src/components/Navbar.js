import React, { useState } from "react";
import { Navbar, Nav, Button, Modal, Container } from "react-bootstrap";

function MyNavbar() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="custom-navbar">
        <Container>
          <Navbar.Brand href="#hero" className="fw-bold fs-4 brand-name">
            Ekjot Kaur
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link href="#hero" className="nav-link-custom">Hero Section</Nav.Link>
              <Nav.Link href="#three-col" className="nav-link-custom">Three-Column Section</Nav.Link>
              <Button className="copyright-btn ms-3" onClick={handleShow}>
                Copyright
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Modal */}
      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Copyright Information</Modal.Title>
        </Modal.Header>
        <Modal.Body>© 2025 Ekjot Kaur. All rights reserved.</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyNavbar;
