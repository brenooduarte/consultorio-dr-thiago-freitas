import React, { useState } from "react";
import "./styles.scss";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

const CardCarousel = () => {
  const [currentIndexTopCards, setCurrentIndexTopCards] = useState(0);
  const [currentIndexBottomCards, setCurrentIndexBottomCards] = useState(0);

  const ITEMS_QUANTITY = 3;

  const topCards = [
    "Cirurgia Dental",
    "Clareamento Dental",
    "Plástica de Gengivas (Gengivoplastia)",
    "Ortodontia",
    "Facetas",
    "Implantodontia",
  ];

  const bottomCards = [
    "Limpeza Profissional e Promoção de Saúde",
    "Restauração",
    "Tratamento de Canal",
    "Próteses",
    "Tratamento de Gengiva (Periodontia)",
  ];

  const canNavigateNext = (currentIndex, cards) =>
    currentIndex + 3 < cards.length;

  const canNavigatePrev = (currentIndex) => currentIndex > 0;

  const nextSlide = () => {
    if (canNavigateNext(currentIndexTopCards, topCards)) {
      setCurrentIndexTopCards((prevIndex) => prevIndex + ITEMS_QUANTITY);
    }

    if (canNavigateNext(currentIndexBottomCards, bottomCards)) {
      setCurrentIndexBottomCards((prevIndex) => prevIndex + ITEMS_QUANTITY);
    }
  };

  const prevSlide = () => {
    if (canNavigatePrev(currentIndexTopCards)) {
      setCurrentIndexTopCards((prevIndex) => prevIndex - ITEMS_QUANTITY);
    }

    if (canNavigatePrev(currentIndexBottomCards)) {
      setCurrentIndexBottomCards((prevIndex) => prevIndex - ITEMS_QUANTITY);
    }
  };

  return (
    <div className="container-card-carousel">
      <div className="card-carousel">
        <div className="cards-container top-cards">
          {topCards
            .slice(currentIndexTopCards, currentIndexTopCards + ITEMS_QUANTITY)
            .map((card, index) => (
              <div className="card" key={index}>
                {card}
              </div>
            ))}
        </div>

        <div className="cards-container bottom-cards">
          {bottomCards
            .slice(
              currentIndexBottomCards,
              currentIndexBottomCards + ITEMS_QUANTITY
            )
            .map((card, index) => (
              <div className="card" key={index}>
                {card}
              </div>
            ))}
        </div>
      </div>

      <span
        className="prev-button"
        onClick={prevSlide}
        style={{
          display:
            canNavigatePrev(currentIndexTopCards) ||
            canNavigatePrev(currentIndexBottomCards)
              ? ""
              : "none",
        }}
      >
        <img src={arrowLeft} alt="Arrow left" />
      </span>

      <span
        className="next-button"
        onClick={nextSlide}
        style={{
          display:
            canNavigateNext(currentIndexTopCards, topCards) ||
            canNavigateNext(currentIndexBottomCards, bottomCards)
              ? ""
              : "none",
        }}
      >
        <img src={arrowRight} alt="Arrow right" />
      </span>
    </div>
  );
};

export default CardCarousel;
