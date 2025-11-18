import type { FC } from "react";
import "./_HomeRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const HomeRequest: FC = () => {
  return (
    <CustomRequest
      title="Une question ou besoin d’information ?"
      description="Vous souhaitez en savoir plus sur mes prestations, mes disponibilités ou le déroulement d’un soin ? N’hésitez pas à me contacter, je vous répondrai avec plaisir."
      buttons={[
        {
          children: "Me Contacter",
          variant: "primary",
          link: "/contact",
        },
      ]}
    />
  );
};

export default HomeRequest;
