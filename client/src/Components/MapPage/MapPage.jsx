import React, { Component } from "react";
import styles from "./MapPage.module.css";
//CSGO MAPS========================================================
import CatDust from "../../Assets/Maps/CSGO/CatDust.jpg";
import CatMirage from "../../Assets/Maps/CSGO/CatMirage.jpg";
import CrossingDust from "../../Assets/Maps/CSGO/CrossingDust.jpg";
import AMirage from "../../Assets/Maps/CSGO/AMirage.jpg";
import AMirage2 from "../../Assets/Maps/CSGO/AMirage2.jpg";
import ATrain from "../../Assets/Maps/CSGO/ATrain.jpg";
import BMirage from "../../Assets/Maps/CSGO/BMirage.jpg";
import BMirage1 from "../../Assets/Maps/CSGO/BMirage1.jpg";
import BDust from "../../Assets/Maps/CSGO/BDust.jpg";
import MidTrain from "../../Assets/Maps/CSGO/MidTrain.jpg";
import BTrain from "../../Assets/Maps/CSGO/BTrain.jpg";


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

                <div className={styles.row} >
                <div className={styles.subtitle}>Cold War</div>
                <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <img src={CatDust} className={styles.map}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>CSGO</div>
                <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <img src={CatDust} className={styles.map}/>
                        <img src={CatMirage} className={styles.map}/>
                        <img src={CrossingDust} className={styles.map}/>
                        <img src={AMirage} className={styles.map}/>
                        <img src={AMirage2} className={styles.map}/>
                        <img src={ATrain} className={styles.map}/>
                        <img src={BMirage} className={styles.map}/>
                        <img src={BMirage1} className={styles.map}/>
                        <img src={BDust} className={styles.map}/>
                        <img src={BTrain} className={styles.map}/>
                        <img src={MidTrain} className={styles.map}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>Overwatch</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CatDust} className={styles.map}/>
                </div>
                
                <div className={styles.row}>
                <div className={styles.subtitle}>Valorant</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CatDust} className={styles.map}/>
                </div>

                <div className={styles.row} >
                <div className={styles.subtitle}>Warzone</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CatDust} className={styles.map}/>
                </div>
                
            </div>
        )
    }
}