import React, { Component } from "react";
import styles from "./Starter.module.css";
import starterImage from "../../Assets/Background/starter_background.png";

/**
 * Starter is the initial (default) page that a user begins at
 * when the aim trainer loads up.
 */
export default class Starter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={starterImage} className={styles.image}/>
                <div className={styles.title} >
                    THE BEST ONLINE FPS AIM TRAINER
                </div>
                <div>
                    <div className={styles.message}>
                        Welcome to the Aim Trainer,
                        here you will train to shoot different size
                        targets as fast as you can.
                    </div>
                </div>
                <div className={styles.start}>
                    <a href="/map" className={styles.link}>Click to Start NOW!</a>
                </div>
            </div>
        )
    }
}