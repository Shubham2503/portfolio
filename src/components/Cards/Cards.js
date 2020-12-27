import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { FiRss } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import styles from './Cards.module.css';

const useStyles = makeStyles({
    button: {
        color: "white"
    },
    view: {
        display: "none",
    }
});

const Cards = (props) => {
    const classes = useStyles();
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

                <footer className="blockquote-footer">
                    <Container>
                        <Row>
                            <Col>
                                <Button size="small" className={classes.button} href={props.val.url} target="_blank">Github&nbsp;&nbsp; <AiFillGithub /></Button>

                            </Col>
                            <Col>
                                <Button size="small" className={state.toggle ? [classes.button, classes.view] : classes.button} href={props.val.link} target="_blank">Live&nbsp;&nbsp; <FiRss /></Button>
                            </Col>
                        </Row>
                    </Container>
                </footer>
            </Card>
        </div>
    )
}

export default Cards;