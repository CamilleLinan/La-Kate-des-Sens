import type { FC } from "react";
import "./_OfferRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const OfferRequest: FC = () => {
  return (
    <CustomRequest
      title="Une question ou besoin d’information ?"
      description="Vous souhaitez en savoir plus sur mes prestations, mes disponibilités ou le déroulement d’un soin ? N’hésitez pas à me contacter, je vous répondrai avec plaisir."
      buttons={[
        {
          children: "Contactez-moi",
          variant: "primary",
          link: "/contact",
        },
      ]}
    />
  );
};

export default OfferRequest;
