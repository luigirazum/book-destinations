import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';

function OffcanvasLayout({ children }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Navbar bg="success" expand="lg">
        <div style={{ position: 'absolute', left: '0', marginLeft: '8px', zIndex: '1001' }}>
          <FontAwesomeIcon
            icon={show ? faArrowLeft : faArrowRight}
            style={{ color: 'black', cursor: 'pointer', backgroundColor: 'yellow', padding: '8px', borderRadius: show ? '0 8px 8px 0' : '8px 0 0 8px' }}
            onClick={show ? handleClose : handleShow}
          />
        </div>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ backgroundColor: 'yellow', height: '100vh', width: '200px', position: 'fixed', top: 0, zIndex: 1000, marginLeft: show ? '0' : '-200px', transition: 'margin-left 0.3s ease-in-out' }}
      >
        <Offcanvas.Header closeButton={!show}>
          <Navbar.Brand as={Link} to="/" className="align-top">Navbar Offcanvas</Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link className="nav-links" as={Link} to="/login">Login</Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/signup">Signup</Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/destinations">Destinations</Nav.Link>
            <Nav.Link className="nav-links" as={Link} to="/add-destinations" style={{ display: 'flex', flexDirection: 'row', gap: '7px'}}>
              <FontAwesomeIcon icon={faPlus} />
              Add Destinations
            </Nav.Link>
            {/* Add more Nav.Link items here */}
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>

      <div style={{ marginLeft: show ? '200px' : '0', transition: 'margin-left 0.3s ease-in-out' }}>
        {children}
      </div>
    </>
  );
}

OffcanvasLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default OffcanvasLayout;
