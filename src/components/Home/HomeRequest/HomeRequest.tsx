import type { FC } from "react";
import "./_HomeRequest.scss";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const HomeRequest: FC = () => {
  return (
    <CustomRequest
      title="Découvrez mes Offres & Avantages"
      description="Profitez de réductions, de jolis bons cadeaux et d’un programme de parrainage pour vivre ou offrir un moment de bien-être. Consultez la page dédiée pour en savoir plus."
      buttons={[
        {
          btnContent: "Voir les Offres",
          variant: "primary",
          link: "/offres",
        },
      ]}
    />
  );
};

export default HomeRequest;
