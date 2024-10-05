import React from 'react';
import styles from "./ReviewInfo.module.css";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Rating,
  Typography,
} from "@mui/material";
import CustomAccordion from '../../atoms/customAccordion/CustomAccordion';

interface ReviewInfoProps {
    date: Date;
    title: string;
    platform: string;
    description: string;
    favCharacters: string[];
    rating: number;
}

function ReviewInfo({ date, title, platform, description, favCharacters, rating }: ReviewInfoProps) {
  return (
    <section className={styles.ReviewInfo}>
        <Grid container alignItems="center" spacing={3}>
            <Grid size={12}>
              <Typography variant="subtitle1" gutterBottom>
                Created at: {new Date(date).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography
                variant="h2"
                gutterBottom
                sx={{ fontStyle: "italic" }}
              >
                {title}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography variant="body2" gutterBottom>
                Platform: {platform}
              </Typography>
            </Grid>
            <Grid size={12}>
              <Typography>{description}</Typography>
            </Grid>
            {/* TODO: Transformar isso em um atom + personalização  */}
            <Grid size={12}>
              <CustomAccordion title="Favorite Characters" content={favCharacters} />
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
                  <Rating name="read-only" value={rating} readOnly />
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
    </section>
  )
}

export default ReviewInfo;