import React, { Component } from "react";
import styles from "./Training.module.css";
import target from "../../Assets/Targets/babylion.png";
import { Redirect } from "react-router-dom";
import hit from "../../Assets/Sounds/hit.mp3";
import miss from "../../Assets/Sounds/miss.mp3";

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
                sessionStorage.setItem('hits', this.state.totalWins);
                sessionStorage.setItem('misses', (this.state.totalClicks - this.state.totalWins));
                this.setState({ redirect: true });
            }
        }, 1000)
    }

    /**
     * Sets the intervals in which the image should reappear if they are not clicked
     */
    intervalSetter = async () => {
        let intervalSetter = setInterval(() => {
            this.setImage();
            this.state.totalClicks += 1; // Makes sure that missed targets counts as misses.
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
        new Audio(miss).play();
        this.setState({ totalClicks: this.state.totalClicks+1});
    }

    /**
     * Counts number of targets clicked accurately by a user. Then stops the interval,
     * redeploys the image and starts the interval again.
     */
    countWins = async () => {
        new Audio(hit).play();
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
            return <Redirect to="/results" />
        }
        return (  
            <div className={styles.main} style={crossHairStyle} onClick={this.countClicks} onContextMenu={(e)=> e.preventDefault()}  >
                <img className={styles.target} src={this.state.target} style={targetRender} hidden={this.state.hide} onClick={this.countWins}/>
            </div>   
        )
    }
}