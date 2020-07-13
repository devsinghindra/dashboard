import React, { useState } from "react";
import styles from "./Overall.module.css";
import LineChart, { DualLineChart, MultiLineChart } from "../charts/LineChart/LineChart";
import BarChart, { ScoreBarChart, FrequencyBarChart, MultiBarChart, MultiFrequencyBarChart } from "../charts/BarChart/BarChart";
import { getWeekData, getMonthData } from "../../services/utilities";
import { NativeSelect, FormControl, CircularProgress } from "@material-ui/core";
import * as freq from "../../services/frequency";
import SimpleCard from "../ui/Cards/SimpleCard";

const spinner = <CircularProgress />;
const text = "Analyze overall sentiment score,emotion analysis generated from our custom ML model.";
const why = "Subjectivity analyzes expression ,opinion feeling of text and Polarity refer overall orientation of emotion in text.Also we analyzed happy,sad,angaer,fear which show emotion.These all help in better understanding public sentiment";


function Overall(props) {
    const [tabTitle, setTabTitle] = useState("Emotions");  //to display selected emotion on selected tab
    const [scoreType, setScoreType] = useState("Monthly"); //monthly or weekly for score
    const [scoreFrequency, setScoreFrequency] = useState("Subjectivity"); //frequency for score
    const [emotionType, setEmotionType] = useState("Monthly"); //monthly or weekly for emotion
    const [emotionFrequency, setEmotionFrequency] = useState("Overall"); //frequency for emotion

    function onSelect(tabName) {
        setTabTitle(tabName);
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
        // console.log(tabTitle, "emottionpicker");
        setEmotionType(what);
    }

    function handleScoreFrequency(what) {
        // console.log(what);
        setScoreFrequency(what);
    }

    function handleEmotionFrequency(what) {
        // console.log(what);
        setEmotionFrequency(what);
    }

    function freqEmotionAll(tabName) {
        // console.log(tabName, tabTitle);
        let o = {};
        switch (tabName) {
            case "Sad": o = freq.freqSad(props.data); break;
            case "Fear": o = freq.freqFear(props.data); break;
            case "Anger": o = freq.freqAnger(props.data); break;
            default: o = freq.freqJoy(props.data);
        }
        return o;
    }

    //get freq10 of all 4 emotions
    function freq10All() {
        let emo = ["Joy", "Sad", "Anger", "Fear"];
        //array of object with all emotion freq 10;
        let res = [];
        for (let i = 0; i < emo.length; i++) {
            res.push(freq.freq10(props.data, emo[i]));
        }
        return res;
    }
    // console.log(props.data, "hereoverall")
    return (
        <div className={styles.Container}>
            <div className={styles.Text}>
                <span>{text}</span>
                <h1>Why</h1>
                <span>{why}</span>
            </div>
            <div className={styles.Card}>
                <SimpleCard count={5000} content="Tweets per day" />
                <SimpleCard count={4} content="Emotions" />
                <SimpleCard count={2} content="Score analysis" />
                <SimpleCard count={5} content="Analysis method" />
            </div>
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
                {scoreType === "Monthly" && props.data.length !== 0 && <ScoreBarChart monthly sentiment={monthData} />}
                {scoreType === "Weekly" && props.data.length !== 0 && <ScoreBarChart sentiment={weekData} />}
            </div>
            <div className={styles.Frequency}>
                <div className={styles.Heading}>
                    <h1>Frequency</h1>
                    <Picker option1={"Subjectivity"} option2={"Polarity"} handlePicker={handleScoreFrequency} />
                </div>
                {(props.data.length !== 0 && scoreFrequency === "Subjectivity") && <FrequencyBarChart title={"Subjectivity"} score sentiment={freq.freqSubjectivity(props.data)} />}
                {(props.data.length !== 0 && scoreFrequency === "Polarity") && <FrequencyBarChart title={"Polarity"} score sentiment={freq.freqPolarity(props.data)} />}
            </div>
            {/* Emotions section here */}
            <div className={styles.Tabs}>
                <Tab title="Emotions" onSelect={onSelect} />
                <Tab title="Joy" onSelect={onSelect} />
                <Tab title="Sad" onSelect={onSelect} />
                <Tab title="Anger" onSelect={onSelect} />
                <Tab title="Fear" onSelect={onSelect} />
            </div>
            <div className={styles.TabsDaily}>
                <div className={styles.Heading}>
                    <h1>{tabTitle + " Daily"}</h1>
                </div>
                {props.data.length === 0 && spinner}
                {props.data.length !== 0 && tabTitle === "Emotions" && <MultiLineChart sentiment={props.data} />}
                {props.data.length !== 0 && tabTitle !== "Emotions" && <LineChart title={tabTitle.toLowerCase()} sentiment={props.data} />}
            </div>
            <div className={styles.TabsMonthly}>
                <div className={styles.Heading}>
                    <h1>{emotionType}</h1>
                    <Picker option1={"Monthly"} option2={"Weekly"} handlePicker={handleEmotionPicker} />
                </div>

                {emotionType === "Monthly" && props.data.length !== 0 && tabTitle === "Emotions" && <MultiBarChart monthly sentiment={monthData} />}
                {emotionType === "Weekly" && props.data.length !== 0 && tabTitle === "Emotions" && <MultiBarChart sentiment={weekData} />}
                {emotionType === "Monthly" && props.data.length !== 0 && tabTitle !== "Emotions" && <BarChart monthly title={tabTitle.toLowerCase()} sentiment={monthData} />}
                {emotionType === "Weekly" && props.data.length !== 0 && tabTitle !== "Emotions" && <BarChart title={tabTitle.toLowerCase()} sentiment={weekData} />}
            </div>
            <div className={styles.TabsFrequency}>
                <div className={styles.Heading}>
                    <h1>Frequency</h1>
                    {tabTitle !== "Emotions" && <Picker option1={"Overall"} option2={"Details"} handlePicker={handleEmotionFrequency} />}
                </div>
                {(props.data.length !== 0 && tabTitle === "Emotions" && emotionFrequency === "Overall") && <MultiFrequencyBarChart title={tabTitle} sentiment={freq10All()} />}
                {(props.data.length !== 0 && tabTitle !== "Emotions" && emotionFrequency === "Overall") && <FrequencyBarChart title={tabTitle} sentiment={freq.freq10(props.data, tabTitle)} />}
                {(props.data.length !== 0 && tabTitle !== "Emotions" && emotionFrequency === "Details") && <FrequencyBarChart title={tabTitle} sentiment={freqEmotionAll(tabTitle)} />}
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