import type { FC } from "react";
import "./_ServiceRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const ServiceRequest: FC = () => {
  return (
    <CustomRequest
      title="Vous avez une demande particulière ?"
      description="Chaque personne est unique, et chaque massage peut être adapté à vos besoins. Pour un soin entièrement personnalisé, contactez-moi et créons ensemble votre moment bien-être."
      buttons={[
        {
          children: "Demander un devis",
          variant: "primary",
          link: "/contact",
        },
      ]}
    />
  );
};

export default ServiceRequest;
