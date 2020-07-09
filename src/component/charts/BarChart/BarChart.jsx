import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./BarChart.module.css";


function BarChart(props) {

    const stateBar = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d => {
            if (d.week)
                return d.week;
            if (d.Month)
                return d.Month;
            return d.date;
        }),
        datasets: [{
            label: "Percentage Score " + props.title,
            fill: false,
            barThickness: 12,
            backgroundColor: 'lightgreen',
            borderWidth: 2,
            data: props.sentiment.map(d => (d[props.title].toFixed(2)))
        }
        ]
    } : null;

    const bar = stateBar !== null ? (<Bar
        data={stateBar}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
            },
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
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}

function ScoreBarChart(props) {
    const stateBar = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d => {
            if (d.week)
                return d.week;
            if (d.Month)
                return d.Month;
            if (d.date)
                return d.date;
            return "";
        }),
        datasets: [{
            label: "Subjectivity",
            fill: false,
            barThickness: 12,
            backgroundColor: 'orange',
            borderWidth: 2,
            data: props.sentiment.map(d => d.subjectivity.toFixed(2))
        }, {
            label: "Polarity",
            fill: false,
            barThickness: 12,
            backgroundColor: 'lightgreen',
            borderWidth: 2,
            data: props.sentiment.map(d => d.polarity.toFixed(2))
        }
        ]
    } : null;

    const bar = stateBar !== null ? (<Bar
        data={stateBar}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            legend: {
                display: true,
                position: "top"
            },
            scales: {
                yAxes: [
                    {
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ]
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

function DailyBarChart(props) {
    const stateBar = props.sentiment.length !== 0 ? {
        labels: ["Subjectivity", "Polarity"],
        datasets: [{
            label: "Score",
            fill: false,
            barThickness: 12,
            backgroundColor: 'rgba(75,192,192,1)',
            borderColor: 'rgba(0,0,0,10',
            borderWidth: 2,
            data: props.sentiment
        }
        ]
    } : null;

    const bar = stateBar !== null ? (<Bar
        data={stateBar}
        options={{
            responsive: true,
            maintainAspectRatio: false,

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
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}

export default BarChart;
export { DailyBarChart, ScoreBarChart };