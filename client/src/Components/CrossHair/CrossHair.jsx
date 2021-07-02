import React, { Component } from "react";
import styles from "./CrossHair.module.css";
import Crosshair1 from "../../Assets/Images/Crosshair1.PNG";
import Crosshair2 from "../../Assets/Images/Crosshair2.PNG";
import Crosshair3 from "../../Assets/Images/Crosshair3.PNG";
import backgroundImage from "../../Assets/Images/BackgroundImage.png";

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
                    <hr />
                </div>
                <div className={styles.rowContent}>
                    Made by us
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.crosshair} />
                        <img src={Crosshair2} className={styles.crosshair} />
                        <img src={Crosshair3} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    CSGO
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.crosshair} />
                        <img src={Crosshair2} className={styles.crosshair} />
                        <img src={Crosshair3} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Valorant
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.crosshair} />
                        <img src={Crosshair2} className={styles.crosshair} />
                        <img src={Crosshair3} className={styles.crosshair} />
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/settings" className={styles.link}>Next</a>
                </div>
            </div>
        )
    }
}