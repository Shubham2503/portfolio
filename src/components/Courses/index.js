import React from 'react';
import styles from './index.module.css'
import Algorithemic_Toolbox from './../../assets/Algorithemic_Toolbox.png'
import { makeStyles } from '@material-ui/core/styles';
import Machine_Learning from './../../assets/Machine_Learning.png'
import { Carousel, Image } from 'react-bootstrap'

const Courses = () => {
    return (
        <div style={{ width: "auto" }}>
            <Carousel fill='#000' nextIcon={<span aria-hidden="true" className={styles.ccni} />} prevIcon={<span aria-hidden="true" className={styles.ccpi} />}> 
                <Carousel.Item>
                    <Image
                        className="d-block w-100"
                        src={Algorithemic_Toolbox}
                        alt="Algorithemic_Toolbox"
                    />
                </Carousel.Item>
                <Carousel.Item>

                    <Image
                        className="d-block w-100"
                        src={Machine_Learning}
                        alt="Machine_Learning"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Courses;