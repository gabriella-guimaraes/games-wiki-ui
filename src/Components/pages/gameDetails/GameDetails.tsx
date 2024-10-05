import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styles from "./GameDetails.module.css";
import { fetchGameDetails } from '../../../Api/gamesAPI';
import { GameType } from '../../../types/gameTypes';
import GameReview from '../../templates/GameReview/GameReview';

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
      {/* TODO: Transformar isso em um template */}
      <GameReview game={gameDetails} />
      
    </section>
  )
}

export default GameDetails;