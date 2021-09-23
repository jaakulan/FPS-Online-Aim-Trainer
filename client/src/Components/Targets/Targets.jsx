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


export default class Targets extends Component {
    constructor(props) {
        super(props);
        this.state = {
            target: "",
        }
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
                        <input type="image" src={target} className={styles.targets} onClick={(e) => {this.setState({target: target})}}/>
                        <input type="image" src={babylion} className={styles.targets} onClick={(e) => {this.setState({target: babylion})}}/>
                        <input type="image" src={beard} className={styles.targets} onClick={(e) => {this.setState({target: beard})}}/>
                        <input type="image" src={bossbaby} className={styles.targets} onClick={(e) => {this.setState({target: bossbaby})}}/>
                        <input type="image" src={counterTerrorist} className={styles.targets} onClick={(e) => {this.setState({target: counterTerrorist})}}/>
                        <input type="image" src={terrorist} className={styles.targets} onClick={(e) => {this.setState({target: terrorist})}}/>
                        <input type="image" src={woods} className={styles.targets} onClick={(e) => {this.setState({target: woods})}}/>
                        <input type="image" src={ghost} className={styles.targets} onClick={(e) => {this.setState({target: ghost})}}/>
                        <input type="image" src={jett} className={styles.targets} onClick={(e) => {this.setState({target: jett})}}/>
                        <input type="image" src={menendez} className={styles.targets} onClick={(e) => {this.setState({target: menendez})}}/>
                        <input type="image" src={octane} className={styles.targets} onClick={(e) => {this.setState({target: octane})}}/>
                        <input type="image" src={bloodhound} className={styles.targets} onClick={(e) => {this.setState({target: bloodhound})}}/>
                        <input type="image" src={omen} className={styles.targets} onClick={(e) => {this.setState({target: omen})}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    CSGO
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={terrorist} className={styles.targets} onClick={(e) => {this.setState({target: terrorist})}}/>
                        <input type="image" src={counterTerrorist} className={styles.targets} onClick={(e) => {this.setState({target: counterTerrorist})}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Valorant
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={omen} className={styles.targets} onClick={(e) => {this.setState({target: omen})}}/>
                        <input type="image" src={jett} className={styles.targets} onClick={(e) => {this.setState({target: jett})}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Warzone
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={woods} className={styles.targets} onClick={(e) => {this.setState({target: woods})}}/>
                        <input type="image" src={ghost} className={styles.targets} onClick={(e) => {this.setState({target: ghost})}}/>
                    </div>
                </div>
                <div className={styles.rowContent}>
                    Apex Legends
                    <hr className= {styles.subtitle_line}/>
                    <div className={styles.crosshairContainer}>
                        <input type="image" src={octane} className={styles.targets} onClick={(e) => {this.setState({target: octane})}}/>
                        <input type="image" src={bloodhound} className={styles.targets} onClick={(e) => {this.setState({target: bloodhound})}}/>
                    </div>
                </div>
                <div className={styles.next}>
                    <a href="/transition" className={styles.link} onClick={(e) => {sessionStorage.setItem('target', this.state.target)}}>Next</a>
                </div>
            </div>
        )
    }
}