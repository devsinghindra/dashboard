import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import styles from "./Date.module.css";
import PieChart from "../charts/PieChart/PieChart";
import { ScoreBarChart } from "../charts/BarChart/BarChart";

function Date(props) {
    const [date, setDate] = useState({});
    // console.log(props.data, 'date');
    const initializeDate = () => {
        if (props.data.length !== 0) {
            // console.log("in if");
            setDate(props.data.reverse()[0]);
        }
    }
    useEffect(() => {
        initializeDate();
    }, [props.data.length])


    function handleDate(d) {
        // console.log(d, 'indatecomponent');
        let tempDate = props.data.filter((val, index) => { return val.date == d });
        // console.log(tempDate);
        setDate(tempDate[0]);
    }
    console.log(date, "date");
    return (
        <div className={styles.Container}>
            <div className={styles.Emotion}>
                <h1>Emotion</h1>
                {(Object.keys(date).length !== 0) && <PieChart sentiment={[date.value.joy, date.value.anger, date.value.sad, date.value.fear]} />}
            </div>
            <div className={styles.Score}>
                <h1>Score</h1>
                {(Object.keys(date).length !== 0) && <ScoreBarChart sentiment={[{ subjectivity: date.value.subjectivity, polarity: date.value.polarity }]} />}
            </div>
            <div>
                <h3>Select Date</h3>
                <DatePicker data={props.data.reverse()} handleDate={handleDate} />
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