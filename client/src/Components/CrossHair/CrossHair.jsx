import React, { Component } from "react";
import styles from "./CrossHair.module.css";
import c from "../../Assets/Crosshairs/cross.png";
import c1 from "../../Assets/Crosshairs/cross1.png";
import c2 from "../../Assets/Crosshairs/cross2.png";
import c3 from "../../Assets/Crosshairs/cross3.png";
import cCircle from "../../Assets/Crosshairs/crossedcircle.png";
import cCsgo from "../../Assets/Crosshairs/csgocross.png";
import cdot from "../../Assets/Crosshairs/dot.png";
import cEncircled from "../../Assets/Crosshairs/encircled cross.png";
import cExtra from "../../Assets/Crosshairs/Extra.png";
import csniper from "../../Assets/Crosshairs/sniper.png";
import backgroundImage from "../../Assets/Images/Black_Box.png";

export default class CrossHair extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <img src={backgroundImage} className={styles.image}/>
                <div className={styles.title}>
                    Choose your crosshair!
                </div>
                <div className={styles.rowContent}>
                    Made by us
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={c} className={styles.crosshair} />
                        <img src={c1} className={styles.crosshair} />
                        <img src={c2} className={styles.crosshair} />
                        <img src={c3} className={styles.crosshair} />
                        <img src={cCircle} className={styles.crosshair} />
                        <img src={cCsgo} className={styles.crosshair} />
                        <img src={cdot} className={styles.crosshair} />
                        <img src={cEncircled} className={styles.crosshair} />
                        <img src={cExtra} className={styles.crosshair} />
                        <img src={csniper} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    CSGO
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={cCsgo} className={styles.crosshair} />
                        <img src={cdot} className={styles.crosshair} />
                        <img src={c} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Valorant
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={cdot} className={styles.crosshair} />
                        <img src={c} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/settings" className={styles.link}>Next</a>
                </div>
            </div>
        )
    }
}