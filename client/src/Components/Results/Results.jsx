import React, { Component } from "react";
import styles from "./Results.module.css";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";

export default class Results extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={backgroundImage} className={styles.image}/>
                <div className={styles.title}>
                    Results
                </div>
                <div className={styles.result}>
                    Overall, you did decent!
                </div>
                <ul className={styles.redirects}>
                    <li><a href="/transition" className={styles.redirect}>Retry</a></li>
                    <li><a href="/starter" className={styles.redirect}>Head back to start</a></li>
                </ul>
            </div>
        )
    }
}