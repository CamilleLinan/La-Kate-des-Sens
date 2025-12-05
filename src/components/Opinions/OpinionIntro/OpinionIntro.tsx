import type { FC } from "react";
import "./_OpinionIntro.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";

const OpinionIntro: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <div className="opinions-banner">
          <TitleSection titleText="Moments Partagés" />
          <p className="opinions-banner__text">
            Pendant ma formation, j’ai eu l’occasion de pratiquer plusieurs
            techniques de massage. Ici, vous pouvez découvrir les témoignages de
            celles et ceux qui ont bénéficié de mes soins : leur ressenti, leurs
            moments de détente et leur expérience globale.
            <br />
            Chaque avis reflète un instant partagé, et je vous laisse le plaisir
            de les parcourir pour vous faire une idée de mes prestations.
          </p>
        </div>
      }
    />
  );
};

export default OpinionIntro;
