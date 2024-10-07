import React, { useEffect, useState } from 'react';
import styles from './EditReview.module.css';
import Grid from "@mui/material/Grid2";
import MainTitle from '../../atoms/mainTitle/mainTitle';
import { useParams } from 'react-router-dom';
import { GameType } from '../../../types/gameTypes';
import { fetchGameDetails } from '../../../Api/gamesAPI';
import Form from '../../organisms/Form/Form';

function EditReview() {
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
    <section className={styles.EditReview}>
        <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        className={styles.content}
      >
        <Grid size={{ xs:0, md: 6 }} className={styles.imgWrapper}>
            {/* <img src={consoles} alt='game consoles poster' className={styles.img} /> */}
            <MainTitle text='Edit Review' smaller={true} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
            <Form game={gameDetails} />
        </Grid>
      </Grid>
    </section>
  )
}

export default EditReview;