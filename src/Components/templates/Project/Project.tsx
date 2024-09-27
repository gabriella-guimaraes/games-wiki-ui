import React from "react";
import styles from "./Project.module.css";
import Grid from "@mui/material/Grid2";
import MainTitle from "../../atoms/mainTitle/mainTitle";
import { Typography } from "@mui/material";
import game from "../../../assets/nintendo.png";
import GitHub from "../../atoms/github/GitHub";

function Project() {
  return (
    <section className={styles.Project}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        className={styles.content}
      >
        <Grid size={12} className={styles.divider}></Grid>
        <Grid size={{ xs: 0, md: 6 }} className={styles.imgWrapper}>
            <img src={game} alt="Retro Game console controller" className={styles.img} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} className={styles.text}>
            <Grid container alignItems="center" spacing={2}>
                <Grid size={12}>
                    <div className={styles.title}>
                        <MainTitle text="About Us" smaller={true} />
                    </div>
                </Grid>
                <Grid size={12}>
                    <Typography variant="body1">
                        Games Wiki is a project dedicated to creating a unique space for
                        gamers, allowing them to record and share their experiences with the
                        games they love. Our platform was developed with the aim of
                        providing a personal library where each user can curate and document
                        their journeys in the world of video games, from the most popular
                        titles to the forgotten classics. <br/>This project is the result of a
                        learning and experimentation effort, focused on improving web
                        development and design skills. Games Wiki is a non-profit
                        initiative, created solely for educational purposes. We believe that
                        a passion for gaming and the exchange of experiences are essential
                        to the gaming community, and we want to offer a platform that
                        reflects this spirit. <br/> Thank you for visiting Games Wiki, and we hope
                        you enjoy your experience with us. Let’s explore the world of games
                        together!
                    </Typography>
                </Grid>
                <Grid size={12}>
                    <GitHub />
                </Grid>
            </Grid>
        </Grid>
        <Grid size={12} className={styles.divider}></Grid>
      </Grid>
    </section>
  );
}

export default Project;
