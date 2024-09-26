import React from 'react';
import styles from "./mainTitle.module.css";

interface MainTitleProps {
    text: string;
    gradient?: boolean
}

function MainTitle({text, gradient = false} : MainTitleProps) {
  return (
    <h1 className={styles.Title}>{text}</h1>
  )
}

export default MainTitle;