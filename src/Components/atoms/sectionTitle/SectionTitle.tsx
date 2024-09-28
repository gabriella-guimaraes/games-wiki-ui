import React from 'react';
import Grid from '@mui/material/Grid2';
import styles from "./SectionTitle.module.css";
import { Typography } from '@mui/material';

interface SectionTitleProps {
    text: string,
    textSize?: number,
    dividerSize?: number
}

function SectionTitle({ text, textSize = 3, dividerSize = 9 } : SectionTitleProps) {
  return (
    <Grid container alignItems="center" justifyContent="space-evenly">
            <Grid size={{ xs: 12, md: textSize }}>
                <Typography variant="h1" align='left' sx={{ fontStyle: "italic"}} className={styles.title}>{text}</Typography>
            </Grid>
            <Grid size={{ xs: 12, sm: 12, md: dividerSize }} className={styles.divider}></Grid>
    </Grid>
  )
}

export default SectionTitle;