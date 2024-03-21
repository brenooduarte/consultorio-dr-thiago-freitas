import "./styles.scss";
import { useEffect } from "react";
import Carousel from "../../Carousel";

const CARDS = 4;

const SpaceSection = () => {
  useEffect(() => {
    const handleScroll = () => {
      const body = document.body;
      const firstElement = document.getElementById(
        "change-point-for-blue-background"
      );
      const secondElement = document.getElementById(
        "change-point-for-white-background"
      );
      const firstElementOffsetTop = firstElement.offsetTop;
      const secondElementOffsetTop = secondElement.offsetTop;

      if (
        window.scrollY >= firstElementOffsetTop &&
        window.scrollY < secondElementOffsetTop
      ) {
        body.style.backgroundColor = "#a9d5ff";
      } else {
        body.style.backgroundColor = "#f4f4f4";
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const videos = [
    "https://www.youtube.com/embed/PPzmK8gBtCc",
    "https://www.youtube.com/embed/CfddRN5gv-I",
    "https://www.youtube.com/embed/gBVYsGBGCIo",
    "https://www.youtube.com/embed/MCyRRPsy55Y",
  ];

  return (
    <section id="space" className="space-section">
      <h2 className="title-section">Consultório</h2>
      <h3
        id="change-point-for-white-background"
        className="treatments-subtitle"
      >
        Conheça nosso espaço
      </h3>
      <Carousel>
        {videos.map((link, i) => (
          <iframe
            key={i}
            src={link}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </Carousel>
    </section>
  );
};

export default SpaceSection;
