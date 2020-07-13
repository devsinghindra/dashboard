import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Date.module.css";
import PieChart from "../charts/PieChart/PieChart";
import { ScoreBarChart } from "../charts/BarChart/BarChart";
import { CircularProgress } from "@material-ui/core";
import { storageRef, storagePath } from "../../services/firebase";
import SimpleCard from "../ui/Cards/SimpleCard";

const text = "Analyze emotion , Score of each and every day of lockdown individually with ML generated Word Cloud. Use date picker to change date.";
const why = "Sentiment analysis of tweets provides exciting opportunities. Being able to analyze tweets in real-time, and determine the sentiment that underlies each message, adds a new dimension to social media monitoring.";

function Date(props) {
    const [date, setDate] = useState({});
    const [imgUrl, setImgUrl] = useState("");
    // console.log(props.data, 'date');
    const initializeDate = () => {
        if (props.data.length !== 0) {
            // console.log("in if");
            setDate(props.data[0]);
        }
    }

    const getImageUrl = async () => {
        //if date has object i.e date
        if (Object.keys(date).length !== 0) {
            try {
                // console.log(date.date, "intry");
                await storageRef.ref().child(storagePath + date.date + ".png").getDownloadURL().then(function (url) {
                    // console.log(url, "url");
                    setImgUrl(url);
                });
            } catch (error) {
                console.log(error);
            }
        }
    }

    useEffect(() => {
        initializeDate();
        getImageUrl();
    }, [props.data.length])

    getImageUrl();

    function handleDate(d) {
        // console.log(d, 'indatecomponent');
        setImgUrl("");
        let tempDate = props.data.filter((val, index) => { return val.date === d });
        // console.log(tempDate);
        setDate(tempDate[0]);
        // getImageUrl();
    }
    // console.log(date, "date");
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                <span>{text}</span>
                <h1>Why</h1>
                <span>{why}</span>
            </div>
            <div className={styles.Card}>
                <SimpleCard count={5000} content="Tweets per day" />
                <SimpleCard count={4} content="Types of emotions" />
                <SimpleCard count={1} content="Wordcloud Analysis" />
                <SimpleCard count={97} content="Days Lockdown Analysis" />
                <div>
                    <h3>Select Date</h3>
                    <DatePicker data={props.data} handleDate={handleDate} />
                </div>
            </div>
            <div className={styles.Group}>
                <div className={styles.Emotion}>
                    <h1>Emotion</h1>
                    {(Object.keys(date).length !== 0) ? <PieChart sentiment={[date.value.joy, date.value.anger, date.value.sad, date.value.fear]} /> : <CircularProgress />}
                </div>
                <div className={styles.Score}>
                    <h1>Score</h1>
                    {(Object.keys(date).length !== 0) ? <ScoreBarChart sentiment={[{ subjectivity: date.value.subjectivity, polarity: date.value.polarity }]} /> : <CircularProgress />}
                </div>
                <div className={styles.WordCloud}>
                    <h1>Word Cloud</h1>
                    {imgUrl !== "" ? <img src={imgUrl} alt="wordcloud" /> : <CircularProgress />}
                </div>
                {/* <div> 
                <h3>Select Date</h3>
                <DatePicker data={props.data} handleDate={handleDate} />
            </div> */}
            </div>
        </div>
    );
}


function DatePicker(props) {
    return (
        <FormControl className={styles.Picker} >
            <NativeSelect defaultValue="" onChange={(e) => props.handleDate(e.target.value)} className={styles.Select}>
                {/* <option value="">Today</option> */}
                {props.data.map((d, index) => { return <option key={index} value={d.date}>{d.date}</option>; })}
            </NativeSelect>
        </FormControl>
    );
}
export default Date;