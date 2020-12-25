import React from 'react';
import { TiLink } from 'react-icons/ti';
import styles from './index.module.css';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { AiFillInstagram, AiFillGithub } from 'react-icons/ai';
import logo from './../../assets/logo.png'

const Footer = () => {
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
        <div>
            <footer className={styles.footer}>
                <Container>
                    <Row style={{ width: "100%" }}>
                        <Col>
                            <h4>Get in Touch ...!</h4>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:"20px"}}>
                        <Col>
                            <h4>
                                {list.map((item, i) => <a href={item.link} target="_blank" key={i} style={{ textDecoration: "none" }} className={styles.logo}> {item.icon}</a>)}
                            </h4>
                        </Col>
                    </Row>
                </Container>
            </footer>
        </div >
    );
}

export default Footer;