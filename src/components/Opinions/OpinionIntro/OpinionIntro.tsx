import type { FC } from "react";
import "./_OpinionIntro.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";

const OpinionIntro: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <div className="opinions-banner">
          <TitleSection titleText="Moments Partagés" />
          <p className="opinions-banner__text">
            Pendant ma formation, j’ai eu l’occasion de <b>pratiquer</b>{" "}
            plusieurs techniques de <strong>massage</strong>.
          </p>
          <p>
            Ici, vous pouvez découvrir les témoignages de celles et ceux qui ont
            bénéficié de mes soins : leur <b>ressenti</b> et leur{" "}
            <b>expérience globale</b>.
          </p>
          <p>
            Chaque avis reflète un <b>instant partagé</b>, et je vous laisse le
            plaisir de les parcourir pour vous faire une idée de{" "}
            <b>mes prestations</b>.
          </p>
        </div>
      }
    />
  );
};

export default OpinionIntro;
