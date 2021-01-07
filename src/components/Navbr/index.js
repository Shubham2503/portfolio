import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import { Link, NavLink } from "react-router-dom"
import styles from './index.module.css'

const Navbr = () => {
    const resume_link = "https://drive.google.com/file/d/1hmuiHj_iJgOsCpr7aPWa0Ed5cjoefBsq/view?usp=sharing";
    return (
        <div className={styles.container}>
            <Navbar collapseOnSelect expand="md">
                <Navbar.Brand><Link className={styles.navBrand} style={{ textDecoration: "none"}} to="/"> <h1 className={styles.head1} >Shubham Patel</h1></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className={styles.rNavbar}>
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                        <Nav.Item>
                            <Link className={styles.navLink} to="/projects">Projects</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={styles.navLink}to="/contact" >Contact</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <Link className={styles.navLink}to="/about" >About</Link>
                        </Nav.Item>
                        <Nav.Item>
                            <a className={styles.navLink} target="_blank" href={resume_link} >Resume</a>
                        </Nav.Item>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
}

export default Navbr;