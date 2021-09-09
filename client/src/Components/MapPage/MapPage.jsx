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

/**
 * MapPage is a component is a page that allows users to
 * select the map that they would like to use in the aim
 * trainer. It saves the selection using sessionStorage.
 */
export default class MapPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            map: "",
        }
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
                        <input type="image" src={gameshow} className={styles.map} onClick={(e) => {this.setState({map: gameshow})}}/>
                        <input type="image" src={miami1} className={styles.map} onClick={(e) => {this.setState({map: miami1})}}/>
                        <input type="image" src={miami2} className={styles.map} onClick={(e) => {this.setState({map: miami2})}}/>
                        <input type="image" src={nuketown841} className={styles.map} onClick={(e) => {this.setState({map: nuketown841})}}/>
                        <input type="image" src={nuketown842} className={styles.map} onClick={(e) => {this.setState({map: nuketown842})}}/>
                        <input type="image" src={nuketown843} className={styles.map} onClick={(e) => {this.setState({map: nuketown843})}}/>
                        <input type="image" src={raid1} className={styles.map} onClick={(e) => {this.setState({map: raid1})}}/>
                        <input type="image" src={raid2} className={styles.map} onClick={(e) => {this.setState({map: raid2})}}/>
                        <input type="image" src={standoff1} className={styles.map} onClick={(e) => {this.setState({map: standoff1})}}/>
                    </div>
                </div>

                <div className={styles.row} >
                <div className={styles.subtitle}>Warzone</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <input type="image" src={livestock} className={styles.map} onClick={(e) => {this.setState({map: livestock})}}/>
                        <input type="image" src={stadium} className={styles.map} onClick={(e) => {this.setState({map: stadium})}}/>
                        <input type="image" src={quarry} className={styles.map} onClick={(e) => {this.setState({map: quarry})}}/>
                        <input type="image" src={superstore1} className={styles.map} onClick={(e) => {this.setState({map: superstore1})}}/>
                        <input type="image" src={superstore2} className={styles.map} onClick={(e) => {this.setState({map: superstore2})}}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>Overwatch</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <input type="image" src={dorado1} className={styles.map} onClick={(e) => {this.setState({map: dorado1})}}/>
                        <input type="image" src={dorado2} className={styles.map} onClick={(e) => {this.setState({map: dorado2})}}/>
                        <input type="image" src={dorado3} className={styles.map} onClick={(e) => {this.setState({map: dorado3})}}/>
                        <input type="image" src={goth1} className={styles.map} onClick={(e) => {this.setState({map: goth1})}}/>
                        <input type="image" src={thiago1} className={styles.map} onClick={(e) => {this.setState({map: thiago1})}}/>
                        <input type="image" src={thiago2} className={styles.map} onClick={(e) => {this.setState({map: thiago2})}}/>
                        <input type="image" src={thiago3} className={styles.map} onClick={(e) => {this.setState({map: thiago3})}}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>CSGO</div>
                <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <input type="image" src={CatDust} className={styles.map} onClick={(e) => {this.setState({map: CatDust})}}/>
                        <input type="image" src={CatMirage} className={styles.map} onClick={(e) => {this.setState({map: CatMirage})}}/>
                        <input type="image" src={CrossingDust} className={styles.map} onClick={(e) => {this.setState({map: CrossingDust})}}/>
                        <input type="image" src={AMirage} className={styles.map} onClick={(e) => {this.setState({map: AMirage})}}/>
                        <input type="image" src={AMirage2} className={styles.map} onClick={(e) => {this.setState({map: AMirage2})}}/>
                        <input type="image" src={ATrain} className={styles.map} onClick={(e) => {this.setState({map: ATrain})}}/>
                        <input type="image" src={BMirage} className={styles.map} onClick={(e) => {this.setState({map: BMirage})}}/>
                        <input type="image" src={BMirage1} className={styles.map} onClick={(e) => {this.setState({map: BMirage1})}}/>
                        <input type="image" src={BDust} className={styles.map} onClick={(e) => {this.setState({map: BDust})}}/>
                        <input type="image" src={BTrain} className={styles.map} onClick={(e) => {this.setState({map: BTrain})}}/>
                        <input type="image" src={MidTrain} className={styles.map} onClick={(e) => {this.setState({map: MidTrain})}}/>
                    </div>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>Valorant</div>
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.mapImages}>
                        <input type="image" src={breezeA} className={styles.map} onClick={(e) => {this.setState({map: breezeA})}}/>
                        <input type="image" src={havenMid} className={styles.map} onClick={(e) => {this.setState({map: havenMid})}}/>
                        <input type="image" src={splitMid} className={styles.map} onClick={(e) => {this.setState({map: splitMid})}}/>
                        <input type="image" src={ascentA} className={styles.map} onClick={(e) => {this.setState({map: ascentA})}}/>
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/crosshair" className={styles.link} onClick={(e) => {sessionStorage.setItem('map', this.state.map)}}>Next</a>
                </div>
            </div>
        )
    }
}