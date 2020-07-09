import React from 'react';
import { Pie } from 'react-chartjs-2';
import { mean } from "d3";

import styles from "./PieChart.module.css";

const colors = {
    happy: "#fddb22",
    anger: "#ff1f1f",
    sad: "#3333ff",
    fear: "#3d3d3d"
}

function PieChart(props) {

    const getMean = () => {
        let meanArray = [];
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.joy;
            }).toFixed(2),
            title: "Joy"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.anger;
            }).toFixed(2),
            title: "Anger"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.sad;
            }).toFixed(2),
            title: "Sad"
        }
        );
        meanArray.push({
            avg: mean(props.sentiment, (d) => {
                return d.value.fear;
            }).toFixed(2),
            title: "Fear"
        }
        );
        return meanArray;
    }

    const statePie = props.sentiment.length !== 0 ? {
        labels: getMean().map(d => (d.title)),
        datasets: [{
            borderColor: 'rgba(0,0,0,10)',
            borderWidth: 2,
            data: getMean().map(d => (d.avg)),
            backgroundColor: Object.values(colors),
            hoverBackgroundColor: Object.values(colors)
        }
        ]
    } : null;

    const pie = statePie !== null ? (<Pie
        data={statePie}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            // title: {
            //     display: true,
            //     text: "Emotion Pie Chart",
            //     fontSize: 20
            // },
            legend: {
                display: true,
                position: "bottom"
            }
        }
        }
    />) : null;;
    return (
        <>
            <div className={styles.Container}>
                {/* <h1>Hello from PieChart</h1> */}
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