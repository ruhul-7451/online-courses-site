import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {

    return (
        <div>
            <Navbar bg="light" expand="lg" className="px-5">
                <Navbar.Brand className="text-primary fw-bold fs-3 text-uppercase">E-School</Navbar.Brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="ms-auto my-2 my-lg-0 btn-group"
                        style={{ maxHeight: '100px' }}
                        navbarScroll
                    >
                        <NavLink to="/home" className="btn btn-primary">Home</NavLink>
                        <NavLink to="/courses" className="btn btn-primary">Courses</NavLink>
                        <NavLink to="/services" className="btn btn-primary">Services</NavLink>
                        <NavLink to="/about" className="btn btn-primary">About</NavLink>

                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div >
    );
};

export default Header;