import "./styles.scss";
import CardCarousel from "../CardCarousel/index.jsx";

const TreatmentsSection = () => {
  return (
    <section id="treatments" className="treatments-section">
      <h2 className="title-section">Tratamentos</h2>
      <h3 className="treatments-subtitle">Realizados em nosso Consultório</h3>
      <span id="change-point-for-blue-background"></span>
      <CardCarousel />
    </section>
  );
};

export default TreatmentsSection;
