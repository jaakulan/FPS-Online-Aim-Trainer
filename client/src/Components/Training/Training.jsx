import React, { Component } from "react";
import styles from "./Training.module.css";
import map from "../../Assets/Maps/Cold_War/gameshow.jpg";
import target from "../../Assets/Targets/bossbaby.png";
import crossHair from "../../Assets/Crosshairs/Extra.png";

export default class Training extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={map} className={styles.image}/>
            </div>
        )
    }
}