import React from 'react';
import styles from "./ReviewInfo.module.css";
import Grid from "@mui/material/Grid2";
import {
  Button,
  Rating,
  Typography,
} from "@mui/material";
import CustomAccordion from '../../atoms/customAccordion/CustomAccordion';
import DeleteBtn from '../../atoms/deleteBtn/DeleteBtn';

interface ReviewInfoProps {
    id: string;
    date: Date;
    title: string;
    platform: string;
    description: string;
    favCharacters: string[];
    rating: number;
}

function ReviewInfo({ id, date, title, platform, description, favCharacters, rating }: ReviewInfoProps) {
  return (
    <section className={styles.ReviewInfo}>
        <Grid container alignItems="center" justifyContent="space-between" spacing={3}>
            <Grid size={4}>
              <Typography variant="subtitle1" gutterBottom>
                Created at: {new Date(date).toLocaleDateString()}
              </Typography>
            </Grid>
            <Grid size={8}>
                <Grid container alignItems="center" justifyContent="flex-end" spacing={3}>
                    <Grid size={6}>
                        <DeleteBtn gameId={id} />
                    </Grid>
                    <Grid size={6}>
                        <Button variant="outlined" color="primary">Edit</Button>
                    </Grid>
                </Grid>
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
            <Grid size={6}>
              <Typography variant="body2" gutterBottom>
                Platform: {platform}
              </Typography>
            </Grid>
            <Grid size={6}>
                  <Rating name="read-only" value={rating} readOnly />
            </Grid>
            <Grid size={12}>
              <Typography>{description}</Typography>
            </Grid>
            <Grid size={12}>
              <CustomAccordion title="Favorite Characters" content={favCharacters} />
            </Grid>
          </Grid>
    </section>
  )
}

export default ReviewInfo;