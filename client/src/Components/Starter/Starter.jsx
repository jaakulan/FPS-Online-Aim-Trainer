import React, { Component } from "react";
import styles from "./Starter.module.css";

export default class Starter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                Welcome to the Aim Trainer,
                Here you will train to shoot different size
                targets as fast as you can.
            </div>
        )
    }
}