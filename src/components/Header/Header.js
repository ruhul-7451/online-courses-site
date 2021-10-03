import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg" className="container">
                <Navbar.Brand>E-School</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <Nav.Link> <Link to="/home" className="btn btn-outline-primary">Home</Link> </Nav.Link>
                        <Nav.Link> <Link to="/courses" className="btn btn-outline-primary">Courses</Link> </Nav.Link>
                        <Nav.Link> <Link to="/about" className="btn btn-outline-primary">About Us</Link> </Nav.Link>
                        <Nav.Link> <Link to="/services" className="btn btn-outline-primary">Services</Link> </Nav.Link>
                        <Nav.Link> <Link to="/blog" className="btn btn-outline-primary">Blog</Link> </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;