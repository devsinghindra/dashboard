import React from "react";
import { NavLink } from "react-router-dom";
import { Dashboard } from "@material-ui/icons";

import styles from "./Header.module.css";

function Header(props) {
    return (
        <>
            <div className={styles.Container}>
                <NavLink to="/" className={styles.NavItem}>
                    <Dashboard />
                    <h1 >DashBoard</h1>
                </NavLink>
            </div>
        </>
    );
}

export default Header;