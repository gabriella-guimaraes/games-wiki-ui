import React from 'react';
import Grid from '@mui/material/Grid2';
import styles from "./SectionTitle.module.css";
import { Typography } from '@mui/material';

interface SectionTitleProps {
    text: string
}

function SectionTitle({ text } : SectionTitleProps) {
  return (
    <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid size={{ xs: 12, md: 3 }}>
                <Typography variant="h1" align='left' sx={{ fontStyle: "italic"}} className={styles.title}>{text}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: 9 }} className={styles.divider}></Grid>
    </Grid>
  )
}

export default SectionTitle;