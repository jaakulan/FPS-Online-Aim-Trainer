import React, { Component } from "react";
import styles from "./MapPage.module.css";
import CSGOMap from "../../Assets/Images/CSGOmapimage.PNG";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";

export default class MapPage extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={backgroundImage} className={styles.image}/>
                <div className={styles.title}>
                    Choose a map to practice on!
                </div>
                <div className={styles.row}>
                    CSGO
                    <hr/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>
                <div className={styles.row} >
                    CSGO
                    <hr/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>
                <div className={styles.row}>
                    CSGO
                    <hr/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>
                <div className={styles.next}>
                    <a href="/crosshair" className={styles.link}>Next</a>
                </div>
            </div>
        )
    }
}