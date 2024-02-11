import "./styles.scss";
import thiago from "../../assets/thiago.png";
import tooth from "../../assets/tooth.png";
import telephone from "../../assets/telephone.svg";
import thiagoAndPatient from "../../assets/thiago-and-patient.png";
import CardCarousel from "../../components/CardCarousel/index.jsx";

const Home = () => {
  return (
    <>
      <section className="initial-section">
        <div className="header">
          <img className="telephone-image" src={telephone} alt="Telephone" />
          <a className="telephone-number" href="">
            (83) 9 8179-4041
          </a>
          <a href="#profile">Perfil</a>
          <a href="#treatments">Tratamentos</a>
          <a href="">Atendimento</a>
          <a href="">Espaço</a>
        </div>

        <div className="info-container">
          <h1>Dr. Thiago Freitas</h1>
          <p>
            Agende sua consulta para cuidados <br />
            personalizados e resultados excepcionais. <br />
            Sorria com confiança!
          </p>
          <button className="button">Agendar consulta</button>
        </div>

        <img className="thiago-image" src={thiago} alt="Thiago" />
        <img className="tooth" src={tooth} alt="Tooth" />
        <div className="rectangle"></div>
      </section>

      <section id="profile" className="profile-section">
        <div className="half">
          <img
            className="thiago-patient-image"
            src={thiagoAndPatient}
            alt="Thiago and patient"
          />
        </div>

        <div className="half">
          <h2 className="profile-title">Perfil Profissional</h2>

          <h3>Dr. Thiago Freitas</h3>
          <p>
            <br />
            Como dentista apaixonado pela saúde bucal e pelo sorriso de meus
            pacientes, dedico minha carreira a proporcionar cuidados
            odontológicos excepcionais. Com uma sólida formação acadêmica, busco
            constantemente atualizações para oferecer tratamentos de última
            geração e promover sorrisos saudáveis e confiantes.
          </p>

          <h3>Educação e Formação:</h3>
          <p>
            <br />
            <li>Graduação em Odontologia ( FIP Campina Grande )</li>
          </p>
          <p>
            <br />
            <li>
              Aperfeiçoamento em Cirugia Oral Menor ( FIP Campina Grande )
            </li>
          </p>
          <p>
            <br />
            <li>Pós graduando em Ortodontia ( Funorte Campina grande )</li>
          </p>
        </div>
      </section>

      <section id="treatments" className="treatments-section">
        <div className="line" />

        <h2 className="treatments-title">Tratamentos</h2>
        <h3 className="treatments-subtitle">Realizados em nosso Consultório</h3>

        <CardCarousel />
      </section>
    </>
  );
};

export default Home;
