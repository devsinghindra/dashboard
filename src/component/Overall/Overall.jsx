import React, { useState, useEffect } from "react";
import cloudDB from "../../services/firebase";
import styles from "./Overall.module.css";
import LineChart from "../charts/LineChart/LineChart";
import BarChart from "../charts/BarChart/BarChart";

function Overall() {
    const [data, setData] = useState([]);
    const [tabData, setTabData] = useState([]);
    const [tabTitle, setTabTitle] = useState("Happy");

    const fetchData = async () => {
        let sentimentData = [];
        try {
            await cloudDB.collection("sentiment").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    sentimentData.push(
                        {
                            date: doc.id,
                            value: doc.data()
                        }
                    );
                });
            });
            setData(sentimentData);
        } catch (error) {
            console.log(error);

        }
    }
    useEffect(() => {
        fetchData();

        setTabData(data.map(d => { return { y: d.date, x: d.joy } }));
    }, []);
    const monthlyData = (ar) => {
        return ar.filter((d, idx) => {
            return idx < 10;
        });
    }

    function onSelect(tabName) {
        let tempArray = [];
        let tabTitle = "Happy";
        switch (tabName) {
            case "Happy": tempArray = data.map(d => { return { y: d.date, x: d.value.joy } }); tabTitle = "Happy"; break;
            case "Sad": tempArray = data.map(d => { return { y: d.date, x: d.value.sad } }); tabTitle = "Sad"; break;
            case "Anger": tempArray = data.map(d => { return { y: d.date, x: d.value.anger } }); tabTitle = "Anger"; break;
            case "Disgust": tempArray = data.map(d => { return { y: d.date, x: d.value.fear } }); tabTitle = "Disgust"; break;
            default: tempArray = data.map(d => { return { y: d.data, x: d.joy } });
        }
        setTabTitle(tabTitle);
        setTabData(tempArray);
    }

    console.log(data, "here")
    return (
        <div className={styles.Container}>
            <div className={styles.Score}>
                {data.length !== 0 && <LineChart heading="Daily Data" sentiment={data.map(d => { return { y: d.date, x: +d.value.polarity.toFixed(2) } })} />}
            </div>
            <div className={styles.Monthly}>
                {data.length !== 0 && <BarChart heading="Monthly" sentiment={monthlyData(data).map(d => { return { y: d.date, x: +d.value.subjectivity.toFixed(2) } })} />}
            </div>
            <div className={styles.Subjectivity}>
                {data.length !== 0 && <BarChart heading="Weekly" sentiment={monthlyData(data).map(d => { return { y: d.date, x: +d.value.polarity.toFixed(2) } })} />}

            </div>
            <div className={styles.Tabs}>
                <Tab title="Happy" onSelect={onSelect} />
                <Tab title="Sad" onSelect={onSelect} />
                <Tab title="Anger" onSelect={onSelect} />
                <Tab title="Disgust" onSelect={onSelect} />
            </div>
            <div className={styles.TabsDaily}>
                {tabData.length !== 0 && <LineChart heading={tabTitle} sentiment={tabData} />}
            </div>
            <div >
                {tabData.length !== 0 && <BarChart heading={tabTitle} sentiment={monthlyData(tabData)} />}
            </div>
            <div >
                {tabData.length !== 0 && <BarChart heading={tabTitle} sentiment={monthlyData(tabData)} />}
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