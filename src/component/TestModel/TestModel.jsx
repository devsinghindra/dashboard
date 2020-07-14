// Don't re-invent the wheel - Best software developer tip

// Use react material ui and bootstrap for designing
import React, { useState } from 'react';
import styles from './TestModel.module.scss';
import Jumbotron from 'react-bootstrap/Jumbotron'
import Container from 'react-bootstrap/Container'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardIos';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { NavLink } from "react-router-dom";
import { Home } from "@material-ui/icons";
import axios from "axios";
import { CircularProgress } from "@material-ui/core";

//emotion images
import analyticalImg from "../../assets/images/analytical.gif";
import angerImg from "../../assets/images/anger.gif";
import fearImg from "../../assets/images/fear.gif";
import joyImg from "../../assets/images/joy.gif";
import neutralImg from "../../assets/images/neutral.png";
import sadImg from "../../assets/images/sad.gif";
import confidenceImg from "../../assets/images/confidence.gif";

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    textField: {
        width: '100%',
        height: '100%'
    },
    input: {
        height: '90%'
    },
    notchedOutline: {
        borderColor: '#1f7bac !important',
    }
}));

const scoreAPI = "https://mkk23051999.pythonanywhere.com/score/?text=";
const emotionAPI = "https://nameless-bayou-63665.herokuapp.com/emotion?text=";

const spinner = <CircularProgress />;

function TestModel() {
    const classes = useStyles();
    // const classes = useStyles();
    // Add flexbox and style and content
    const [inputText, setInputText] = useState("");//for storing input text
    const [emotion, setEmotion] = useState(""); //for storing emotion from emotionApi
    const [score, setScore] = useState({}); //for stroing score from scoreApi
    const [imgSource, setImgSource] = useState(""); //for storing emoji
    const [showSpinner, setShowSpinner] = useState(false); //for showing spinner
    function handleInput(val) {
        // console.log(val);
        setInputText(val);
    }
    function getImageSource(what) {
        // console.log(what, "what");
        switch (what) {
            case "Confident": return confidenceImg;
            case "Anger": return angerImg;
            case "Sadness": return sadImg;
            case "Fear": return fearImg;
            case "Analytical": return analyticalImg;
            case "Joy": return joyImg;
            default: return neutralImg;
        }
    }
    const getScore = async () => {
        try {
            // console.log(inputText, "intry");
            // axios.get(emotionAPI + inputText).then(function (data) {
            //     console.log(data.data, "tehn");
            // }).catch(function (error) {
            //     console.log(error, "axios");
            // });
            //getting emotion
            setShowSpinner(true);
            const emotionData = await axios.get(emotionAPI + inputText);
            if (emotionData.data.length === 0) {
                setEmotion("Neutral");
                setImgSource(getImageSource("Neutral"));
            } else {
                try {
                    // console.log(emotionData.data[0]);
                    setEmotion(emotionData.data[0].tone_name);
                    setImgSource(getImageSource(emotionData.data[0].tone_name));
                } catch (error) {
                    console.log(error, "in setemotion of tryblock");
                    setEmotion("Some Error");
                }
            }
            const scoreData = await axios.get(scoreAPI + inputText);
            if (Object.keys(scoreData).length === 0) {
                console.log("empty object from score api");
            } else {
                // console.log(scoreData.data);
                setScore(scoreData.data);
            }
            setShowSpinner(false);
        } catch (error) {
            console.log(error, "incatch");
        }
        setShowSpinner(false);
    }

    function handleSubmit() {
        getScore();
    }

    return (
        <div className={styles.grid}>
            <div className={styles.child_1}>
                <NavLink to="/" className={styles.Link}><Home /> <h2>Back to Home</h2></NavLink>
                <Jumbotron fluid className={styles.jumbotron}>
                    <Container>
                        <Typography variant="h2" component="h2" className={styles.title}>
                            Analyze text
            </Typography>
                        <Typography variant="h3" component="h2" className={styles.subtitle}>
                            Sentiment analysis and Emotion Anlaysis ML Model
            </Typography>
                    </Container>
                </Jumbotron>
            </div>
            <div className={styles.child_2}>
                <div className={styles.summary}>
                    <Typography variant="h5" component="h2" className={styles.text}>
                        Check and Analyse Emotion and Score with our custom made ML model.We have used <span>Text Blob</span>
             for finding sentiment score and <span>IBM Tone Analyzer</span> & <span>BERT Model</span> for emotion analysis.
        </Typography>
                </div>
                <div className={styles.input}>
                    <TextField           // Take inpuut here
                        id="outlined-margin-none"  // vert tricky to change material ui custom color
                        className={classes.textField}
                        variant="outlined"
                        InputProps={{
                            classes: {
                                root: classes.input,
                                notchedOutline: classes.notchedOutline,
                            },
                        }}
                        value={inputText}
                        onChange={(e) => handleInput(e.target.value)}
                    />
                </div>
                <Button  // on click on button take input and pass to api
                    variant="outlined"
                    className={styles.button}
                    color="primary"
                    endIcon={<ArrowForwardIcon />}
                    onClick={handleSubmit}
                >Check</Button>
                <div className={styles.output}>   {/* store output here */}
                    <div className={styles.subject}><span>Subjectivity :</span><div>{showSpinner ? spinner : (Object.keys(score).length !== 0 && score.Subjectivity.toFixed(2))}</div></div>
                    <div className={styles.polar}><span>Polarity :</span><div>{showSpinner ? spinner : (Object.keys(score).length !== 0 && score.Polarity.toFixed(2))}</div></div>
                    <div className={styles.emotion}><span>Emotion :</span><div>{showSpinner ? spinner : emotion}</div></div>
                    <div className={styles.emoji}><span>Emoji : </span>{showSpinner ? spinner : (imgSource !== "" && <img src={imgSource} alt="Emotion" />)}</div>
                </div>
            </div>
        </div>
    );
}

export default TestModel;