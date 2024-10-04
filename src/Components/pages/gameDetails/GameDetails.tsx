import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./GameDetails.module.css";
import { fetchGameDetails } from '../../../Api/gamesAPI';
import { GameType } from '../../../types/gameTypes';
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Accordion, AccordionDetails, AccordionSummary, Button, Rating, Typography } from '@mui/material';

function GameDetails() {

  const { id } = useParams();

  const [ gameDetails, setGameDetails ] = useState<GameType | null>(null);

        useEffect(() => {
          async function fetchData() {
            try {
              const getDetails = await fetchGameDetails(id as string);
              setGameDetails(getDetails);
            } catch (error) {
              console.error("An Error has happened:", error)
            }
          }

          fetchData();
        }, [id]);

        console.log(gameDetails);
        
        if (!gameDetails) {
          return <p>Loading...</p>;  // Exibe um texto de carregamento enquanto os dados são obtidos
        }

  return (
    <section className={styles.GameDetails}>
      <Grid container alignItems="center" justifyContent="space-evenly" className={styles.content}>
        <Grid size={12} className={styles.divider}></Grid>
        <Grid size={{ xs: 12, md: 6}} className={styles.imgWrapper}>
          <img src={gameDetails.poster} alt={gameDetails.title} className={styles.img} />
        </Grid>
        <Grid size={{ xs: 12, md:6 }}>
          <Grid container alignItems="center" spacing={3}>
            <Grid size={12}>
              <Typography variant='subtitle1' gutterBottom>
                Created at: {new Date(gameDetails.createdAt).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant='h2' gutterBottom sx={{ fontStyle: "italic" }}>{gameDetails.title}</Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant='body2' gutterBottom>Platform: {gameDetails.platform}</Typography>
            </Grid>
            <Grid size={12}>
              <Typography>{gameDetails.description}</Typography>
            </Grid>
            <Grid size={12}>
              <Accordion style={{ width: '100%' }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Favorite Characters
                </AccordionSummary>
                <AccordionDetails>
                  {gameDetails.favCharacters.map((character) => (
                    <Typography variant='body2' key={character}>{character}</Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid size={12}>
              <Grid container alignItems='left' display='flex' flexDirection='column' spacing={1}>
                <Grid size={12}>
                  <Typography variant='button'>Rating</Typography>
                </Grid>
                <Grid size={12}>
                  <Rating name="read-only" value={gameDetails.rating} readOnly />
                </Grid>
              </Grid>
              <Grid size={6}>
                <Button variant='outlined'>
                  Delete
                </Button>
              </Grid>
              <Grid size={6}>
                <Button variant='outlined'>
                  Edit
                </Button>
              </Grid>
            </Grid>
          </Grid>  
        </Grid>   
      </Grid>
    </section>
  )
}

export default GameDetails;