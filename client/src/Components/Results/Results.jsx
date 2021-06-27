import React, { Component } from "react";
import styles from "./Results.module.css";

export default class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Results
                </div>
                <div className={styles.result}>
                    Overall, you did decent!
                </div>
                <ul>
                    <li><a href="/transition" className={styles.redirect}>Retry</a></li>
                    <li><a href="/starter" className={styles.redirect}>Head back to start</a></li>
                </ul>
            </div>
        )
    }
}