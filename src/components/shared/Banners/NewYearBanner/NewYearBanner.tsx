import type { FC } from "react";
import "./_NewYearBanner.scss";
import bannerLeft from "@assets/banner/sakura-banner-left.webp";
import bannerRight from "@assets/banner/sakura-banner-right.webp";
import CustomAdBanner from "../CustomAdBanner/CustomAdBanner";

const NewYearBanner: FC = () => {
  return (
    <CustomAdBanner
      imgSrcLeft={bannerLeft}
      imgSrcRight={bannerRight}
      imgAlt="new-year-banner"
      bannerType="new-year"
      title="Résolution 2026: S’accorder du temps pour soi."
      subtitles={[
        <>
          Et si ce début d'année était l’occasion de <b>ralentir</b> ?
        </>,
        <>
          Le mois de janvier est un <b>mois de transition idéal</b> pour
          permettre à <b>notre corps et à notre esprit</b> de se reposer avant
          de retrouver <b>dynamisme et action.</b> <br />
          Accordez-vous un moment de <strong>massage</strong>… Un instant pour
          vous détendre, respirer et récupérer <b>en douceur</b>.
        </>,
      ]}
    />
  );
};

export default NewYearBanner;
