import React, { Component } from "react";
import styles from "./Results.module.css";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";
import axios from "axios";

/**
 * Results is a component that shows the results of interacting with
 * the aim trainer. It can be redirected to retry with the same preferences
 * or back to the starter page.
 */
export default class Results extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        let api = process.env.REACT_APP_API;
        let data = {
            hit: parseInt(sessionStorage.getItem('hits')),
            missed: parseInt(sessionStorage.getItem('misses'))
        }
        axios.post(api + 'analyze', data)
            .then((res) => {
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
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
                <ul className={styles.redirects}>
                    <li><a href="/transition" className={styles.redirect}>Retry</a></li>
                    <li><a href="/starter" className={styles.redirect}>Head back to start</a></li>
                </ul>
            </div>
        )
    }
}