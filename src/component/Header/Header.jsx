import React from "react";
import styles from "./Header.module.css";

function Header(props) {
    return (
        <>
            <div className={styles.Container} onClick={() => props.onSelect("dashboard")}>
                <h1 >DashBoard</h1>
            </div>
        </>
    );
}

export default Header;