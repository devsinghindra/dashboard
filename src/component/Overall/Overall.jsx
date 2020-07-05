import React from "react";
import styles from "./Overall.module.css";

function Overall() {
    return (
        <div className={styles.Container}>
            <div className={styles.Score}>
                daily data
            </div>
            <div className={styles.Monthly}>
                monthly weekly
            </div>
            <div className={styles.Monthly}>
                monthly weekly
            </div>
            <div className={styles.Tabs}>
                <Tab title="Happy" />
                <Tab title="Sad" />
                <Tab title="Anger" />
                <Tab title="Disgust" />
            </div>
            <div className={styles.Score}>
                daily data
            </div>
            <div className={styles.Monthly}>
                monthly weekly
            </div>
            <div className={styles.Monthly}>
                monthly weekly
            </div>
        </div>
    );
}

function Tab(props) {
    return (
        <div className={styles.Tab}>
            <h1> {props.title}</h1>
        </div>
    );
}

export default Overall;