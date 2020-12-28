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
    return (
        <div className={styles.container}>
            <Container >
                <Row>
                    <Col>
                        <h1 className={styles.head1}>Hi I'm SHUBHAM PATEL</h1>
                        <h4 className={styles.head4}>
                            "Hyy There !!! I am a computer engineering undergraduate at SVNIT and I love building things from responsive websites to interactive mobile applications."
                        </h4>
                    </Col>
                </Row>
                <Row><Col><img src={logo} style={{width: "300px"}}></img></Col></Row>
            </Container>
        </div >
    );
}

export default Home;