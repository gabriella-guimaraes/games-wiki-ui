import React from 'react';
import styles from "./GameCard.module.css";
import Grid from '@mui/material/Grid2';
import { Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

interface GameCardProps {
    id: string;
    title: string;
    platform: string;
    rating: number;
    poster: string; // URL da imagem do jogo
 
}

function GameCard({ id, title, platform, rating, poster }: GameCardProps) {
    // console.log(poster)
    //const posterUrl = `http://localhost:3000/${poster}`;
    const detailUrl = `/games/${id}`;
    const cardStyle = {
        backgroundImage: `linear-gradient(rgba(32, 32, 32, 0.494), rgba(32, 32, 32, 0.5)), url("${poster}")`,
        backgroundSize: 'cover',
        backGroundPosition: 'center',
        height: '300px',
        backgroundRepeat: 'no-repeat',
    };
  return (
    <section className={styles.Card} style={cardStyle}>

        <Grid container alignItems="center" alignContent="flex-end">
            <Grid size={12}>
                <Typography variant='h5' gutterBottom sx={{ fontWeight: 600, fontStyle: "italic" }}>{title}</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Platform: {platform}</Typography>
            </Grid>
            <Grid size={12}>
                <Typography variant='body1' gutterBottom>Rating: {rating}%</Typography>
            </Grid>
            <Grid size={12} sx={{ marginTop: 1, textAlign: "center" }}>
                <Button variant="contained" className={styles.btn}>
                    <Link to={detailUrl} className={styles.link}>Show Details</Link>
                </Button>
            </Grid>
        </Grid>
    </section>
  )
}

export default GameCard;