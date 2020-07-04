import React from 'react';
import { Pie } from 'react-chartjs-2';
import { mean } from "d3";

import styles from "./PieChart.module.css";

function PieChart(props) {

    const getMean = () => {
        let meanArray = [];
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.joy;
            }),
            title: "Joy"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.anger;
            }),
            title: "Anger"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.sad;
            }),
            title: "Sad"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.fear;
            }),
            title: "Fear"
        }
        );
        return meanArray;
    }

    const statePie = props.sentiment.length !== 0 ? {
        labels: getMean().map(d => (d.title)),
        datasets: [{
            label: "Percentage Score ",
            fill: false,
            borderColor: 'rgba(0,0,0,10)',
            borderWidth: 2,
            data: getMean().map(d => (d.avg)),
            backgroundColor: [
                'yellow',
                'red',
                'grey',
                'blue'
            ],
            hoverBackgroundColor: [
                'yellow',
                'red',
                'grey',
                'blue'
            ]
        }
        ]
    } : null;

    const pie = statePie !== null ? (<Pie
        data={statePie}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            title: {
                display: true,
                text: "Percentage Score overall",
                fontSize: 20
            },
            legend: {
                display: true,
                position: "right"
            }
        }
        }
    />) : null;;
    return (
        <>
            <div className={styles.Container}>
                <h1>Hello from PieChart</h1>
                <div className={styles.Chart}>
                    <div className={styles.ChartElement}>
                        {pie}
                    </div>
                </div>
            </div>
        </>
    );

}

export default PieChart;