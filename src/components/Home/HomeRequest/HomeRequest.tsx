import type { FC } from "react";
import "./_HomeRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const HomeRequest: FC = () => {
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

export default HomeRequest;
