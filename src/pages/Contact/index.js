import React from 'react';
import ReactDOM from 'react-dom'
import styles from './index.module.css';
import { Row, Form, Col, Container, Button } from 'react-bootstrap'
import Alert from 'react-bootstrap/Alert'
import rocket from '../../assets/rocket.png'

const config = {
    //cors: 'https://shubham2503.surge.sh/', // <optional> doesn't display the cors error
    formUrl: 'https://docs.google.com/forms/d/e/1FAIpQLSftCSDaN279lKCfi7ztLZpy15BJbGIq-uWapxDarx1Gcvc69w/formResponse'
};

class Contact extends React.Component {

    state = {
        inputs: {
            name: { id: 946289973, value: '' },
            email: { id: 63197614, value: '' },
            phone: { id: 137200515, value: null },
            message: { id: 891520858, value: '' }
        },
        alert_show: false
    }

    doSubmit = async (e) => {
        e.preventDefault();

        const { inputs } = this.state;
        const formData = new FormData();

        // console.log(this.state);
        // console.log(inputs);

        // inputs.forEach(e => {
        //     formData.append(`entry.${e.id}`,e.value)
        // });
        formData.append(`entry.${inputs.name.id}`, inputs.name.value)
        formData.append(`entry.${inputs.email.id}`, inputs.email.value)
        formData.append(`entry.${inputs.phone.id}`, inputs.phone.value)
        formData.append(`entry.${inputs.message.id}`, inputs.message.value)
        const axios = require('axios');

        await axios({
            url: `${config.formUrl}`,
            method: 'post',
            data: formData,
            responseType: 'json'
        })
            .then((response) => {
                console.log("Success");
                console.log('response', response);
            })
            .catch(err => {
                console.log("Error");
                console.log('err', err);

            })
            .then(e => { this.setState({ alert_show: true }) })
    }

    handleChange = (e) => {
        const { value, name } = e.target;
        const { inputs } = this.state;

        inputs[name].value = value;

        this.setState({
            inputs
        });
    }

    render() {
        return (
            < Container className={styles.container} >
                {this.state.alert_show ?
                    (
                        <Alert show={this.state.alert_show} variant="success">
                            <Alert.Heading>How's it going?!</Alert.Heading>
                            <p>Thanks for your Mesage / Feedback .... !</p>
                            <hr />
                            <div className="d-flex justify-content-end">
                                <Button onClick={() => this.setState({ alert_show: false })} variant="outline-success">Close</Button>
                            </div>
                        </Alert>
                    )
                    : (
                        <div className={styles.contactForm}>
                            <div className={styles.contactImage}>
                                <img src={rocket} alt="rocket_contact" />
                                {/* https://image.ibb.co/kUagtU/rocket_contact.png */}
                            </div>
                            <Form className={styles.formMain} method="post" onSubmit={this.doSubmit}>
                                <h3>Drop a Message 💌</h3>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control className={styles.formControl} onChange={this.handleChange} type="text" name="name" placeholder="Name *" required="true" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control className={styles.formControl} onChange={this.handleChange} type="email" name="email" placeholder="Email *" required="true" />
                                        </Form.Group>
                                        <Form.Group>
                                            <Form.Control className={styles.formControl} onChange={this.handleChange} type="text" name="phone" placeholder="Phone Number" />
                                        </Form.Group>
                                    </Col>
                                    <Col md={6}>
                                        <Form.Group>
                                            <Form.Control name="message" className={styles.formControl} onChange={this.handleChange} placeholder="Enter Your Message *" style={{ width: "100%", height: "150px" }} required="true" />
                                        </Form.Group>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md={6}>
                                        <Form.Group className={styles.wrapper}>
                                            <Form.Control  className={styles.formControl} type="submit" name="btnSubmit" className={styles.btnContact} value="Send Message" />
                                        </Form.Group>

                                    </Col>
                                </Row>
                            </Form >
                        </div >
                    )}
            </Container >
        );
    }
}

export default Contact;