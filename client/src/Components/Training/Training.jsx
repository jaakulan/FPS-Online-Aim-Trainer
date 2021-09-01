import React, { Component } from "react";
import styles from "./Training.module.css";
import map from "../../Assets/Maps/Cold_War/gameshow.jpg";
import target from "../../Assets/Targets/bossbaby.png";
import crossHair from "../../Assets/Crosshairs/Extra.png";

export default class Training extends Component {
    constructor(props) {
        super(props);
    }

    // Data is stored in sessionstorage. Use the following methods to get the relevant data
    // componentDidMount() {
    //     console.log(sessionStorage.getItem('crosshair'));
    //     console.log(sessionStorage.getItem('map'));
    //     console.log(sessionStorage.getItem('speed'));
    //     console.log(sessionStorage.getItem('size'));
    // }

    render() {
        return (
            <div className={styles.main}>
                <img src={map} className={styles.image}/>
            </div>
        )
    }
}