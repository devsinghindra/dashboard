import React, { useState, useEffect, useRef } from "react";
import { fetchDailyData } from "../../../services/api";
import { Line, Bar } from "react-chartjs-2";
import styles from "./Chart.module.css";

function Chart({ data: { confirmed, recovered, deaths }, country }) {
    const [dailyData, setDailyData] = useState([]);
    const isCancelled = useRef(false);//prevent memory leaks performs only api calls when component is loaded to dom

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        if (!isCancelled.current)
            fetchAPI();
        return () => {
            isCancelled.current = true;
        }
        // console.log(dailyData);
    }, []);

    const lineChart = (
        dailyData.length !== 0 ? (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: "Infected",
                        borderColor: "#3333ff",
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: "Deaths",
                        borderColor: "#red",
                        backgroundColor: "rgba(255,0,0,0.5)",
                        fill: true,
                    }],
                }}
            />) : null
    );

    const barChart = (
        confirmed ? (
            <Bar
                data={{
                    labels: ["Infected", "Recovered", "Deaths"],
                    datasets: [{
                        label: "People",
                        backgroundColor: [
                            "rgba(0,0 , 255, 0.75)",
                            "rgba(0,255 , 0, 0.75)",
                            "rgba(255,0 , 0, 0.75)"
                        ],
                        data: [confirmed.value, recovered.value, deaths.value]
                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: "Current state in " + country },
                }}
            />
        ) : null
    );

    return (
        <div className={styles.container}>
            {country ? barChart : lineChart}
        </div>
    );
}

export default Chart;