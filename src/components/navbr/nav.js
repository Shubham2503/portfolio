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
            <div style={{width: "80%",margin:"auto"}}>
                <Navbar collapseOnSelect expand="lg">
                    <Navbar.Brand><Link style={{ textDecoration: "none",fontFamily: "serif", color: "#55b0d1",fontSize: "40px"}} to="/">Shubham Patel</Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Projects</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>About</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Resume</Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );

    }
}

export default nav;