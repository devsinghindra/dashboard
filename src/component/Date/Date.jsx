import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Date.module.css";
import PieChart from "../charts/PieChart/PieChart";
import { ScoreBarChart } from "../charts/BarChart/BarChart";
import { CircularProgress } from "@material-ui/core";
import { storageRef, storagePath } from "../../services/firebase";

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
            <div className={styles.Emotion}>
                <h1>Emotion</h1>
                {(Object.keys(date).length !== 0) ? <PieChart sentiment={[date.value.joy, date.value.anger, date.value.sad, date.value.fear]} /> : <CircularProgress />}
            </div>
            <div className={styles.Score}>
                <h1>Score</h1>
                {(Object.keys(date).length !== 0) ? <ScoreBarChart sentiment={[{ subjectivity: date.value.subjectivity, polarity: date.value.polarity }]} /> : <CircularProgress />}
            </div>
            <div className={styles.WordCloud}>
                <h2>Word Cloud</h2>
                {imgUrl !== "" ? <img src={imgUrl} alt="wordcloud" /> : <CircularProgress />}
            </div>
            <div>
                <h3>Select Date</h3>
                <DatePicker data={props.data} handleDate={handleDate} />
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