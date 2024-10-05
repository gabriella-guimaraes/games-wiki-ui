import React from "react";
import Grid from "@mui/material/Grid2";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Rating,
  Typography,
} from "@mui/material";
import styles from "./GameReview.module.css";
import { GameType } from "../../../types/gameTypes";

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
        <Grid size={12} className={styles.divider}></Grid>
        <Grid size={{ xs: 12, md: 6 }} className={styles.imgWrapper}>
          <img src={game.poster} alt={game.title} className={styles.img} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          {/* TODO: Transformar isso em um organism */}
          <Grid container alignItems="center" spacing={3}>
            <Grid size={12}>
              <Typography variant="subtitle1" gutterBottom>
                Created at: {new Date(game.createdAt).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                {game.title}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" gutterBottom>
                Platform: {game.platform}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography>{game.description}</Typography>
            </Grid>
            {/* TODO: Transformar isso em um atom + personalização  */}
            <Grid size={12}>
              <Accordion style={{ width: "100%" }}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1-content"
                  id="panel1-header"
                >
                  Favorite Characters
                </AccordionSummary>
                <AccordionDetails>
                  {game.favCharacters.map((character) => (
                    <Typography variant="body2" key={character}>
                      {character}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            </Grid>
            <Grid size={12}>
              {/* TODO: Transformar isso em um molecule */}
              <Grid
                container
                alignItems="left"
                display="flex"
                flexDirection="column"
                spacing={1}
              >
                <Grid size={12}>
                  <Typography variant="button">Rating</Typography>
                </Grid>
                <Grid size={12}>
                  <Rating name="read-only" value={game.rating} readOnly />
                </Grid>
              </Grid>
            </Grid>
            {/* TODO: Transformar isso em uma molecule */}
            <Grid size={6}>
              {/* TODO: Transformar isso em um atom + personalização */}
              <Button variant="outlined">Delete</Button>
            </Grid>
            <Grid size={6}>
              {/* TODO: Transformar isso em um atom + personalização */}
              <Button variant="outlined">Edit</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </section>
  );
}

export default GameReview;
