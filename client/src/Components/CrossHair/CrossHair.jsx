import React, { Component } from "react";
import styles from "./CrossHair.module.css";
import Crosshair1 from "../../Assets/Images/Crosshair1.PNG";
import Crosshair2 from "../../Assets/Images/Crosshair2.PNG";
import Crosshair3 from "../../Assets/Images/Crosshair3.PNG";

export default class CrossHair extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Choose your crosshair!
                    <hr />
                </div>
                <div>
                    Made by us
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.image} />
                        <img src={Crosshair2} className={styles.image} />
                        <img src={Crosshair3} className={styles.image} />
                    </div>
                </div>
                <div>
                    CSGO
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.image} />
                        <img src={Crosshair2} className={styles.image} />
                        <img src={Crosshair3} className={styles.image} />
                    </div>
                </div>
                <div>
                    Valorant
                    <hr />
                    <div className={styles.row}>
                        <img src={Crosshair1} className={styles.image} />
                        <img src={Crosshair2} className={styles.image} />
                        <img src={Crosshair3} className={styles.image} />
                    </div>
                </div>
            </div>
        )
    }
}