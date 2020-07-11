import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./BarChart.module.css";

const colors = {
    joy: "#fddb22",
    anger: "#ff1f1f",
    sad: "#3333ff",
    fear: "#3d3d3d",
    subjectivity: "orange",
    polarity: "lightgreen"
}


function BarChart(props) {

    const stateBar = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d => {
            if (d.week)
                return d.week;
            if (d.Month)
                return d.Month;
            if (d.date)
                return d.date;
            return d;
        }),
        datasets: [{
            label: "Percentage " + props.title,
            fill: false,
            barThickness: 12,
            backgroundColor: colors[props.title],
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
                <div className={styles.Chart}>
                    <div className={styles.ChartElement}>
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}


function FrequencyBarChart(props) {
    //here prop is object
    const stateBar = props.sentiment.length !== 0 ? {
        labels: Object.keys(props.sentiment),
        datasets: [{
            label: "Frequency " + props.title,
            fill: false,
            barThickness: 12,
            backgroundColor: colors[props.title.toLowerCase()],
            borderWidth: 2,
            data: Object.values(props.sentiment)
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
export { ScoreBarChart, FrequencyBarChart };