import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

import CountUp from "react-countup";

const useStyles = makeStyles({
    root:{
        borderRadius : "5px",
        boxShadow: "0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)"
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    },
});

export default function SimpleCard(props) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography variant="h4" component="h2" align="center">
                    <CountUp start={0} end={props.count} duration={2.5} separator="," />
                </Typography>
                <Typography variant="h6" component="h2" className={classes.pos} color="textSecondary" align="center">
                    {props.content}
                </Typography>
            </CardContent>
        </Card>
    );
}
