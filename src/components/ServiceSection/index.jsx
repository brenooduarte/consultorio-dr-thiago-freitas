import "./styles.scss";
import Button from "../Button/index.jsx";

const ServiceSection = () => {
  return (
    <section id="service" className="service-section">
      <h2 className="title-section">Atendimento</h2>

      <div className="service-container">
        <div>
          <h2>Aberto</h2>
          <div className="service-card open-card">
            <p>
              <strong>Segunda</strong> à <strong>Sexta</strong> das
              <span> 8h às 11h30</span> e das <span>14h às 17h30</span> <br />
              <strong>Sábado</strong> das <span>8h às 11h30</span> e com
              agendamento <br />
              <strong>Domingo</strong> com agendamento
            </p>
          </div>
        </div>

        <div>
          <h2>Localização</h2>
          <div className="service-card location-card">
            <p>
              Rua João Firmino, 472. <br />
              Centro - <strong>Sumé-PB</strong>
            </p>
          </div>
        </div>
      </div>
      <Button text="Agendar consulta" className={"button"} />
    </section>
  );
};

export default ServiceSection;
