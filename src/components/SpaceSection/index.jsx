import "./styles.scss";
import { useEffect } from "react";
import Carousel from "../Carousel";

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
      const titleElements = document.querySelectorAll(".title-section");
      const firstElementOffsetTop = firstElement.offsetTop;
      const secondElementOffsetTop = secondElement.offsetTop;

      if (
        window.scrollY >= firstElementOffsetTop &&
        window.scrollY < secondElementOffsetTop
      ) {
        body.style.backgroundColor = "#a9d5ff";
        titleElements.forEach((titleElement) => {
          titleElement.style.color = "#ffffff";
        });
      } else {
        body.style.backgroundColor = "#f4f4f4";
        titleElements.forEach((titleElement) => {
          titleElement.style.color = "";
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section id="space" className="space-section">
      <h2 id="change-point-for-white-background" className="title-section">
        Espaço
      </h2>
      <Carousel>
        {Array.from({ length: CARDS }).map((_, i) => (
          <iframe
            key={i}
            width="220.5"
            height="392"
            src="https://www.youtube.com/embed/ZNkZ8FI1JoY"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        ))}
      </Carousel>
    </section>
  );
};

export default SpaceSection;
