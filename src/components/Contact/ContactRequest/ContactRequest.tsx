import type { FC } from "react";
import "./_ContactRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const ContactRequest: FC = () => {
  return (
    <CustomRequest
      title="Envie d’en savoir plus ou de vous offrir un moment de détente ?"
      description="Découvrez mes massages relaxants et laissez votre corps et votre esprit se ressourcer."
      buttons={[
        {
          btnContent: "Découvrir les prestations",
          variant: "primary",
          link: "/prestations",
        },
      ]}
    />
  );
};

export default ContactRequest;
