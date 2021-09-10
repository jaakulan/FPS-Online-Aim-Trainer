import React, { Component } from "react";
import styles from "./Training.module.css";
import target from "../../Assets/Targets/babylion.png";
import { Redirect } from "react-router-dom";


let cdot = "https://i.imgur.com/84px1ZP.png";
let c = "https://i.imgur.com/EeAAqqo.png";
let cExtra = "https://i.imgur.com/X4Kcc60.png?1";
let csniper = "https://i.imgur.com/9rWZ5lh.png?1";
let cEncircled = "https://i.imgur.com/KaQESbA.png?1";
let c1 = "https://i.imgur.com/7pAFfSm.png?1";
let c2 = "https://i.imgur.com/Hi3TdkX.png?1";
let c3 = "https://i.imgur.com/DyoRlOu.png?1";
let cCircle = "https://i.imgur.com/z5RrD5V.png?1";
let cCSGO = "https://i.imgur.com/2nLdsqo.png?1";

/**
 * Training is the component once all the selections are made
 * and the actual aim trainer functionality takes place
 */
export default class Training extends Component {
    constructor(props) {
        super(props);
        this.state = {
            totalClicks: 0,
            totalWins: 0,
            crosshair: sessionStorage.getItem('crosshair'),
            map: sessionStorage.getItem('map'),
            target: sessionStorage.getItem('target'),
            top: String(Math.floor((Math.random() * 100) + 1)) + "%",
            left: String(Math.floor((Math.random() * 100) + 1)) + "%",
            hide: false,
            seconds: 3000,
            counter: 0,
            redirect: false,
        }
        this.myRef = React.createRef();
    }

    countClicks = () => {
        this.setState({ totalClicks: this.state.totalClicks+1});
        console.log(this.state.totalClicks)
    }

    countWins = () => {
        this.setState({ totalWins: this.state.totalWins+1});
        console.log(this.state.totalWins)
    }

    // Data is stored in sessionstorage. Use the following methods to get the relevant data
    // componentDidMount() {
    //     console.log(sessionStorage.getItem('crosshair'));
    //     console.log(sessionStorage.getItem('map'));
    //     console.log(sessionStorage.getItem('speed'));
    //     console.log(sessionStorage.getItem('size'));
    // }

    componentDidMount(){
        setInterval(() => {
            if (this.state.counter === 25) {
                this.setState({ redirect: true });
            } else {
                this.setImage();
                this.setState({ counter: this.state.counter + 1 })
            }
        }, this.state.seconds)
    }

    setImage = async () => {
        await this.setShow();
        await this.setMargins();
        await this.setShow();
    }

    setShow = async () => {
        this.setState({ hide: !this.state.hide });
    }

    setMargins = async () => {
        this.setState( {
            top: String(Math.floor((Math.random() * 100) + 1)) + "%",
            left: String(Math.floor((Math.random() * 100) + 1)) + "%"
        })
    }

    render() {
        // console.log(this.state.map)
        // console.log(this.state.crosshair)
        let crossHairStyle = {
            cursor: "url(" + this.state.crosshair + ") 32 32,default"
        }
        let targetRender = {
            marginTop: this.state.top,
            marginLeft: this.state.left,
            height: "100px",
            width: "100px"
        }
        if (this.state.redirect) {
            return <Redirect to="/starter" />
        }
        return (  
            <div className={styles.main} style={crossHairStyle} onClick={this.countClicks} /* onContextMenu={(e)=> e.preventDefault()} */>
                <img src={this.state.map} className={styles.image}/>
                <img src={target} style={targetRender} hidden={this.state.hide} onClick={this.countWins}/>
            </div>   
        )
    }
}