import React, { Component } from "react";
import styles from "./MapPage.module.css";
//Cold War MAPS========================================================
import gameshow from "../../Assets/Maps/Cold_War/gameshow.jpg";
import miami1 from "../../Assets/Maps/Cold_War/miami1.jpg";
import miami2 from "../../Assets/Maps/Cold_War/miami2.jpg";
import nuketown841 from "../../Assets/Maps/Cold_War/nuketown841.jpg";
import nuketown842 from "../../Assets/Maps/Cold_War/nuketown842.jpg";
import nuketown843 from "../../Assets/Maps/Cold_War/nuketown843.jpg";
import raid1 from "../../Assets/Maps/Cold_War/raid1.jpg";
import raid2 from "../../Assets/Maps/Cold_War/raid2.jpg";
import standoff1 from "../../Assets/Maps/Cold_War/standoff1.png";
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
//Overwatch MAPS========================================================
import dorado1 from "../../Assets/Maps/Overwatch/dorado1.jpg";
import dorado2 from "../../Assets/Maps/Overwatch/dorado2.jpg";
import dorado3 from "../../Assets/Maps/Overwatch/dorado3.jpg";
import goth1 from "../../Assets/Maps/Overwatch/goth1.jpg";
import thiago1 from "../../Assets/Maps/Overwatch/thiago1.jpg";
import thiago2 from "../../Assets/Maps/Overwatch/thiago2.jpg";
import thiago3 from "../../Assets/Maps/Overwatch/thiago3.jpg";
//Valorant MAPS========================================================
import ascentA from "../../Assets/Maps/Valorant/ascentA.png";
import breezeA from "../../Assets/Maps/Valorant/breezeA.jpg";
import havenMid from "../../Assets/Maps/Valorant/havenMid.jpg";
import splitMid from "../../Assets/Maps/Valorant/splitMid.png";
//Warzone MAPS========================================================
import livestock from "../../Assets/Maps/Warzone/livestock.jpg";
import quarry from "../../Assets/Maps/Warzone/quarry.jpg";
import stadium from "../../Assets/Maps/Warzone/stadium.jpg";
import superstore1 from "../../Assets/Maps/Warzone/superstore1.jpg";
import superstore2 from "../../Assets/Maps/Warzone/superstore2.jpg";
import { Button } from "@material-ui/core";




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
                        <img src={gameshow} className={styles.map}/>
                        <img src={miami1} className={styles.map}/>
                        <img src={miami2} className={styles.map}/>
                        <img src={nuketown841} className={styles.map}/>
                        <img src={nuketown842} className={styles.map}/>
                        <img src={nuketown843} className={styles.map}/>
                        <img src={raid1} className={styles.map}/>
                        <img src={raid2} className={styles.map}/>
                        <img src={standoff1} className={styles.map}/>
                    </div>
                </div>

                <div className={styles.row} >
                <div className={styles.subtitle}>Warzone</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <img src={livestock} className={styles.map}/>
                        <img src={stadium} className={styles.map}/>
                        <img src={quarry} className={styles.map}/>
                        <img src={superstore1} className={styles.map}/>
                        <img src={superstore2} className={styles.map}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>Overwatch</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <img src={dorado1} className={styles.map}/>
                        <img src={dorado2} className={styles.map}/>
                        <img src={dorado3} className={styles.map}/>
                        <img src={goth1} className={styles.map}/>
                        <img src={thiago1} className={styles.map}/>
                        <img src={thiago2} className={styles.map}/>
                        <img src={thiago3} className={styles.map}/>
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
                <div className={styles.subtitle}>Valorant</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <img src={breezeA} className={styles.map}/>
                        <img src={havenMid} className={styles.map}/>
                        <img src={splitMid} className={styles.map}/>
                        <img src={ascentA} className={styles.map}/>
                    </div>
                </div>
                
            </div>
        )
    }
}