import React from "react";
import styles from "./Date.module.css";
import PieChart from "../charts/PieChart/PieChart";
import BarChart from "../charts/BarChart/BarChart";

function Date(props) {
    console.log(props.data, 'date');
    return (
        <div className={styles.Container}>
            <div className={styles.Emotion}>
                <h1>Emotion</h1>
                <PieChart sentiment={props.data} />
            </div>
            <div className={styles.Score}>
                <h1>Score</h1>
                <BarChart sentiment={props.data.map(d => { return { x: d.value.polarity, y: d.date } })} />
            </div>
        </div>
    );
}

export default Date;