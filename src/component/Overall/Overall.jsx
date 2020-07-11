import React, { useState } from "react";
import styles from "./Overall.module.css";
import LineChart, { DualLineChart } from "../charts/LineChart/LineChart";
import BarChart, { ScoreBarChart, FrequencyBarChart } from "../charts/BarChart/BarChart";
import { getWeekData, getMonthData } from "../../services/utilities";
import { NativeSelect, FormControl, CircularProgress } from "@material-ui/core";
import * as freq from "../../services/frequency";

const spinner = <CircularProgress />;

function Overall(props) {
    const [tabTitle, setTabTitle] = useState("Joy");  //to display selected emotion on selected tab
    const [scoreType, setScoreType] = useState("Monthly"); //monthly or weekly for score
    const [scoreFrequency, setScoreFrequency] = useState("Subjectivity"); //frequency for score
    const [emotionType, setEmotionType] = useState("Monthly"); //monthly or weekly for emotion
    const [emotionFrequency, setEmotionFrequency] = useState("Overall"); //frequency for emotion
    const [tabFreq, setTabFreq] = useState({}); //frequency for emotion tab object

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
        // console.log(what);
        setScoreType(what);
    }

    function handleEmotionPicker(what) {
        // console.log(what);
        setEmotionType(what);
    }

    function handleScoreFrequency(what) {
        // console.log(what);
        setScoreFrequency(what);
    }

    function handleEmotionFrequency(what) {
        console.log(what);
        setEmotionFrequency(what);
        let o = {};
        switch (tabTitle) {
            case "Sad": o = freq.freqSad(props.data); break;
            case "Fear": o = freq.freqFear(props.data); break;
            case "Anger": o = freq.freqAnger(props.data); break;
            default: o = freq.freqJoy(props.data);
        }
        setTabFreq(o);
    }

    // console.log(props.data, "hereoverall")
    return (
        <div className={styles.Container}>
            <div className={styles.Score}>
                <div className={styles.Heading}>
                    <h1>Score Daily</h1>
                </div>
                {props.data.length !== 0 ? <DualLineChart title1="polarity" title2="subjectivity" sentiment={props.data} /> : spinner}
            </div>
            <div className={styles.Monthly}>
                <div className={styles.Heading}>
                    <h1>{scoreType}</h1>
                    <Picker option1={"Monthly"} option2={"Weekly"} handlePicker={handleScorePicker} />
                </div>
                {scoreType === "Monthly" && props.data.length !== 0 && <ScoreBarChart sentiment={monthData} />}
                {scoreType === "Weekly" && props.data.length !== 0 && <ScoreBarChart sentiment={weekData} />}
            </div>
            <div className={styles.Frequency}>
                <div className={styles.Heading}>
                    <h1>Frequency</h1>
                    <Picker option1={"Subjectivity"} option2={"Polarity"} handlePicker={handleScoreFrequency} />
                </div>
                {(props.data.length !== 0 && scoreFrequency === "Subjectivity") && <FrequencyBarChart title={"Subjectivity"} sentiment={freq.freqSubjectivity(props.data)} />}
                {(props.data.length !== 0 && scoreFrequency === "Polarity") && <FrequencyBarChart title={"Polarity"} sentiment={freq.freqPolarity(props.data)} />}
            </div>
            <div className={styles.Tabs}>
                <Tab title="Joy" onSelect={onSelect} />
                <Tab title="Sad" onSelect={onSelect} />
                <Tab title="Anger" onSelect={onSelect} />
                <Tab title="Fear" onSelect={onSelect} />
            </div>
            <div className={styles.TabsDaily}>
                <div className={styles.Heading}>
                    <h1>{tabTitle + " Daily"}</h1>
                </div>
                {props.data.length !== 0 ? <LineChart title={tabTitle.toLowerCase()} sentiment={props.data} /> : spinner}
            </div>
            <div className={styles.TabsMonthly}>
                <div className={styles.Heading}>
                    <h1>{emotionType}</h1>
                    <Picker option1={"Monthly"} option2={"Weekly"} handlePicker={handleEmotionPicker} />
                </div>
                {emotionType === "Monthly" && props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={monthData} />}
                {emotionType === "Weekly" && props.data.length !== 0 && <BarChart title={tabTitle.toLowerCase()} sentiment={weekData} />}
            </div>
            <div className={styles.TabsFrequency}>
                <div className={styles.Heading}>
                    <h1>Frequency</h1>
                    <Picker option1={"Overall"} option2={"Details"} handlePicker={handleEmotionFrequency} />
                </div>
                {(props.data.length !== 0 && emotionFrequency === "Overall") && <FrequencyBarChart title={tabTitle} sentiment={freq.freq10(props.data, tabTitle)} />}
                {(props.data.length !== 0 && emotionFrequency === "Details") && <FrequencyBarChart title={tabTitle} sentiment={tabFreq} />}
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
            <NativeSelect defaultValue={props.option1} onChange={(e) => props.handlePicker(e.target.value)} className={styles.Select}>
                <option value={props.option1}>{props.option1}</option>
                <option value={props.option2}>{props.option2}</option>
            </NativeSelect>
        </FormControl>
    );
}

export default Overall;