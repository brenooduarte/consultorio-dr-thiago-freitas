import "./styles.scss";
import InitialSection from "../../components/InitialSection/index.jsx";
import ProfileSection from "../../components/ProfileSection/index.jsx";
import TreatmentsSection from "../../components/TreatmentsSection/index.jsx";
import ServiceSection from "../../components/ServiceSection/index.jsx";

const Home = () => {
  return (
    <>
      <InitialSection />

      <ProfileSection />

      <TreatmentsSection />

      <ServiceSection />
    </>
  );
};

export default Home;
