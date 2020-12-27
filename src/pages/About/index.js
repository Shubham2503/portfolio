import React from 'react';
import styles from './index.module.css'
import image from './../../assets/image.jpg'
import { Container, Row, Col,Button } from 'react-bootstrap'
import Courses from './../../components/Courses'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'

const About = () => {

    return (
        <div className={styles.container} >
            <Container>
                <Row className={styles.title}>
                    <h1>About me...!</h1>
                </Row>

                <Row >
                    <Col md={4} style={{ textAlign: "center", fontFamily: "serif" }} >
                        <img className={styles.profile} src={image} />
                        <br />
                        <h3 style={{ fontFamily: "serif" }}>Shubham Patel</h3>
                        <br />
                        <h4 style={{padding: "0px",margin:"0px"}}>Ping me !!!</h4>
                        <div style={{fontSize: "1.25rem"}}>
                        <MdEmail /> &nbsp;
                        <FaLinkedinIn />
                        </div>
                        <br />
                        <Button variant="dark">Here's My Resume</Button>

                    </Col>
                    <Col>
                        <h5 style={{ marginBottom: "0px" }}>Hi, I'm Shubham Patel.</h5>
                        <h5>
                            I am currently pursuing my B.Tech in Computer engineering from Sardar Vallabhbhai National Institute of technology (SVNIT).
                        </h5>
                        <br />
                        <h3>Recent Accomplishment </h3>
                        <ul>
                            <li>
                                <b>Finalist</b> at JP Morgan CFG Hackthon 2020
                            </li>
                        </ul>
                        <br />
                        <h3>Certificates</h3>
                        <Courses />
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default About;
