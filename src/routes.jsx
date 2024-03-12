import { useState } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Button from 'react-bootstrap/Button';

function Root() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="success" expand="lg">
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Brand href="#">Navbar Offcanvas</Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Button variant="primary" onClick={handleShow} className="d-md-none">
            ☰
          </Button>
        </Navbar.Collapse>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="end"
        style={{ backgroundColor: 'green', height: '100vh', width: '20vw', position: 'fixed', top: 0, zIndex: 1000 }}
      >
        <Offcanvas.Header closeButton>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="/my-reservations">My Reservations</Nav.Link>
            {/* Add more Nav.Link items here */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Root;
