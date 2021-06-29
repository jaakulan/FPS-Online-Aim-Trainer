import React, { useState, Component } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';
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
  
export default function InputSlider() {
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

  return (
      <div className={styles.main}>
          <div className={styles.title}>
              Choose your Speed and Size for targets!
              <hr />
          </div>
          <div className={classes.root}>
              <Typography id="input-slider" gutterBottom>
              Speed
              </Typography>
              <Grid container spacing={2} alignItems="center">
              <Grid item xs>
                <ThemeProvider theme={muiTheme}>
                  <Slider
                  value={typeof value === 'number' ? speed : 0}
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
      </div>
  );
}