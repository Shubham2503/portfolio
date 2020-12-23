import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown'
import { FaAlignRight } from 'react-icons/fa';
import { Link, NavLink } from "react-router-dom";
import ReactDOM from 'react-dom';
import styles from './index.module.css';


const Navbr = () => {
        return (
            <div className={styles.container}>
                <Navbar collapseOnSelect expand="md">
                    <Navbar.Brand><Link className={styles.navBrand} style={{ textDecoration: "none", color: "#55b0d1" }} to="/"> <h1>Shubham Patel</h1></Link></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="justify-content-end" style={{ width: "100%" }}>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>Projects</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/contact" style={{ textDecoration: "none", color: "#55b0d1" }}>Contact</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Link className="nav-link" to="/projects" style={{ textDecoration: "none", color: "#55b0d1" }}>About</Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link target="_blank" href="https://drive.google.com/file/d/1hmuiHj_iJgOsCpr7aPWa0Ed5cjoefBsq/view?usp=sharing" style={{ textDecoration: "none", color: "#55b0d1" }}
//                                 onClick={() => {
//                                     ReactGA.event({
//                                       category: "Outgoing",
//                                       action: "Download Resume"
//                                     });
//                                     window.location.href =
//                                       "https://drive.google.com/file/d/1hmuiHj_iJgOsCpr7aPWa0Ed5cjoefBsq/view?usp=sharing";
// }}
                                >Resume</Nav.Link>
                            </Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
}

export default Navbr;