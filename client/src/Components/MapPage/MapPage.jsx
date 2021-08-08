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
                
                <div className={styles.title}>
                    Choose a map to practice on!
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>CSGO</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>

                <div className={styles.row} >
                <div className={styles.subtitle}>CSGO</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>CSGO</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CSGOMap} className={styles.map}/>
                </div>
                
                <div className={styles.next}>
                    <a href="/crosshair" className={styles.link}>Next</a>
                </div>
            </div>
        )
    }
}