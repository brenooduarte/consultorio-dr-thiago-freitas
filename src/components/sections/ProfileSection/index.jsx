import "./styles.scss";
import thiagoAndPatient from "../../../assets/thiago-and-patient.jpeg";

const ProfileSection = () => {
  return (
    <section id="profile" className="profile-section">
      <div id="image-container" className="half">
        <img
          className="thiago-patient-image"
          src={thiagoAndPatient}
          alt="Thiago and patient"
        />
      </div>

      <div id="info-container" className="half">
        <h2 className="profile-title">Perfil Profissional</h2>

        <h3>Dr. Thiago Freitas</h3>
        <p>
          Como dentista apaixonado pela saúde bucal e pelo sorriso de meus
          pacientes, dedico minha carreira a proporcionar cuidados odontológicos
          excepcionais. Com uma sólida formação acadêmica, busco constantemente
          atualizações para oferecer tratamentos de última geração e promover
          sorrisos saudáveis e confiantes.
        </p>

        <h3>Educação e Formação:</h3>
        <p>
          <li>Graduação em Odontologia ( FIP Campina Grande )</li>
        </p>
        <p>
          <li>Aperfeiçoamento em Cirugia Oral Menor ( FIP Campina Grande )</li>
        </p>
        <p>
          <li>Pós graduando em Ortodontia ( Funorte Campina grande )</li>
        </p>
      </div>
    </section>
  );
};

export default ProfileSection;
