import React from 'react';
import styles from './index.module.css'
import Algorithemic_Toolbox from './../../assets/Algorithemic_Toolbox.png'
import Machine_Learning from './../../assets/Machine_Learning.png'
import {Carousel,Image} from 'react-bootstrap'

const Courses = () => {
    return (
        <div style={{width: "auto"}}>
            <Carousel>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={Algorithemic_Toolbox}
                        alt="Algorithemic_Toolbox"
                    />
                    <Carousel.Caption>
                        <h3 style={{color: "#000"}}>Algorithemic Toolbox</h3>
                        <p style={{color: "#000"}}>UC San Diego (Coursera).</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={Machine_Learning}
                        alt="Machine_Learning"
                    />

                    <Carousel.Caption>
                        <h3 style={{color: "#000"}}>Machine Learning</h3>
                        <p style={{color: "#000"}}>Standford (Coursera).</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Courses;