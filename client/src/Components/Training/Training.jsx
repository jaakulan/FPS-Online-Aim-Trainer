import React, { Component } from "react";
import styles from "./Training.module.css";

export default class Training extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Training
                </div>
            </div>
        )
    }
}