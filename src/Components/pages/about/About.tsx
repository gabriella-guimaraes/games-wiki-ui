import React from 'react';
import styles from "./About.module.css";
import Project from '../../templates/Project/Project';
import Team from '../../templates/Team/Team';

function About() {
  return (
    <section className={styles.About}>
      <div className={styles.Project}>
        <Project />
      </div>
      <div className={styles.Team}>
        <Team />
      </div>
    </section>
  )
}

export default About;