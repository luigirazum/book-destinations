import { useState } from 'react';
import PropTypes from 'prop-types';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faArrowLeft, faPlus } from '@fortawesome/free-solid-svg-icons';
import '../stylesheets/off.css';

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
            style={{ color: 'black', cursor: 'pointer', padding: '8px', borderRadius: show ? '0 8px 8px 0' : '8px 0 0 8px' }}
            onClick={show ? handleClose : handleShow}
          />
        </div>
      </Navbar>

      <Offcanvas
        show={show}
        onHide={handleClose}
        placement="start"
        style={{ height: '100vh', width: '200px', position: 'fixed', top: 0, zIndex: 1000, marginLeft: show ? '0' : '-200px', transition: 'margin-left 0.3s ease-in-out' }}
      >
        <Offcanvas.Header closeButton={!show}>
          <Navbar.Brand as={NavLink} to="/" className="align-top" style={{ display: 'flex', justifyContent: 'center' }}>
              <img className='img-fluid' src="/pic.jfif" style={{ width: '98px', height: '89px' }}/> 
          </Navbar.Brand>
        </Offcanvas.Header>
        <Offcanvas.Body style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Nav className="flex-column" style={{ flexDirection: 'column', display: 'flex', gap: '20px' }}>
            {/* Use NavLink for each link, applying activeClassName */}
            <NavLink className="nav-link side" activeClassName="active-link" to="/login">Login</NavLink>
            <NavLink className="nav-link side" activeClassName="active-link" to="/signup">Signup</NavLink>
            <NavLink className="nav-link side" activeClassName="active-link" to="/destinations">Destinations</NavLink>
            <NavLink className="nav-link side" activeClassName="active-link" to="/add-destinations" style={{ display: 'flex', flexDirection: 'row', gap: '7px'}}>
              <FontAwesomeIcon icon={faPlus} />
              Add Destinations
            </NavLink>
            <NavLink className="nav-link" activeClassName="active-link" to="/delete-destinations">Delete Destination</NavLink>
            {/* Add more NavLink items here */}
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
