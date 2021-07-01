import React, { Component } from "react";
import styles from "./Starter.module.css";
import starterImage from "../../Assets/Images/StarterImage2.png";

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
                        Here you will train to shoot different size
                        targets as fast as you can.
                    </div>
                </div>
                <div className={styles.start}>
                    Click to Start NOW!
                </div>
            </div>
        )
    }
}