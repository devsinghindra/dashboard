import React from "react";
import { DateRange, ShowChart, Assessment } from "@material-ui/icons";
import styles from "./Navbar.module.css";

function Navbar(props) {
    return (
        <div className={styles.Container}>
            <div className={styles.Item} onClick={() => props.onSelect("Date")}>
                <DateRange />
                <h1>Date</h1>
            </div>
            <div className={styles.Item} onClick={() => props.onSelect("Overall")}>
                <Assessment />
                <h1>Overall</h1>
            </div>
            <div className={styles.Item} onClick={() => props.onSelect("Tracker")}>
                <ShowChart />
                <h1>Tracker</h1>
            </div>
        </div>
    );
}

export default Navbar;