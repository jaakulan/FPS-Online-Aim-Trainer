import React, { Component } from "react";
import styles from "./Transition.module.css";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";

export default class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 5,
        };
    }

    componentDidMount() {
        console.log("hello");
        const timer = setInterval(() =>{
            if (this.state.countdown > 0) {
                this.setState({countdown: this.state.countdown - 1});
            }
        }, 1000);
    }

    decrementCountdown = () => {
        this.setState({ countdown: this.state.countdown - 1});
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={backgroundImage} className={styles.image}/>
                <div className={styles.title}>
                    Shoot the targets as they appear! As fast as you can, it will only take 1 bullet
                    (click). Targets will be smiley faces of different sizes! Good Luck!
                </div>
                <div className={styles.countdown}>
                    Beginning in ...{this.state.countdown}
                </div>
            </div>
        )
    }
}