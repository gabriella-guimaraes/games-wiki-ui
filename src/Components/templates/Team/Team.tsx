import React from 'react';
import styles from "./Team.module.css";
import Grid from '@mui/material/Grid2';
import MainTitle from '../../atoms/mainTitle/mainTitle';
import { Typography } from '@mui/material';

function Team() {
  return (
    <section className={styles.Team}>
        <Grid container alignItems="center" alignContent="center" spacing={3}>
            <Grid size={12}>
                <MainTitle text="Meet our Team!" smaller={true} />
            </Grid>
            <Grid size={12}>
                <Typography variant='body1'>Behind Games Wiki is a team passionate about technology and, of course, video games! We are developers and gamers dedicated to creating a platform that allows all players to document their journeys through the world of gaming. By combining our experience in web development with our love for the gaming universe, we are committed to delivering an engaging and user-friendly experience. This project is, above all, a reflection of our desire to learn, grow, and share with the gaming community.</Typography>
            </Grid>
            <Grid size={12}>
                The characters cards comer here!
            </Grid>
        </Grid>
    </section>
  )
}

export default Team;