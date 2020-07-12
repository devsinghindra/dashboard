import React from "react";
import { Bar } from "react-chartjs-2";

import styles from "./BarChart.module.css";

const colors = {
    joy: "#fddb22",
    anger: "#ff1f1f",
    sad: "#3333ff",
    fear: "#3d3d3d",
    subjectivity: "#0047fc",
    polarity: "#1f7bac"
}


function BarChart(props) {
    let monthly = props.monthly;
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
                            labelString: monthly ? "Month" : "Week"
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


function MultiBarChart(props) {
    let monthly = props.monthly;
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
            label: "Joy",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.joy,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.joy.toFixed(2)))
        }, {
            label: "Sad",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.sad,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.sad.toFixed(2)))
        }, {
            label: "Anger",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.anger,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.anger.toFixed(2)))
        }, {
            label: "Fear",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.fear,
            borderWidth: 2,
            data: props.sentiment.map(d => (d.fear.toFixed(2)))
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
                            labelString: monthly ? "Month" : "Week"
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
                <div className={styles.Chart} style={{ overflowX: "scroll", width: "600px" }}>
                    <div className={styles.ChartElement} style={monthly ? {} : { width: "1000px" }}>
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}

function FrequencyBarChart(props) {
    //here prop is object
    let score = props.score;
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Frequency'
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
                            labelString: score ? "Score Range" : "Percentage Range"
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

function MultiFrequencyBarChart(props) {
    //here prop is array of object of all emotions
    const stateBar = props.sentiment.length !== 0 ? {
        labels: Object.keys(props.sentiment[0]),
        datasets: [{
            label: "Joy",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.joy,
            borderWidth: 2,
            data: Object.values(props.sentiment[0])
        }, {
            label: "Sad",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.sad,
            borderWidth: 2,
            data: Object.values(props.sentiment[1])
        }, {
            label: "Anger",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.anger,
            borderWidth: 2,
            data: Object.values(props.sentiment[2])
        }, {
            label: "Fear",
            fill: false,
            barThickness: 12,
            backgroundColor: colors.fear,
            borderWidth: 2,
            data: Object.values(props.sentiment[3])
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Frequency'
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
                            labelString: "Percentage Range"
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
                    <div className={styles.ChartElement} >
                        {bar}
                    </div>
                </div>
            </div>
        </>
    );
}

function ScoreBarChart(props) {
    let monthly = props.monthly;
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
                        scaleLabel: {
                            display: true,
                            labelString: 'Score'
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
                            labelString: monthly ? "Month" : props.sentiment.length === 1 ? "" : "Week"
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
export { ScoreBarChart, FrequencyBarChart, MultiBarChart, MultiFrequencyBarChart };