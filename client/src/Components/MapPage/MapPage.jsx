import React, { Component } from "react";
import styles from "./MapPage.module.css";
import CSGOMap from "../../Assets/Images/CSGOmapimage.PNG";

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
                    CSGO
                    <hr/>
                    <img src={CSGOMap} />
                </div>
                <div className={styles.row}>
                    CSGO
                    <hr/>
                    <img src={CSGOMap} />
                </div>
                <div className={styles.row}>
                    CSGO
                    <hr/>
                    <img src={CSGOMap} />
                </div>
            </div>
        )
    }
}