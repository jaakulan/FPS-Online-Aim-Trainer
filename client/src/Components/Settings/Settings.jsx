import React, { Component } from "react";
import styles from "./Settings.module.css";

export default class Settings extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Choose your Speeed and sizes for targets!
                    <hr />
                </div>
                <div className={styles.row} >
                    Speed:
                    <div className={styles.speedSlider}>
                        <input type="range" min="1" max="100" className={styles.slider} />
                    </div>
                </div>
                <div className={styles.row} >
                    Size:
                </div>
            </div>
        )
    }
}