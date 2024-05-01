import "./styles.scss";
import Button from "../../Button/index.jsx";
import locationIcon from "../../../assets/location.png";
import scheduleIcon from "../../../assets/schedule.png";
import clockIcon from "../../../assets/clock.png";

const ServiceSection = () => {
  return (
    <section id="service" className="service-section">
      <h2 className="title-section">Atendimento</h2>

      <div className="service-container">
        {/* <div>
          <h2>
            <img src={clockIcon} alt="Ícone de relógio" />
            Horário Especial
          </h2>
          <div className="service-card special-hours-card">
            <p>
              <strong>01.04 Segunda-feira</strong>{" "}
              <span id="close">Fechado</span> <br />
              <strong>02.04 Terça-feira</strong> das <span>8h às 11h30</span> e
              das <span>13h30 às 17h</span>
              <br />
              <strong>03.04 Quarta-feira</strong> das <span>8h às 11h30</span> e
              das <span>13h30 às 17h</span>
            </p>
          </div>
        </div> */}

        <div>
          <h2>
            <img src={scheduleIcon} alt="Ícone de agenda" />
            Agenda
          </h2>
          <div className="service-card open-card">
            <p>
              <strong>Segunda</strong> e <strong>Quarta</strong> das
              <span> 18h às 21h</span> <br />
              <strong>Terça</strong> das <span> 8h às 12h</span> e das
              <span> 14h às 17h</span> ({" "}
              <span className="parenthesis">A noite agendado</span> ) <br />
              <strong>Quinta</strong> e <strong>Sexta</strong> das
              <span> 14h às 18h</span> ({" "}
              <span className="parenthesis">A noite agendado</span> ) <br />
              <strong>Sábado</strong> das <span>8h às 12h</span>
            </p>
          </div>
        </div>

        <div>
          <h2>
            <img src={locationIcon} alt="Ícone de localização" />
            Localização
          </h2>
          <div className="service-card location-card">
            <p>
              Rua João Firmino, 472. <br />
              Centro - <strong>Sumé-PB</strong>
            </p>
          </div>
        </div>
      </div>
      <Button
        link="https://wa.me/558381794041?text=Olá,%20gostaria%20de%20marcar%20uma%20consulta%20no%20consultório%20do%20Dr.%20Thiago%20Freitas.%20%0A%0AQuais%20horários%20estão%20disponíveis%20para%20esta%20semana%3F"
        text="Agendar consulta"
        className={"button"}
      />
    </section>
  );
};

export default ServiceSection;
