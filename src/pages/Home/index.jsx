import "./styles.scss";
import InitialSection from "../../components/sections/InitialSection/index.jsx";
import ProfileSection from "../../components/sections/ProfileSection/index.jsx";
import TreatmentsSection from "../../components/sections/TreatmentsSection/index.jsx";
import ServiceSection from "../../components/sections/ServiceSection/index.jsx";
import SpaceSection from "../../components/sections/SpaceSection/index.jsx";
import { useEffect } from "react";

const Home = () => {
  return (
    <>
      <InitialSection />

      <ProfileSection />

      <TreatmentsSection />

      {/*<SpaceSection />

      <ServiceSection /> */}
    </>
  );
};

export default Home;
