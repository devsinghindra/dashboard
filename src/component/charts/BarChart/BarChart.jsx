import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./BarChart.module.css";


function BarChart(props) {

    const stateBar = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.y),
        datasets: [{
            label: "Percentage Score " + props.title,
            fill: false,
            barThickness: 12,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,10',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.x))
        }
        ]
    } : null;

    const bar = stateBar !== null ? (<Bar
        data={stateBar}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Percentage Score " + props.title + " per day",
                fontSize: 20
            },
            legend: {
                display: true,
                position: "right"
            }
        }
        }
    />) : null;

    return (
        <>
            <div className={styles.Container}>
                <h1>{props.heading}</h1>
                <div className={styles.Chart}>
                    <div className={styles.ChartElement}>
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BarChart;