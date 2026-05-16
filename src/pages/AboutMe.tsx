import type { FC } from "react";
import Presentation from "@components/AboutMe/Presentation/Presentation";
import AboutMeRequest from "@components/AboutMe/AboutMeRequest/AboutMeRequest";
import PressSection from "@components/AboutMe/PressSection/PressSection";

const AboutMe: FC = () => {
  return (
    <section className="aboutme">
      <Presentation />
      <PressSection />
      <AboutMeRequest />
    </section>
  );
};

export default AboutMe;
