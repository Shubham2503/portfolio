import React from 'react';
import styles from './index.module.css'
import image from './../../assets/image.jpg'
import { Container, Row, Col } from 'react-bootstrap'

const About = () => {

    return (
        <div className={styles.container} >
            <Container fluid={true} >
                <Row className={styles.title}>
                    <h1>About me...!</h1>
                </Row>
                <Row >
                    <Col md={4} style={{ textAlign: "center", fontFamily: "serif" }} >
                        <img className={styles.profile} src={image} />
                        <h4 style={{ fontFamily: "serif" }}>Shubham Patel</h4>
                        <h4>Ping me !!!</h4>
                        <a>Email </a>
                        <a>LinkedIn</a>
                    </Col>
                    <Col>
                        <h4 style={{ marginBottom: "0px" }}>Hi, I'm Shubham Patel.</h4>
                        <h4>
                            I am currently pursuing my B.Tech in Computer engineering from Sardar Vallabhbhai National Institute of technology (SVNIT).
                        </h4>

                        <h2>Recent Accomplishments </h2>
                        <ul>
                            <li>
                                Finalist at JP Morgan CFG Hackthon 2020
                            </li>
                        </ul>
                        <h2>Education</h2>
                        <ul>
                            <li>SVNIT</li>
                            <li>HSC</li>
                            <li>SSC</li>
                        </ul>
                        <h2>Certificates</h2>
                        <ul>
                            <li>ML</li>
                            <li>Algorithemic Toolbox</li>
                        </ul>

                    </Col>
                </Row>
            </Container>
        </div>

    );
}

export default About;
