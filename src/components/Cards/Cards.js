import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';
import { FiRss } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';
import styles from './Cards.module.css';

const Cards = (props) => {
    const state = {
        toggle: false
    }
    if (props.val.link == "") {
        state.toggle = true;
    }

    console.log(state.toggle);
    return (
        <div className={styles.container} style={{ position: "relative" }}>
            <Card bg="secondary" md={2} className={styles.mainCard} text='white' style={{ height: "200px" }}>
                <Card.Header className={styles.title}>{props.val.name}</Card.Header>
                <Card.Body>
                    <Card.Text className={styles.desc}>
                        {props.val.desc}
                    </Card.Text>
                </Card.Body>
                <footer className="blockquote-footer" style={{marginBottom: "10px"}}>
                    <Container>
                        <Row>
                            <Col>
                                <Button size="sm" variant="secondary" href={props.val.url} target="_blank">Github&nbsp;<AiFillGithub /></Button>
                                
                            </Col>
                            <Col>
                                { !state.toggle ?(<Button size="sm" variant="secondary"  href={props.val.link} target="_blank">Live&nbsp;<FiRss /></Button>) :  (<div> </div>)}
                                
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Card>
        </div>
    )
}

export default Cards;