import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./LineChart.module.css";

function LineChart(props) {
    const stateLine = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.y),
        datasets: [{
            label: "Percentage Score " + props.title,
            fill: false,
            backgroundColor: 'rgba(75,192,192,1)',
            lineTension: .5,
            borderColor: 'rgba(0,0,0,10',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.x))
        }
        ]
    } : null;

    const line = stateLine !== null ? (<Line
        data={stateLine}
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
                position: "top"
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
                        {line}
                    </div>
                </div>
            </div>
        </>
    );
}

export default LineChart;