import React from 'react';
import styles from './index.module.css'
import image from './../../assets/image.jpg'
import { Container, Row, Col, Button } from 'react-bootstrap'
import Courses from './../../components/Courses'
import { MdEmail } from 'react-icons/md'
import { FaLinkedinIn } from 'react-icons/fa'

const About = () => {

    const resume_link = "https://drive.google.com/file/d/1hmuiHj_iJgOsCpr7aPWa0Ed5cjoefBsq/view?usp=sharing";
    return (
        <div className={styles.container} >
            <Container>
                <Row className={styles.title}>
                    <h1>About me...!</h1>
                </Row>

                <Row >
                    <Col md={4} style={{ textAlign: "center", fontFamily: "serif", marginBottom: "30px" }} >
                        <img className={styles.profile} src={image} />
                        <br />
                        <h3 className={styles.heading} style={{ fontFamily: "serif" }}>Shubham Patel</h3>
                        <br />
                        <h4 style={{ padding: "0px", margin: "0px" }}>Ping me !!!</h4>
                        <div style={{ fontSize: "1.25rem" }}>

                            <a className={styles.links} href="mailto:shubhamp2531@gmail.com" target="_blank"><MdEmail /></a>
                            <a className={styles.links} href="https://www.linkedin.com/in/shubham-patel-254820174/" target="_blank"><FaLinkedinIn /></a>
                        </div>
                        <br />
                        <div className={styles.wrapper}>
                            <a href={resume_link} target="_blank" className={styles.button}>Here's My Resume</a>
                        </div>

                    </Col>
                    <Col>
                        <h5 style={{ marginBottom: "0px" }}>Hi, I'm Shubham Patel.</h5>
                        <h5>
                            I am currently pursuing my B.Tech in Computer engineering from Sardar Vallabhbhai National Institute of technology (SVNIT).
                        </h5>
                        <br />
                        <h3 className={styles.heading}>Recent Accomplishment </h3>
                        <ul>
                            <li>
                                <b>Finalist</b> at JP Morgan CFG Hackthon 2020
                            </li>
                        </ul>
                        <br />
                        <h3 className={styles.heading}>Certificates</h3>
                        <Courses />
                    </Col>
                </Row>

            </Container>
        </div>

    );
}

export default About;
