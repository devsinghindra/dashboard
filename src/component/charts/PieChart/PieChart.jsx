import React from 'react';
import { Doughnut } from 'react-chartjs-2';

import styles from "./PieChart.module.css";

const colors = {
    joy: "#fddb22",
    anger: "#ff1f1f",
    sad: "#3333ff",
    fear: "#3d3d3d"
}

function PieChart(props) {

    const statePie = props.sentiment.length !== 0 ? {
        labels: Object.keys(colors),
        datasets: [{
            borderColor: 'rgba(255,255,255,10)',
            borderWidth: 2,
            data: props.sentiment.map(d => +d.toFixed(2)),
            backgroundColor: Object.values(colors),
            hoverBackgroundColor: Object.values(colors),
        },
        ],
    } : null;

    const pie = statePie !== null ? (<Doughnut
        data={statePie}
        options={{
            responsive: true,
            maintainAspectRatio: false,
            // title: {
            //     display: true,
            //     text: "Emotion Pie Chart",
            //     fontSize: 20
            // },
            cutoutPercentage: 70,
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