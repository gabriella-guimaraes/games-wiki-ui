import React from 'react';
import styles from "./CharacterCard.module.css";
import Grid from "@mui/material/Grid2";
import { Typography } from '@mui/material';

interface CharacterCardProps {
    name: string;
    description: string;
    image: string;
    icon?: React.ReactNode; // Prop para receber o ícone
}

function CharacterCard({ name, description, image, icon}: CharacterCardProps) {
  return (
    <section className={styles.CharacterCard}>
        <Grid container alignItems="center" alignContent="center" justifyContent="center" spacing={1} className={styles.Card}>
            <Grid size={12}>
                <img src={image} alt={description} className={styles.img} />
            </Grid>
            <Grid size={12}>
                <Typography variant="h4" gutterBottom>{name}</Typography>
            </Grid>
            <Grid size={12}>
                {/* <Box display="flex" alignItems="center"> */}
                    {icon && <>{icon}</>}
                {/* </Box> */}
            </Grid>
            <Grid size={12}>
                <Typography variant="body1" sx={{ fontStyle: "italic" }} gutterBottom>{description}</Typography>
            </Grid>
        </Grid>
    </section>
  )
}

export default CharacterCard;