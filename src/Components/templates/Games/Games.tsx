import React from 'react';
import styles from "./Games.module.css";
import { GameType } from '../../../types/gameTypes';
import Grid from '@mui/material/Grid2';
import GameCard from '../../molecules/GameCard/GameCard';

//Tipo das props
type GamesProps = {
    game: GameType[];
}

function Games({ game }: GamesProps) {
  return (
    <section className={styles.Games}>
        <Grid container alignItems="center" justifyContent="space-evenly" spacing={3}>
            {game.map(item => (
                <Grid key={item._id} size={{ xs: 6, md: 4 }}>
                    
                    <GameCard id={item._id} title={item.title} platform={item.platform} rating={item.rating} poster={item.poster}/>
                </Grid>
            ))}
        </Grid>
    </section>
  )
}

export default Games;