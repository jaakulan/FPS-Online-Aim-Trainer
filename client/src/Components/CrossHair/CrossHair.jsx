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

/**
 * The CrossHair component is a page that allows users to
 * select the crosshair that they would like to use in the aim
 * trainer. It saves the selection using sessionStorage.
 */
export default class CrossHair extends Component {
    constructor(props) {
        super(props);
        this.state = {
            crosshair: "",
        }
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
                        <input type="image" src={c} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/B4Wqdch.png?1"})}}/>
                        <input type="image" src={c1} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/QqgyVny.png?1" })}}/>
                        <input type="image" src={c2} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/CGe7Idr.png?1" })}}/>
                        <input type="image" src={c3} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/vWYHOhu.png" })}}/>
                        <input type="image" src={cCircle} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/BohUAel.png?1" })}}/>
                        <input type="image" src={cCsgo} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/evWwlKT.png?1" })}}/>
                        <input type="image" src={cdot} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/UFtGxlr.png?1"})}}/>
                        <input type="image" src={cEncircled} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/ECL1Xhu.png?1" })}}/>
                        <input type="image" src={cExtra} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/y451vhK.png?1" })}}/>
                        <input type="image" src={csniper} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "https://i.imgur.com/922UfUJ.png?1" })}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    CSGO
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={cCsgo} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "cCsgo" })}}/>
                        <input type="image" src={cdot} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "cdot" })}}/>
                        <input type="image" src={c} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "c" })}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Valorant
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={cdot} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "cdot" })}}/>
                        <input type="image" src={c} className={styles.crosshair} onClick={(e) => {this.setState({ crosshair: "c" })}}/>
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/settings" className={styles.link} onClick={(e) => {sessionStorage.setItem('crosshair', this.state.crosshair)}}>Next</a>
                </div>
            </div>
        )
    }
}