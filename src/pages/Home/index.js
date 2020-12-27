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