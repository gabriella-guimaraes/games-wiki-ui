import React from 'react';
import styles from "./Intro.module.css";
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import galaxy from "../../../assets/milkyway.png"
import { Link } from 'react-router-dom';

function Intro() {
  return (
    <section>
        <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h1" align='left' sx={{ fontStyle: "italic"}} className={styles.title}>Intro</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 9 }} className={styles.divider}></Grid>
        </Grid>
        <Grid container alignItems="center" justifyContent="space-between" spacing={4} className={styles.Intro}>
            <Grid size={{ xs: 12, md: 7 }} className={styles.text}>
                <Grid container>
                    <Grid size={12}>
                        <Typography variant="body1">Welcome to Games Wiki, where your gaming memories come to life in an immersive and personalized way. Our platform is designed for passionate gamers who want to create their very own digital archive, a space where each gaming experience can be recorded, remembered, and revisited. Whether you're keeping track of your latest adventures or documenting nostalgic classics from years past, Games Wiki offers you the tools to build a detailed and curated gaming library. With each entry, you can provide in-depth reviews, personal notes, and all the details that make your journey through the world of games unique. Join us in celebrating every game you've played, from the epic to the obscure, and preserve your gaming legacy for the future.</Typography>
                    </Grid>
                    <Grid size={12}>
                        <Button variant="outlined" className={styles.btn}>
                            <Link to="/about" className={styles.link}>About us</Link>
                        </Button>
                    </Grid>
                </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }} className={styles.imgContainer}>
                <img src={galaxy} alt="Level Up" className={styles.img} />
            </Grid>
        </Grid>
    </section>
  )
}

export default Intro;