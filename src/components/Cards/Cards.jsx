import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';

import styles from './Cards.module.css';

const useStyles = makeStyles({
  root: {
    minWidth: 250,
    backgroundColor : "#404040",
  },
  title: {
    fontSize: 20,
    color: "#05d992",
  },
  pos: {
    marginBottom: 12,
    color: "#ffffff",
  },
  button: {
    color: "#ffffff",
  },
});

const Cards = (props) => {
  const classes = useStyles();
  return (
    <div className={styles.container}>
      <Card className={classes.root}>
        <CardContent>
          <Typography className={classes.title}>
            {props.val.name}
          </Typography>
          <Typography className={classes.pos}>
            {props.val.desc}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" className={classes.button}>Github</Button>
          <Button size="small" className={classes.button}>Live</Button>
        </CardActions>
      </Card>
    </div>
  )
}

export default Cards;