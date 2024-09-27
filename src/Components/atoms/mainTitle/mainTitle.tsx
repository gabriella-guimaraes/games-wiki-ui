import React from 'react';
import styles from "./mainTitle.module.css";

interface MainTitleProps {
    text: string;
    smaller?: boolean
}

function MainTitle({text, smaller = false} : MainTitleProps) {
  const className = `${styles.Title} ${smaller ? styles.Smaller : ''}`;
  return (
    <h1 className={className}>{text}</h1>
  )
}

export default MainTitle;