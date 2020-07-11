import React from "react";
import { Line } from "react-chartjs-2";

import styles from "./LineChart.module.css";


const colors = {
    joy: "#fddb22",
    anger: "#ff1f1f",
    sad: "#3333ff",
    fear: "#3d3d3d"
}

function LineChart(props) {
    const stateLine = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.date),
        datasets: [{
            label: "Percentage Score " + props.title,
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: colors[props.title.toLowerCase()],
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
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
            data: props.sentiment.map(d => (d.value[props.title1].toFixed(2))),
            yAxisID: "polarity"
        },
        {
            label: "Percentage Score " + props.title2,
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: 'rgba(255,165,0,10)',
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value[props.title2].toFixed(2))),
            yAxisID: "subjectivity"
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: "polarity",
                        type: "linear",
                        position: "left",
                        ticks: {
                            // beginAtZero: true
                        }
                    }, {
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
                        },
                        id: "subjectivity",
                        type: "linear",
                        position: "right",
                        ticks: {
                            // beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
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


function MultiLineChart(props) {
    const stateLine = props.sentiment.length !== 0 ? {
        labels: props.sentiment.map(d =>
            d.date),
        datasets: [{
            label: "Percentage Joy",
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: colors.joy,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value.joy.toFixed(2)))
        }, {
            label: "Percentage Sad",
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: colors.sad,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value.sad.toFixed(2)))
        }, {
            label: "Percentage Anger",
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: colors.anger,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value.anger.toFixed(2)))
        }, {
            label: "Percentage Fear",
            fill: false,
            backgroundColor: 'black',
            lineTension: .5,
            borderColor: colors.fear,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.value.fear.toFixed(2)))
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Percentage'
                        },
                        ticks: {
                            beginAtZero: true
                        }
                    }
                ],
                xAxes: [
                    {
                        scaleLabel: {
                            display: true,
                            labelString: 'Date'
                        }
                    }
                ]
            },
            title: {
                display: true,
                text: "Percentage Emotion per day",
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
export { DualLineChart, MultiLineChart };