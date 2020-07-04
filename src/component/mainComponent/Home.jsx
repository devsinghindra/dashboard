// Don't re-invent the wheel - Best software developer tip

// Use react material ui and bootstrap for designing
import React from 'react';
import styles from './home.module.scss';
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';

function Home() {
  // Add flexbox and style and content
  return (

    <div className={styles.grid}>
      <div className={styles.child_1}>
        <Jumbotron fluid className={styles.jumbotron}>
          <Container>
            <Typography variant="h2" component="h2" className={styles.title}>
              Covid-19 Dashboard
            </Typography>
            <Typography variant="h3" component="h2" className={styles.subtitle}>
              Sentiment Analysis of COVID-19 Tweets – Visualization Dashboard
            </Typography>
            <Button variant="outlined" color="primary" className={styles.button}>
              <Link to="/dashboard" className={styles.link}>Go to DashBoard</Link>
            </Button>
          </Container>
        </Jumbotron>
      </div>
      <div className={styles.child_2}>
        <div className={styles.summary}>
          <Typography variant="h5" component="h2" className={styles.text}>
            The sentiment analysis of Indians after the extension of lockdown announcements to be analyzed with the relevant #tags on twitter and build a predictive analytics model to understand the behavior of people if the lockdown is further extended.
            Also develop a dashboard with visualization of people reaction to the govt announcements on lockdown extension
        </Typography>
        </div>
      </div>
    </div>
  );
}

export default Home;