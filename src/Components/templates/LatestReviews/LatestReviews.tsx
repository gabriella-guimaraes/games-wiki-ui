import React from 'react';
import styles from "./LatestReviews.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

function LatestReviews() {
  return (
    <section className={styles.Latest}>
        <Grid container alignItems="center" spacing={4} sx={{ padding: 10}}>
            <Grid size={12}>
                <Typography variant="h1" align="center" sx={{ fontStyle: "italic" }}>Your Latest Reviews</Typography>
            </Grid>

            <Grid size={12} className={styles.divider}></Grid>

            {/* Anotações:
            Nesta parte deverá ocorrer uma chamada GET na API e renderizar os 3 jogos mais recentes no componente de card */}
            <Grid size={{ xs: 12, md: 4}} className={styles.gameCard}>Game 1</Grid>
            <Grid size={{ xs: 12, md: 4}} className={styles.gameCard}>Game 2</Grid>
            <Grid size={{ xs: 12, md: 4}} className={styles.gameCard}>Game 3</Grid>
        </Grid>

    </section>
  )
}

export default LatestReviews;