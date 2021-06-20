import React, { Component } from "react";
import styles from "./Transition.module.css";

export default class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 5,
        };
    }

    componentDidMount() {
        for (let i = 5; i < this.state.countdown; i--) {
            setInterval(function() {
                this.setState({
                    countdown: this.state.countdown - 1,
                });
            }, 1000);
            console.log(this.state.countdown);
        }
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Shoot the targets as they appear! As fast as you can, it will only take 1 bullet
                    (click). Targets will be smiley faces of different sizes! Good Luck!
                </div>
                <div>
                    Beginning in ...{this.state.countdown}
                </div>
            </div>
        )
    }
}