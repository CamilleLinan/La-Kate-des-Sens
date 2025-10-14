import type { FC } from "react";
import Presentation from "@components/AboutMe/Presentation/Presentation";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const AboutMe: FC = () => {
  return (
    <>
      <Presentation />
      <CustomRequest
        column={true}
        title="Envie d’en savoir plus ou de vous offrir un moment de détente ?"
        description="Découvrez nos massages relaxants et laissez votre corps et votre esprit se ressourcer."
        buttons={[
          {
            children: "Découvrir les prestations",
            variant: "secondary",
            link: "/services",
          },
          {
            children: "Prendre rendez-vous",
            variant: "primary",
            link: "/contact",
          },
        ]}
      />
    </>
  );
};

export default AboutMe;
