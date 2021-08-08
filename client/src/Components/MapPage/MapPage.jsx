import React, { Component } from "react";
import styles from "./MapPage.module.css";
import CatDust from "../../Assets/Maps/CSGO/CatDust.PNG";
import CatMirage from "../../Assets/Maps/CSGO/CatMirage.PNG";
import CrossingDust from "../../Assets/Maps/CSGO/CrossingDust.PNG";
import AMirage from "../../Assets/Maps/CSGO/AMirage.PNG";
import AMirage2 from "../../Assets/Maps/CSGO/AMirage2.PNG";
import ATrain from "../../Assets/Maps/CSGO/ATrain.PNG";
import BMirage from "../../Assets/Maps/CSGO/BMirage.PNG";
import BMirage1 from "../../Assets/Maps/CSGO/BMirage1.PNG";
import BDust from "../../Assets/Maps/CSGO/BDust.PNG";
import MidTrain from "../../Assets/Maps/CSGO/MidTrain.PNG";
import BTrain from "../../Assets/Maps/CSGO/BTrain.PNG";


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
                    <img src={CatDust} className={styles.map}/>
                </div>

                <div className={styles.row}>
                <div className={styles.subtitle}>CSGO</div>
                    <hr className= {styles.subtitle_line}/>
                    <img src={CatDust} className={styles.map}/>
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