import type { FC } from "react";
import Presentation from "@components/AboutMe/Presentation/Presentation";
import AboutMeRequest from "@components/AboutMe/AboutMeRequest/AboutMeRequest";

const AboutMe: FC = () => {
  return (
    <>
      <Presentation />
      <AboutMeRequest />
    </>
  );
};

export default AboutMe;
