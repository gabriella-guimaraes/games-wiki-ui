import React from "react";
import styles from "./Carrousel.module.css";
import Carousel from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CharacterCard from "../../molecules/CharacterCard/CharacterCard";

interface CardData {
    id: number;
    name: string;
    description: string;
    image: string;
    icon?: React.ReactNode;
  }
  
  interface CarouselCardProps {
    cards: CardData[];
  }

function Carrousel({ cards }: CarouselCardProps) {
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
                {cards.map((card) => (
                    <div key={card.id} className={styles.card}>
                        <CharacterCard
                            name={card.name}
                            description={card.description}
                            image={card.image}
                            icon={card.icon}
                        />
                    </div>
                ))}
            </Carousel>
    </section>
  );
}

export default Carrousel;
