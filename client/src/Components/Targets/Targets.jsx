import React, { Component } from "react";
import styles from "./Targets.module.css";
import bloodhound from "../../Assets/Targets/bloodhound.png";
import babylion from "../../Assets/Targets/babylion.png";
import beard from "../../Assets/Targets/beard.png";
import bossbaby from "../../Assets/Targets/bossbaby.png";
import counterTerrorist from "../../Assets/Targets/counterTerrorist.png";
import ghost from "../../Assets/Targets/ghost.png";
import jett from "../../Assets/Targets/jett.png";
import menendez from "../../Assets/Targets/menendez.png";
import octane from "../../Assets/Targets/octane.png";
import omen from "../../Assets/Targets/omen.png";
import target from "../../Assets/Targets/target.png";
import terrorist from "../../Assets/Targets/terrorist.png";
import woods from "../../Assets/Targets/woods.png";


export default class CrossHair extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className={styles.main}>
                <div className={styles.title}>
                    Choose your targets!
                </div>
                <div className={styles.rowContent}>
                    All the targets!
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={target} className={styles.targets} />
                        <img src={babylion} className={styles.targets} />
                        <img src={beard} className={styles.targets} />
                        <img src={bossbaby} className={styles.targets} />
                        <img src={counterTerrorist} className={styles.targets} />
                        <img src={terrorist} className={styles.targets} />
                        <img src={woods} className={styles.targets} />
                        <img src={ghost} className={styles.targets} />
                        <img src={jett} className={styles.targets} />
                        <img src={menendez} className={styles.targets} />
                        <img src={octane} className={styles.targets} />
                        <img src={bloodhound} className={styles.targets} />
                        <img src={omen} className={styles.targets} />

                    </div>
                </div>
                <div className={styles.rowContent}>
                    CSGO
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={terrorist} className={styles.targets} />
                        <img src={counterTerrorist} className={styles.targets} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Valorant
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={omen} className={styles.targets} />
                        <img src={jett} className={styles.targets} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Warzone
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={woods} className={styles.targets} />
                        <img src={ghost} className={styles.targets} />
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Apex Legends
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <img src={octane} className={styles.targets} />
                        <img src={bloodhound} className={styles.targets} />
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/settings" className={styles.link}>Next</a>
                </div>
            </div>
        )
    }
}