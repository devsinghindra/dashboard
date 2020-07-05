import React from "react";
import styles from "./Navbar.module.css";

function Navbar(props) {
    return (
        <div className={styles.Container}>
            <div className={styles.Item} onClick={() => props.onSelect("Date")}>
                <h1>Date</h1>
            </div>
            <div className={styles.Item} onClick={() => props.onSelect("Overall")}>
                <h1>Overall</h1>
            </div>
            <div className={styles.Item} onClick={() => props.onSelect("Prediction")}>
                <h1>Prediction</h1>
            </div>
        </div>
    );
}

export default Navbar;