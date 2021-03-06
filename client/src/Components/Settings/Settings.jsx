import React, { useState, Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
import backgroundImage from "../../Assets/Images/BackgroundImage.png";
import styles from "./Settings.module.css";


const muiTheme = createMuiTheme({
  overrides:{
    MuiSlider: {
      thumb:{
      color: "black",
      },
      track: {
        color: 'black'
      },
      rail: {
        color: 'black'
      },
      active: {}
    }
}
});

const useStyles = makeStyles({
    root: {
      width: 700,
    },
    input: {
      width: 42,
    },
  });
  
/**
 * Settings is a component that allows users to select the
 * speed and size of their targets in the aim trainer. It
 * saves the selections in sessionStorage.
 */
export default function Settings() {
  const classes = useStyles();
  const [speed, setSpeed] = useState(0);
  const [size, setSize] = useState(0);

  const handleSliderChange = (event, newValue) => {
    setSpeed(newValue);
  };

  const handleInputChange = (event) => {
    setSpeed(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleBlur = () => {
    if (speed < 0) {
      setSpeed(0);
    } else if (speed > 100) {
      setSpeed(100);
    }
  };

  const handleSizeSliderChange = (event, newValue) => {
    setSize(newValue);
  };

  const handleSizeInputChange = (event) => {
    setSize(event.target.value === '' ? '' : Number(event.target.value));
  };

  const handleSizeBlur = () => {
    if (size < 0) {
      setSize(0);
    } else if (size > 100) {
      setSize(100);
    }
  };

  const setSettings = () => {
    sessionStorage.setItem('speed', speed);
    sessionStorage.setItem('size', size);
  }

  return (
      <div className={styles.main}>
          <img src={backgroundImage} className={styles.image}/>
          <div className={styles.title}>
              Choose your Speed and Size for targets!
              <hr />
          </div>
          <div className={`${classes.root} ${styles.sliderspace}`}>
              <Typography id="input-slider" gutterBottom className={styles.labels}>
                <p className={styles.labels}>Speed</p>
              </Typography>
              <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <ThemeProvider theme={muiTheme}>
                  <Slider
                  value={speed}
                  onChange={handleSliderChange}
                  aria-labelledby="input-slider"
                  />
                </ThemeProvider>
              </Grid>
              <Grid item>
                  <Input
                  className={styles.input}
                  value={speed}
                  margin="dense"
                  onChange={handleInputChange}
                  onBlur={handleBlur}
                  inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                  }}
                  />
              </Grid>
              </Grid>
          </div>
          <div className={`${classes.root} ${styles.sliderspace}`}>
              <Typography id="input-slider" gutterBottom >
                <p className={styles.labels}>Size</p>
              </Typography>
              <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <ThemeProvider theme={muiTheme}>
                  <Slider
                  value={size}
                  onChange={handleSizeSliderChange}
                  aria-labelledby="input-slider"
                  />
                </ThemeProvider>
              </Grid>
              <Grid item>
                  <Input
                  className={styles.input}
                  value={size}
                  margin="dense"
                  onChange={handleSizeInputChange}
                  onBlur={handleSizeBlur}
                  inputProps={{
                      step: 10,
                      min: 0,
                      max: 100,
                      type: 'number',
                      'aria-labelledby': 'input-slider',
                  }}
                  />
              </Grid>
              </Grid>
          </div>
          <div className={styles.next}>
              <a href="/transition" className={styles.link} onClick={setSettings}>Next</a>
          </div>
      </div>
  );
}