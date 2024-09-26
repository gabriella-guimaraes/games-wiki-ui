import React from 'react'
import styles from "./Hero.module.css";
import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import MainTitle from '../../atoms/mainTitle/mainTitle';

function Hero() {
  return (
    <Grid container alignItems="center" justifyContent="center" display="flex" flexDirection="column" className={styles.Hero}>
        <Grid size={12}>
          <Typography variant='body1' align='center' sx={{ fontWeight: 600, fontStyle: "italic", textTransform: "uppercase" }}>Welcome to</Typography>
        </Grid>
        <Grid size={12}>
          <MainTitle text="Games Wiki" />
        </Grid>
        <Grid size={12}>
          <Typography variant='body1' align='center' sx={{ fontWeight: 600, fontStyle: "italic", textTransform: "uppercase" }}>Your personal Gamer Wiki</Typography>
        </Grid>
      </Grid>
  )
}

export default Hero;