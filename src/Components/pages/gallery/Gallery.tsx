import React, { useEffect, useState } from 'react';
import styles from "./Gallery.module.css";
import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import MainTitle from '../../atoms/mainTitle/mainTitle';
// import { useParams } from 'react-router-dom';
import { fetchAllGames } from '../../../Api/gamesAPI';
import Games from '../../templates/Games/Games';
import { GameType } from '../../../types/gameTypes';

function Gallery() {
  // const { id } = useParams();

  const [gameDetails, setGameDetails] = useState<GameType[]>([]); // Atualiza o estado para usar o tipo GameType
  //const [ isLoading, setIsLoading ] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const getDetails = await fetchAllGames();
        setGameDetails(getDetails);
        // setIsLoading(false)
      } catch(error) {
        console.error('Error fetching data:', error);
      }
    }
    fetchData();
  }, [])

  console.log(gameDetails);

  return (
    <section className={styles.Gallery}>
      <Grid container alignItems="center" spacing={3} className={styles.content}>
        <Grid size={12}>
          <MainTitle text='Games Gallery' />
          <Typography variant="h5" align='center' sx={{ fontStyle: "italic" }}>Explore your gaming adventures!</Typography>
        </Grid>
        <Grid size={12}>
          <Typography variant='body1' gutterBottom className={styles.text}>In this section, you'll find all the game reviews you've recorded on Games Wiki. Each review reflects your experiences, achievements, and unforgettable moments. Relive your journeys and share your opinions and discoveries with other players. Keep expanding your gallery and leaving your mark on the gaming universe!</Typography>
        </Grid>
        <Grid size={12}>
          <Games game={gameDetails} />
        </Grid>
      </Grid>
    </section>
  )
}

export default Gallery