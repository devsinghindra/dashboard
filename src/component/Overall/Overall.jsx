import React, { useState } from "react";
import styles from "./Overall.module.css";
import LineChart, { DualLineChart } from "../charts/LineChart/LineChart";
import BarChart, { ScoreBarChart } from "../charts/BarChart/BarChart";
import { getWeekData, getMonthData } from "../../services/utilities";

function Overall(props) {
    const [tabTitle, setTabTitle] = useState("Joy");

    function onSelect(tabName) {
        let tempTitle = "Joy";
        switch (tabName) {
            case "Joy": tempTitle = "Joy"; break;
            case "Sad": tempTitle = "Sad"; break;
            case "Anger": tempTitle = "Anger"; break;
            case "Fear": tempTitle = "Fear"; break;
            default: tempTitle = "Joy";
        }
        setTabTitle(tempTitle);
    }

    // console.log(props.data, "overall");
    let weekData = [], monthData = [];
    if (props.data.length !== 0) {
        monthData = getMonthData(props.data);
        weekData = getWeekData(props.data);
        console.log(monthData, "month");
        console.log(weekData, "week");
    }

    // console.log(props.data, "hereoverall")
    return (
        <div className={styles.Container}>
            <div className={styles.Score}>
                {props.data.length !== 0 && <DualLineChart title1="polarity" title2="subjectivity" sentiment={props.data} />}
            </div>
            <div className={styles.Monthly}>
                {props.data.length !== 0 && <ScoreBarChart heading="Monthly" sentiment={monthData} />}
            </div>
            <div className={styles.Weekly}>
                {props.data.length !== 0 && <ScoreBarChart heading="Weekly" sentiment={weekData} />}

            </div>
            <div className={styles.Tabs}>
                <Tab title="Joy" onSelect={onSelect} />
                <Tab title="Sad" onSelect={onSelect} />
                <Tab title="Anger" onSelect={onSelect} />
                <Tab title="Fear" onSelect={onSelect} />
            </div>
            <div className={styles.TabsDaily}>
                {props.data.length !== 0 && <LineChart title={tabTitle.toLowerCase()} sentiment={props.data} />}
            </div>
            <div >
                {props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={monthData} />}
            </div>
            <div >
                {props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={weekData} />}
            </div>
        </div>
    );
}

function Tab(props) {
    return (
        <div className={styles.Tab} onClick={() => props.onSelect(props.title)}>
            <h1> {props.title}</h1>
        </div>
    );
}

export default Overall;