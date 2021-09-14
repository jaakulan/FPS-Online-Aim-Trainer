import React, { Component } from "react";
import styles from "./Results.module.css";
import sad from "../../Assets/ResultFaces/sad.png";
import okay from "../../Assets/ResultFaces/meh.png";
import smile from "../../Assets/ResultFaces/smile.png";
import axios from "axios";

/**
 * Results is a component that shows the results of interacting with
 * the aim trainer. It can be redirected to retry with the same preferences
 * or back to the starter page.
 */
export default class Results extends Component {
    constructor(props) {
        super(props);
        this.state = {
            performance:"86",
            comp: "great"
        }
    }

    componentDidMount() {
        let api = process.env.REACT_APP_API;
        let data = {
            hit: parseInt(sessionStorage.getItem('hits')),
            missed: parseInt(sessionStorage.getItem('misses'))
        }
        axios.post(api + 'analyze', data)
            .then((res) => {
                let percentage = (res.data.hitPercentage * 100).toFixed(0)
                this.setState({ 
                    performance: percentage,
                    comp: res.data.status
                })
                console.log(res);
            }).catch((err) => {
                console.log(err);
            })
    }

    render() {
        if (this.state.comp === "Bad") {
            var image = sad;
          } else if(this.state.comp === "Decent"){
            var image = okay;
          } else {
            var image = smile;
          }

        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Results
                </div>
                <div className={styles.faceSpace}>
                    <img src={image} className={styles.resultFace}/>
                </div>
                <div className={styles.result}>
                    You did {this.state.comp}, you hit {this.state.performance}% of the targets! 
                </div>
                <ul className={styles.redirects}>
                    <li><a href="/transition" className={styles.redirect}>Retry</a></li>
                    <li><a href="/starter" className={styles.redirect}>Head back to start</a></li>
                </ul>
            </div>
        )
    }
}