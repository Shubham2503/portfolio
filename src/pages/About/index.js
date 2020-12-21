import React from 'react';
import { TiLink } from 'react-icons/ti';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';

const About = () => {
    const openBrace = '\{';
    const closeBrace = '\}';
    const list = [
        {
            name: "github",
            link: "https://github.com/Shubham2503",
            icon: <AiFillGithub />
        },
        {
            name: "Instagram",
            link: "https://www.instagram.com/shubham_2503/",
            icon: <AiFillInstagram />,
        }
    ]
    return (
        <div style={{ height: "80%" }}>
            {/*
                
            <Typography variant="subtitle1" className={styles.title}>
                <br />"I am a computer science undergraduate
                </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                with proficiency over
                </Typography>
                <Typography variant="subtitle1" className={styles.title}>
                javascript, c++, React, Node and many others ...
                </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                and love building everthing from
            </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                sites to interactive apps."
            </Typography> */}
            <Container className={styles.container}>
                <Row>
                    <Col>
                        <h1>SHUBHAM PATEL</h1>
                        <h4>
                            {openBrace} Computer Science Undergraduate {closeBrace}
                        </h4>
                        <h4>
                            "Hyy There !!!"
                        </h4>
                    </Col>
                </Row>
                <Row>
                    <Col>
                    <h4>
                        {list.map((item, i) =><a href={item.link} target="_blank" key={i} style={{ textDecoration: "none" }} className={styles.logo}> {item.icon}</a>)}
                    </h4>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default About;