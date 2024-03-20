import "./styles.scss";
import thiago from "../../../assets/thiago.png";
import toothMobile from "../../../assets/tooth-mobile.png";
import tooth from "../../../assets/tooth.png";
import telephoneWhite from "../../../assets/telephone-white.svg";
import telephoneBlack from "../../../assets/telephone-black.svg";
import Button from "../../Button/index.jsx";

const InitialSection = () => {
  return (
    <section className="initial-section">
      <div className="rectangle">
        <div className="header">
          <picture>
            <source
              className="telephone-image"
              media="(min-width: 1023px)"
              srcset={telephoneBlack}
              alt="Telephone"
            />

            <img
              className="telephone-image"
              src={telephoneWhite}
              alt="Telephone"
            />
          </picture>

          <a className="telephone-number" href="tel:83981794041">
            (83) 9 8179-4041
          </a>
          <a className="link" href="#profile">
            Perfil
          </a>
          <a className="link" href="#treatments">
            Tratamentos
          </a>
          <a className="link" href="#space">
            Espaço
          </a>
          <a className="link" href="#service">
            Atendimento
          </a>
        </div>

        <img className="thiago-image" src={thiago} alt="Thiago" />

        <picture>
          <source
            className="tooth"
            media="(max-width: 1023px)"
            srcset={toothMobile}
            alt="Tooth"
          />
          <img className="tooth" src={tooth} alt="Tooth" />
        </picture>
      </div>

      <div className="info-container">
        <div className="info-items">
          <h1>Dr. Thiago Freitas</h1>
          <p>
            Agende sua consulta para cuidados <br />
            personalizados e resultados excepcionais. <br />
            Sorria com confiança!
          </p>

          <Button
            link="https://wa.me/558381794041?text=Olá,%20gostaria%20de%20marcar%20uma%20consulta%20no%20consultório%20do%20Dr.%20Thiago%20Freitas.%20%0AQuais%20horários%20estão%20disponíveis%20para%20esta%20semana%3F"
            text="Agendar consulta"
            className={"button"}
          />
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
