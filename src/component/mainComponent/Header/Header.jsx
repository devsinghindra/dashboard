import React from 'react';
import styles from './header.module.scss';
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper';

export default function Header(props) {
  return (
   <div className={styles.header}>
        <Paper variant="outlined" elevation={3}>
        <Typography variant="h4" component="h2" className={styles.subtitle}>
              {props.text}
        </Typography>
        </Paper>
    </div>
  );
}
