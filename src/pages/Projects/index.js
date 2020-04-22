import React from 'react';
import styles from './index.module.css';
import Cards from '../../components/Cards/AllCards'

const Project = () => {
    return(
        <div className={styles.container}>
            <Cards />
        </div>
    );
}

export default Project;