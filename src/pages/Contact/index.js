import React from 'react';
import styles from './index.module.css';
import { Row, Form, Col, Container, Button } from 'react-bootstrap'

const Contact = () => {
    return (
        <Container className={styles.container}>
            <div className={styles.contactForm}>
                <div className={styles.contactImage}>
                    <img src="https://image.ibb.co/kUagtU/rocket_contact.png" alt="rocket_contact" />
                </div>
                <Form className={styles.formMain} method="post">
                    <h3>Drop Us a Message</h3>
                    <Row>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Control className={styles.formControl}  type="text" name="txtName" placeholder="Name *" value="" required="true" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className={styles.formControl}  type="email" name="txtEmail" placeholder="Email *" value="" required="true"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className={styles.formControl}  type="text" name="txtPhone" placeholder="Phone Number" value="" />
                            </Form.Group>
                            <Form.Group>
                                <Form.Control className={styles.formControl}  type="submit" name="btnSubmit" className={styles.btnContact} value="Send Message" />
                            </Form.Group>
                        </Col>
                        <Col md={6}>
                            <Form.Group>
                                <Form.Control name="txtMsg" className={styles.formControl} placeholder="Enter Your Message *" style={{ width: "100%", height: "150px" }} required="true" />
                            </Form.Group>
                        </Col>
                    </Row>
                </Form >
            </div >
        </Container>
    );
}

export default Contact;