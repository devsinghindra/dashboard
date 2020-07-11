import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Header.module.css";

function Header(props) {
    return (
        <>
            <div className={styles.Container}>
                <NavLink to="/" className={styles.NavItem}>
                    <h1 >DashBoard</h1>
                </NavLink>
            </div>
        </>
    );
}

export default Header;