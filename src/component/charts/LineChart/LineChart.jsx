import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./LineChart.module.css";

function LineChart(props) {
    const stateLine = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.date),
        datasets: [{
            label: "Percentage Score " + props.title,
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: 'rgba(144,238,144,1)',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value[props.title].toFixed(2)))
        }]
    } : null;

    const line = stateLine !== null ? (<Line
        data={stateLine}
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
                <div className={styles.Chart}>
                    <div className={styles.ChartElement}>
                        {line}
                    </div>
                </div>
            </div>
        </>
    );
}

function DualLineChart(props) {
    const stateLine = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.date),
        datasets: [{
            label: "Percentage Score " + props.title1,
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: 'rgba(144,238,144,10)',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value[props.title1].toFixed(2)))
        },
        {
            label: "Percentage Score " + props.title2,
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: 'rgba(255,165,0,10)',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value[props.title2].toFixed(2)))
        }]
    } : null;

    const line = stateLine !== null ? (<Line
        data={stateLine}
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
                display: false,
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
export { DualLineChart };