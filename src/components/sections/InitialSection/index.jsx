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

          <a className="telephone-number" href="">
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

          <Button text="Agendar consulta" className={"button"} />
        </div>
      </div>
    </section>
  );
};

export default InitialSection;
