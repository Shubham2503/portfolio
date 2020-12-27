import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import Cards from './Cards';

import data from '../../data/repo.json';
import styles from './Cards.module.css';

const AllCards = () => {
    //console.log(data);
    return (
        <div className={styles.container} style={{margin:"0px"}}>
            <Grid container justify="center">
                {data.repo.map((p, i) =>
                    <Grid xs={12} sm={5} md={3} className={styles.card}>
                        <Cards val={p} />
                    </Grid>)
                }
            </Grid>
        </div>
    )
}

export default AllCards;