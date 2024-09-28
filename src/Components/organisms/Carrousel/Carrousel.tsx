import React from "react";
import styles from "./Carrousel.module.css";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Carrousel() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, // Mostra 3 cards por vez
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024, // Em telas menores que 1024px
        settings: {
          slidesToShow: 2, // Mostra 2 cards
        },
      },
      {
        breakpoint: 768, // Em telas menores que 768px
        settings: {
          slidesToShow: 1, // Mostra 1 card
        },
      },
    ],
  };

  return (
    <section className={styles.carrousel}>
      <Carousel {...settings}>
        <div className={styles.slide}>Card comes here</div>
        <div className={styles.slide}>Card comes here</div>
        <div className={styles.slide}>Card comes here</div>
        <div className={styles.slide}>Card comes here</div>
        <div className={styles.slide}>Card comes here</div>
        <div className={styles.slide}>Card comes here</div>
      </Carousel>
    </section>
  );
}

export default Carrousel;
