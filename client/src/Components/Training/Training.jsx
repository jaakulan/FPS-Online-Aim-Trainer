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
            top: String(Math.floor((Math.random() * 85) + 1)) + "vh",
            left: String(Math.floor((Math.random() * 90) + 1)) + "vw",
            hide: false,
            seconds: 3000,
            counter: 0,
            redirect: false,
            interval: "",
            timer: 0,
        }
        this.myRef = React.createRef();
    }

    componentDidMount(){
        this.intervalSetter();
        // uncomment below method to add timer for the page
        this.countdownTimer();
    }

    /**
     * Adds timer to the page to redirect after a certain number of seconds,
     * defined by the timer variable
     */
    countdownTimer = () => {
        setInterval(() => {
            this.setState({ timer: this.state.timer + 1})
            if (this.state.timer === 10) {
                console.log(this.state.totalClicks);
                console.log(this.state.totalWins);
                //uncomment below if you want to redirect
                //this.setState({ redirect: true });
            }
        }, 1000)
    }

    /**
     * Sets the intervals in which the image should reappear if they are not clicked
     */
    intervalSetter = async () => {
        let intervalSetter = setInterval(() => {
            this.setImage();
        }, this.state.seconds);
        this.setState({ interval: intervalSetter })
    }

    /**
     * Sets the setter that sets the image once it has been clicked so that it
     * reappears immediately once clicked
     */
    timeoutSetter = async () => {
        setTimeout(() => {
            this.setImage();
        }, 0);
    }

    /**
     * Counts number of total clicks by a user
     */
    countClicks = () => {
        this.setState({ totalClicks: this.state.totalClicks+1});
    }

    /**
     * Counts number of targets clicked accurately by a user. Then stops the interval,
     * redeploys the image and starts the interval again.
     */
    countWins = async () => {
        this.setState({ totalWins: this.state.totalWins+1});
        clearInterval(this.state.interval);
        await this.timeoutSetter();
        await this.intervalSetter();
    }

    /**
     * hides image, reapplies random margins, and shows image again
     */
    setImage = async () => {
        await this.setShow();
        await this.setMargins();
        await this.setShow();
    }

    /**
     * hides/shows image
     */
    setShow = async () => {
        this.setState({ hide: !this.state.hide });
    }

    /**
     * Applies random margins to image
     */
    setMargins = async () => {
        this.setState( {
            top: String(Math.floor((Math.random() * 85) + 1)) + "vh",
            left: String(Math.floor((Math.random() * 90) + 1)) + "vw"
        })
    }

    render() {

        let crossHairStyle = {
            cursor: "url(" + this.state.crosshair + ") 32 32,default",
            backgroundImage: "url(" +this.state.map+")"
        }
        let targetRender = {
            marginTop: this.state.top,
            marginLeft: this.state.left,
            height: "100px",
            width: "100px",
        }
        if (this.state.redirect) {
            return <Redirect to="/starter" />
        }
        return (  
            <div className={styles.main} style={crossHairStyle} onClick={this.countClicks} /* onContextMenu={(e)=> e.preventDefault()}    <img src={this.state.map} className={styles.image}/>  */  >
                <img src={target} style={targetRender} hidden={this.state.hide} onClick={this.countWins}/>
            </div>   
        )
    }
}