import React, { useEffect, useState } from "react";
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

  const [isVisible, setIsVisible] = useState(false);

  const ITEMS_QUANTITY = 2;

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
    "Procedimento estético que cuida e suaviza a anatomia natural dos seus dentes, atingindo a cor ideal para cada tipo de dente.",
    "Procedimento cirúrgico,  onde colocamos um dente feito de algum material compatível com o osso do paciente (titânio, por exemplo) e porcelana.",
  ];

  const bottomCardDescriptions = [
    "Proporciona a retirada do tártaro, sujeira resistente que, se acumulada, pode levar a problemas como gengivite e perda dentária.",
    "Procedimento no qual, retiramos a cárie e preenchemos com um material adequado para que o dente consiga se recuperar da agressão.",
    "Consiste na remoção das bactérias do nervo dental e aplicação de medicação para evitar sua proliferação.",
    "Pacientes com ausência de dentes ou perda parcial podem se beneficiar da confecção de próteses que melhoram a mastigação e a fonética.",
    "São procedimentos de limpeza e orientação que visam promover a saúde das suas gengivas.",
    "Apliacação de flúor, selantes, orientações de higiene que facilitam a saúde oral.",
  ];

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
    currentIndex + ITEMS_QUANTITY < cards.length;

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
    setIsVisible(false);
    setHoveredIndexTopCards(index);
  };

  const handleMouseOutTopCards = () => {
    setIsVisible(true);
    setTimeout(() => {
      setHoveredIndexTopCards(null);
      setHoveredIndexBottomCards(null);
    }, 300);
  };

  const handleMouseOverBottomCards = (index) => {
    setIsVisible(false);
    setHoveredIndexBottomCards(index);
  };

  const handleMouseOutBottomCards = () => {
    setIsVisible(true);
    setTimeout(() => {
      setHoveredIndexBottomCards(null);
      setHoveredIndexTopCards(null);
    }, 300);
  };

  useEffect(() => {
    AOS.init();
  });

  return (
    <div
      data-aos="fade-up"
      data-aos-anchor-placement="top-bottom"
      className="container-card-carousel"
    >
      <div className="card-carousel">
        <div className="cards-container top-cards">
          {topCards
            .slice(currentIndexTopCards, currentIndexTopCards + ITEMS_QUANTITY)
            .map((card, index) => {
              const arrayIndex = currentIndexTopCards + index;
              return (
                <div className="card" key={index}>
                  <img
                    className="card-icon"
                    src={topCardIcon[arrayIndex]}
                    alt={topCards[arrayIndex]}
                  />
                  <span>
                    {hoveredIndexTopCards === index ? (
                      <div
                        className={`card-hovered card-text ${
                          isVisible == 0 ? "fade-in" : "fade-out"
                        }`}
                      >
                        <span className="title-hovered">{card}</span>
                        {topCardDescriptions[arrayIndex]}
                        <span
                          onClick={() => {
                            handleMouseOutTopCards();
                          }}
                          className="close-button"
                        >
                          Fechar
                        </span>
                      </div>
                    ) : (
                      <span className="card-title">{card}</span>
                    )}
                    <span
                      onClick={() => handleMouseOverTopCards(index)}
                      className="open-button"
                    >
                      Detalhes
                    </span>
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
                <div className="card" key={index}>
                  <img
                    className="card-icon"
                    src={bottomCardIcon[arrayIndex]}
                    alt={bottomCards[arrayIndex]}
                  />
                  <span>
                    {hoveredIndexBottomCards === index ? (
                      <div
                        className={`card-hovered card-text ${
                          isVisible == 0 ? "fade-in" : "fade-out"
                        }`}
                      >
                        <span className="title-hovered">{card}</span>
                        {bottomCardDescriptions[arrayIndex]}
                        <span
                          onClick={() => {
                            handleMouseOutBottomCards();
                          }}
                          className="close-button"
                        >
                          Fechar
                        </span>
                      </div>
                    ) : (
                      <span className="card-title">{card}</span>
                    )}
                    <span
                      onClick={() => handleMouseOverBottomCards(index)}
                      className="open-button"
                    >
                      Detalhes
                    </span>
                  </span>
                </div>
              );
            })}
        </div>
      </div>

      <nav className="buttons">
        <span
          className={`prev-button ${
            canNavigatePrev(currentIndexTopCards) ||
            canNavigatePrev(currentIndexBottomCards)
              ? ""
              : "hidden"
          }`}
          onClick={prevSlide}
        >
          <img src={arrowLeft} alt="Arrow left" />
        </span>

        <span
          className={`next-button ${
            canNavigateNext(currentIndexTopCards, topCards) ||
            canNavigateNext(currentIndexBottomCards, bottomCards)
              ? ""
              : "hidden"
          }`}
          onClick={nextSlide}
        >
          <img src={arrowRight} alt="Arrow right" />
        </span>
      </nav>
    </div>
  );
};

export default CardCarousel;
