import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import styles from "./Transition.module.css";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";

/**
 * Transition is a component that is set as an intermediate page
 * between a user selecting their preferences and the actual aim
 * training.
 */
export default class Transition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            countdown: 5,
            redirect: false,
        };

    }

    /**
     * ComponentDidMount in this component is used for the countdown
     */
    componentDidMount() {
        const timer = setInterval(() =>{
            if (this.state.countdown > 0) {
                this.setState({countdown: this.state.countdown - 1});
            } else if (this.state.countdown === 0) {
                this.setState({ redirect: true });
            }
        }, 1000);
    }

    decrementCountdown = () => {
        this.setState({ countdown: this.state.countdown - 1});
    }

    render() {
        if (this.state.redirect) {
            return <Redirect to="/training" />
        }
        return (
            <div className={styles.main}>
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