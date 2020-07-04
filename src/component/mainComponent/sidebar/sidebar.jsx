import React from 'react';
import './sidebar.scss';
import Child from './link';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import EventNoteIcon from '@material-ui/icons/EventNote';
import PollIcon from '@material-ui/icons/Poll';
import MoreIcon from '@material-ui/icons/More';
import {Link} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
      width: '100%',
      backgroundColor: theme.palette.background.paper,
    },
    margin : {
        marginTop : '5em'
    },
    link :{
        textDecoration : 'none',
        color : '#1b1b1b'
    }
  }));

function SideBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            {/* <div class="child-sidebar"></div>
            <div class="child-sidebar"><Child value={"Date"} l6emink={"/dashboard"} /></div>
            <div class="child-sidebar"><Child value={"Overall"} link={"/dashboard/overall"} /></div>
            <div class="child-sidebar"><Child value={"Hashtag"} link={"/dashboard/hashtag"} /></div>
            <div class="child-sidebar"></div>*/}
            <List className={classes.margin}> 
                <ListItem button>
                    <ListItemIcon>
                        <EventNoteIcon />
                    </ListItemIcon>
                    <Link to="/dashboard" className={classes.link}><ListItemText primary="Date" /></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <PollIcon />
                    </ListItemIcon>
                    <Link to="/dashboard/overall" className={classes.link}><ListItemText primary="Overall" /></Link>
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <MoreIcon />
                    </ListItemIcon>
                    <Link to="/dashboard/hashtag" className={classes.link}><ListItemText primary="Hashtag" /></Link>
                </ListItem>
            </List>
        </div>
    )
}

export default SideBar;