import React from "react";
import { Line, Bar } from "react-chartjs-2";
import styles from "./DualChart.module.css";


function DualChart(props) {

    let state;
    let graph;
    //checking for line graph
    if (props.line) {

        state = props.sentiment.length !== 0 ? {
            labels: props.sentiment.map(d =>
                d.date),
            datasets: [{
                label: "Percentage Score " + props.title,
                fill: false,
                backgroundColor: 'rgba(75,192,192,1)',
                lineTension: .5,
                borderColor: 'rgba(0,0,0,10',
                borderWidth: 2,
                data: props.sentiment.map(d => (d.value.polarity))
            }, {
                label: "Percentage Score " + props.title,
                fill: false,
                backgroundColor: 'rgba(255,2,192,1)',
                lineTension: .5,
                borderColor: 'rgba(0,0,0,10',
                borderWidth: 2,
                data: props.sentiment.map(d => (d.value.subjectivity))
            }
            ]
        } : null;

        graph = state !== null ? (<Line
            data={state}
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

    } else {
        state = props.sentiment.length !== 0 ? {
            labels: props.sentiment.map(d =>
                d.date),
            datasets: [{
                label: "Percentage Score " + props.title,
                fill: false,
                barThickness: 12,
                backgroundColor: 'rgba(75,192,192,.5)',
                borderColor: 'rgba(0,0,0,10',
                borderWidth: 2,
                data: props.sentiment.map(d => (d.value.polarity)),
            }, {
                label: "Subjectivity Score " + props.title,
                fill: false,
                barThickness: 12,
                backgroundColor: 'rgba(255,0,0,.5)',
                borderColor: 'rgba(0,0,0,10',
                borderWidth: 2,
                data: props.sentiment.map(d => (d.value.subjectivity)),
            }
            ],
            options: {
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
        } : null;

        graph = state !== null ?
            (<><Bar
                data={
                    {
                        labels: state.labels,
                        datasets: [state.datasets[0]]
                    }
                }
                options={state.options} />

                <Bar
                    data={
                        {
                            labels: state.labels,
                            datasets: [state.datasets[1]]
                        }
                    }
                    options={state.options} />
            </>) : null;
    }



    return (<>
        <div className={styles.Container}>
            <div className={styles.Chart}>
                <div className={styles.ChartElement}>
                    {graph}
                </div>
            </div>
        </div>
    </>
    );
}

export default DualChart;