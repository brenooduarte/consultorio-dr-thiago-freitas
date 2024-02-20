import React, { useState } from "react";
import "./styles.scss";
import arrowLeft from "../../assets/arrow-left.svg";
import arrowRight from "../../assets/arrow-right.svg";

import orthodontic from "../../assets/card-icons/orthodontic.png";
import dentalSurgery from "../../assets/card-icons/dental-surgery.png";
import toothExtraction from "../../assets/card-icons/tooth-extraction.png";
import toothWhitening from "../../assets/card-icons/tooth-whitening.png";
import dentalVeneer from "../../assets/card-icons/dental-veneer.png";
import dentalImplant from "../../assets/card-icons/dental-implant.png";
import rootCanal from "../../assets/card-icons/root-canal.png";
import toothRestoration from "../../assets/card-icons/tooth-restoration.png";
import denture from "../../assets/card-icons/denture.png";
import dentalCare from "../../assets/card-icons/dental-care.png";
import gum from "../../assets/card-icons/gum.png";
import healthPromotion from "../../assets/card-icons/health-promotion.png";

const CardCarousel = () => {
  const [currentIndexTopCards, setCurrentIndexTopCards] = useState(0);
  const [currentIndexBottomCards, setCurrentIndexBottomCards] = useState(0);
  const [hoveredIndexTopCards, setHoveredIndexTopCards] = useState(null);
  const [hoveredIndexBottomCards, setHoveredIndexBottomCards] = useState(null);

  const ITEMS_QUANTITY = 3;

  const topCards = [
    "Cirurgia Dental",
    "Clareamento Dental",
    "Plástica de Gengivas",
    "Aparelho",
    "Facetas",
    "Implantodontia",
  ];

  const bottomCards = [
    "Limpeza Profissional",
    "Restauração",
    "Tratamento de Canal",
    "Próteses",
    "Tratamento de Gengiva",
    "Promoção de Saúde",
  ];

  const topCardDescriptions = [
    "Se destina à sessar a dor do paciente, extraindo dentes com cárie, com fraturas, bem como outras patologias.",
    "Promove a cor ideal dos seus dentes, garantindo um sorriso adequado e bonito.",
    "Gengivoplastia busca modificar o formato da gengiva para torná-la mais simétrica e preservar a estética dental.",
    "Ortodontia é uma área que se destina ao tratamento e prevenção de desordens dentais e esqueleticas.",
  ];

  const bottomCardDescriptions = [];

  const topCardIcon = [
    toothExtraction,
    toothWhitening,
    dentalSurgery,
    orthodontic,
    dentalVeneer,
    dentalImplant,
  ];

  const bottomCardIcon = [
    dentalCare,
    toothRestoration,
    rootCanal,
    denture,
    gum,
    healthPromotion,
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

  const handleMouseOverTopCards = (index) => {
    setHoveredIndexTopCards(index);
  };

  const handleMouseOutTopCards = () => {
    setHoveredIndexTopCards(null);
  };

  const handleMouseOverBottomCards = (index) => {
    setHoveredIndexBottomCards(index);
  };

  const handleMouseOutBottomCards = () => {
    setHoveredIndexBottomCards(null);
  };

  return (
    <div className="container-card-carousel">
      <div className="card-carousel">
        <div className="cards-container top-cards">
          {topCards
            .slice(currentIndexTopCards, currentIndexTopCards + ITEMS_QUANTITY)
            .map((card, index) => {
              const arrayIndex = currentIndexTopCards + index;
              return (
                <div
                  className={`card ${
                    hoveredIndexTopCards === index ? "hovered" : ""
                  }`}
                  key={index}
                  onMouseOver={() => handleMouseOverTopCards(index)}
                  onMouseOut={() => handleMouseOutTopCards()}
                >
                  <img
                    className="card-icon"
                    src={topCardIcon[arrayIndex]}
                    alt=""
                  />
                  <span>
                    {hoveredIndexTopCards === index ? (
                      <div className="card-text">
                        <span className="title-hovered">{card}</span>
                        {topCardDescriptions[arrayIndex]}
                      </div>
                    ) : (
                      card
                    )}
                  </span>
                </div>
              );
            })}
        </div>

        <div className="cards-container bottom-cards">
          {bottomCards
            .slice(
              currentIndexBottomCards,
              currentIndexBottomCards + ITEMS_QUANTITY
            )
            .map((card, index) => {
              const arrayIndex = currentIndexBottomCards + index;
              return (
                <div
                  className={`card ${
                    hoveredIndexBottomCards === index ? "hovered" : ""
                  }`}
                  key={index}
                  onMouseOver={() => handleMouseOverBottomCards(index)}
                  onMouseOut={() => handleMouseOutBottomCards()}
                >
                  <img
                    className="card-icon"
                    src={bottomCardIcon[arrayIndex]}
                    alt=""
                  />
                  <span>
                    {hoveredIndexBottomCards === index ? (
                      <div className="card-text">
                        <span className="title-hovered">{card}</span>
                        {bottomCardDescriptions[arrayIndex]}
                      </div>
                    ) : (
                      card
                    )}
                  </span>
                </div>
              );
            })}
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
