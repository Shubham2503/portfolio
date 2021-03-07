import React from 'react'
import styles from './index.module.css'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Home = () => {
    return (
        <div className={styles.container}>
            <Container >
                <Row>
                    <Col>
                        <h1 className={styles.head1}>Hey there !!!</h1>
                        <h1 className={styles.head1}> I'm SHUBHAM PATEL</h1>
                        <h4 className={styles.head4}>
                            "I am a computer engineering undergraduate at SVNIT and I love building things from responsive websites to interactive mobile applications."
                        </h4>
                    </Col>
                </Row>
            </Container>
        </div >
    );
}

export default Home;