import React, { Component } from "react";
import styles from "./Training.module.css";
import map from "../../Assets/Maps/Cold_War/gameshow.jpg";
import target from "../../Assets/Targets/bossbaby.png";
import crossHair from "../../Assets/Crosshairs/dot.png";

/**
 * Training is the component once all the selections are made
 * and the actual aim trainer functionality takes place
 */
export default class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClicks: 0,
            crosshair: sessionStorage.getItem('crosshair')
        }
        this.myRef = React.createRef();
    }

    countClicks = () => {
        this.setState({ totalClicks: this.state.totalClicks+1});
        console.log(this.state.totalClicks)
    }
    // Data is stored in sessionstorage. Use the following methods to get the relevant data
    // componentDidMount() {
    //     console.log(sessionStorage.getItem('crosshair'));
    //     console.log(sessionStorage.getItem('map'));
    //     console.log(sessionStorage.getItem('speed'));
    //     console.log(sessionStorage.getItem('size'));
    // }

    componentWillMount(){
        const crosshairs = [""]
        for(var i =0; i< crosshairs.length; i++){

        }
    }

    render() {
        console.log(this.state.crosshai)
        document.getElementsByClassName('main').style = "cdot";
        return (
            <div className={styles.main} id={styles.crosshai} onClick={this.countClicks}>
                <img src={map} className={styles.image}/>
            </div>
           
        )
    }
}