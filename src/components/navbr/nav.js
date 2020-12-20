import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaAlignRight } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom';
import styles from './nav.module.css';


class nav extends Component {
    render() {
        return (
            <div>
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Navbar.Brand><Link style={{ textDecoration: "none", color: "#55b0d1" }} to="/">Shubham Patel</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link><Link to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Projects</Link></Nav.Link>
                            <Nav.Link><Link to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Projects</Link></Nav.Link>
                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown> */}
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }
}

export default nav;