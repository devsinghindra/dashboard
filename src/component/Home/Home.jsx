// Don't re-invent the wheel - Best software developer tip

// Use react material ui and bootstrap for designing
import React from 'react';
import styles from './Home.module.scss';
import { Link } from "react-router-dom";
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import { Dashboard, DeveloperMode } from "@material-ui/icons";

const overview = `Twitter sentiment analysis Machine learning model, which can find the sentiment score based
on the tweets data. We are finding sentiment scores and emotion for 5000 tweets data everyday
using machine learning models and analyzing it with various data analysis like frequency count
,monthly and weekly data analysis . Based on the sentiment score of everyday and
,we can analyze the sentiments ,variation in sentiments of public.`;

const purpose = `Sentiment analysis is extremely useful in social media monitoring as it allows us to gain an
overview of the wider public opinion behind certain topics. Social media websites like Twitte,
Facebook make that process quicker and easier than ever before, thanks to real-time
monitoring capabilities.The human language is complex. Teaching a machine to analyse the various grammatical
nuances, cultural variations, slang and misspellings that occur in online mentions is a difficult
process. Teaching a machine to understand how context can affect tone is even more difficult
The Corona Virus endangers our physical health indeed, but alongside, social distancing also
poses a threat to our emotional stability. Thus, it is crucial to understand public sentiments under COVID-19.`;


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
                        {/* <!-- Add your link to="/"--> */}
                        <Button variant="outlined" color="primary" className={styles.button}>
                            <Dashboard />
                            <Link to="/dashboard" className={styles.link}>Go to DashBoard</Link>
                        </Button>
                        <Button variant="outlined" color="primary" className={styles.button}>
                            <DeveloperMode />
                            <Link to="/test" className={styles.link}>Test Model</Link>
                        </Button>
                    </Container>
                </Jumbotron>
            </div>
            <div className={styles.child_2}>
                <div className={styles.summary}>
                    <h1>Overview</h1>
                    <hr />
                    <Typography variant="h5" component="h2" className={styles.text}>
                        {overview}
                    </Typography>
                    <h1>Purpose</h1>
                    <hr />
                    <Typography variant="h5" component="h2" className={styles.text}>
                        {purpose}
                        <a href="https://drive.google.com/file/d/1A5bMs0Cb7UoTVwixiXcvOGf3M-AfLBmR/view?usp=sharing"> For more Information, Click Here.</a>
                    </Typography>
                </div>
            </div>
        </div>
    );
}

export default Home;