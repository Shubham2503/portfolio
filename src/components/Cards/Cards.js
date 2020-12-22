import React from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap'
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import { FiRss } from 'react-icons/fi';
import { AiFillGithub } from 'react-icons/ai';

import styles from './Cards.module.css';

const useStyles = makeStyles({
    root: {
        minWidth: 250,
        minHeight: 170,
    },
    title: {
        fontSize: 20,
        color: "#55b0d1",
    height: "75px"
    },
    pos: {
        marginBottom: 12,
    },
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
            {/* <Card className={classes.root}>
                <CardContent>
                    <Typography className={classes.title}>
                        {props.val.name}
                    </Typography>
                    <Typography className={classes.pos}>
                        {props.val.desc}
                    </Typography>
                </CardContent>
                <CardActions>
                    <div style={{ position: "absolute", bottom: "0", marginBottom: "10px" }}>
                        <Button size="small" className={classes.button} href={props.val.url} target="_blank">Github&nbsp;&nbsp; <AiFillGithub /></Button>
                        <Button size="small" className={state.toggle ? [classes.button, classes.view] : classes.button} style={{ marginLeft: "20px" }} href={props.val.link} target="_blank">Live&nbsp;&nbsp; <RiBroadcastLine /></Button>
                    </div>
                </CardActions>
            </Card> */}

            <Card bg="secondary" className="mb-2" text='white' style={{ height: "200px" }}>
                <Card.Header className={classes.title}>{props.val.name}</Card.Header>
                <Card.Body>
                    <Card.Text>
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