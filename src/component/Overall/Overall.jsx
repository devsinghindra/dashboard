import React, { useState } from "react";
import styles from "./Overall.module.css";
import LineChart, { DualLineChart } from "../charts/LineChart/LineChart";
import BarChart, { ScoreBarChart } from "../charts/BarChart/BarChart";
import { getWeekData, getMonthData } from "../../services/utilities";
import { NativeSelect, FormControl } from "@material-ui/core";

function Overall(props) {
    const [tabTitle, setTabTitle] = useState("Joy");  //to display selected emotion on selected tab
    const [scoreType, setScoreType] = useState("Monthly"); //monthly or weekly for score
    const [emotionType, setEmotionType] = useState("Monthly"); //monthly or weekly for emotion

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
        // console.log(monthData, "month");
        // console.log(weekData, "week");
    }

    function handleScorePicker(what) {
        console.log(what);
        setScoreType(what);
    }

    function handleEmotionPicker(what) {
        console.log(what);
        setEmotionType(what);
    }

    // console.log(props.data, "hereoverall")
    return (
        <div className={styles.Container}>
            <div className={styles.Score}>
                {props.data.length !== 0 && <DualLineChart title1="polarity" title2="subjectivity" sentiment={props.data} />}
            </div>
            <div className={styles.Monthly}>
                <div className={styles.Heading}>
                    <h1>{scoreType}</h1>
                    <Picker handlePicker={handleScorePicker} />
                </div>
                {scoreType === "Monthly" && props.data.length !== 0 && <ScoreBarChart heading="" sentiment={monthData} />}
                {scoreType === "Weekly" && props.data.length !== 0 && <ScoreBarChart heading="" sentiment={weekData} />}
            </div>
            <div className={styles.Frequency}>
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
            <div className={styles.TabsMonthly}>
                <div className={styles.Heading}>
                    <h1>{emotionType}</h1>
                    <Picker handlePicker={handleEmotionPicker} />
                </div>
                {emotionType === "Monthly" && props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={monthData} />}
                {emotionType === "Weekly" && props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={weekData} />}
            </div>
            <div className={styles.TabsFrequency}>
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

function Picker(props) {
    return (
        <FormControl className={styles.Picker} >
            <NativeSelect defaultValue="Monthly" onChange={(e) => props.handlePicker(e.target.value)} className={styles.Select}>
                <option value="Monthly">Monthly</option>
                <option value="Weekly">Weekly</option>
            </NativeSelect>
        </FormControl>
    );
}

export default Overall;