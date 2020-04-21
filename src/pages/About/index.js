import React from 'react';
import { TiLink } from 'react-icons/ti';
import styles from './index.module.css';
import { Typography } from '@material-ui/core';
import {AiFillInstagram,AiFillGithub} from 'react-icons/ai';

const About = () => {
    const openBrace = '\{';
    const list = [
        {
            name:"github",
            link:"https://github.com/Shubham2503",
            icon:"AiFillInstagram"
        },
        {
            name:"Instagram",
            link:"https://www.instagram.com/shubham_2503/",
            icon:"AiFillGithub",
        }
    ]
    return (
        <div className={styles.container}>
            <Typography variant="h4" className={styles.logo}>
                <TiLink />
            </Typography>
            <Typography variant="h4" className={styles.title}>
                SHUBHAM PATEL
                </Typography>
            <Typography variant="h5" className={styles.title}>
                {openBrace}  SOFTWARE ENGINEEER }
                    <br />
            </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                <br />"I am a computer science undergraduate
                </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                with proficiency over javascript, c++, React, Node and many others ...
                </Typography>
            <Typography variant="subtitle1" className={styles.title}>
                and love building everthing from sites to interactive apps."
            </Typography>

            {list.map((a,i) => <p>{a.name}</p>)}
        </div>
    );
}

export default About;