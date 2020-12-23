import React from 'react';
import { TiLink } from 'react-icons/ti';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import logo from './../../assets/logo.png'

const Home = () => {
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
        <div className={styles.container}>
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
            <Container >
                <Row>
                    <Col>
                        <h1>Hi I'm SHUBHAM PATEL</h1>
                        <h4>
                            {openBrace} Computer Science Undergraduate {closeBrace}
                        </h4>
                        <h4>
                            "Hyy There !!!"
                        </h4>
                    </Col>
                </Row>
                <Row><Col><img src={logo} style={{width: "300px"}}></img></Col></Row>
            </Container>
        </div >
    );
}

export default Home;