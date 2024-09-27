import React from 'react';
import styles from "./About.module.css";
import Project from '../../templates/Project/Project';

function About() {
  return (
    <section className={styles.About}>
      <div className={styles.Project}>
        <Project />
      </div>
    </section>
  )
}

export default About;