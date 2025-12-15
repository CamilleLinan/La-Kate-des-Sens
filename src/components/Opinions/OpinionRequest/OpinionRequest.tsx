import type { FC } from "react";
import "./_OpinionRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const OpinionRequest: FC = () => {
  return (
    <CustomRequest
      column={true}
      title="Envie d’en savoir plus ou de vous offrir un moment de détente ?"
      description="Découvrez mes massages relaxants et laissez votre corps et votre esprit se ressourcer."
      buttons={[
        {
          btnContent: "Découvrir les prestations",
          variant: "secondary",
          link: "/prestations",
        },
        {
          btnContent: "Prendre rendez-vous",
          variant: "primary",
          link: "/contact",
        },
      ]}
    />
  );
};

export default OpinionRequest;
