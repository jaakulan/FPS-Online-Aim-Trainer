import React, { Component } from "react";
import styles from "./Results.module.css";
import sad from "../../Assets/ResultFaces/sad.png";
import okay from "../../Assets/ResultFaces/meh.png";
import smile from "../../Assets/ResultFaces/smile.png";


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

    render() {
        if (this.state.comp === "bad") {
            var image = sad;
          } else if(this.state.comp === "okay"){
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