import React from "react";
import Grid from "@mui/material/Grid2";
import styles from "./GameReview.module.css";
import { GameType } from "../../../types/gameTypes";
import ReviewInfo from "../../organisms/ReviewInfo/ReviewInfo";

type GameProps = {
  game: GameType;
};
function GameReview({ game }: GameProps) {
  return (
    <section className={styles.GameReview}>
      <Grid
        container
        alignItems="center"
        justifyContent="space-evenly"
        className={styles.content}
      >
        <Grid size={{ xs: 12, md: 6 }} className={styles.imgWrapper}>
          <img src={game.poster} alt={game.title} className={styles.img} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* TODO: Transformar isso em um organism */}
          <ReviewInfo id={game._id} date={game.createdAt} title={game.title} platform={game.platform} description={game.description} favCharacters={game.favCharacters} rating={game.rating} />
        </Grid>
      </Grid>
    </section>
  );
}

export default GameReview;
