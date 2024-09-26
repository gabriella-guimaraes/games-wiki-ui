import React from 'react';
import styles from "./Home.module.css";
// import { Typography } from '@mui/material';
// import Grid from '@mui/material/Grid2';
import Hero from '../../templates/Hero/Hero';
import Intro from '../../templates/Intro/Intro';
import LatestReviews from '../../templates/LatestReviews/LatestReviews';

function Home() {
  return (
    <section>
      <div className={styles.intro}>
        <Hero />
      </div>

      <div className={styles.intro}>
        <Intro />
      </div>

      <div className={styles.Latest}>
        <LatestReviews />
      </div>

      
    </section>
  )
}

export default Home