import type { FC } from "react";
import "./_ContactBanner.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";

const ContactBanner: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <article className="contact__banner">
          <TitleSection titleText="Me Contacter" />
          <p className="contact__banner__subtitle">
            Chaque personne est <b>unique</b>, et je prends le temps{" "}
            <b>d’écouter vos besoins </b> pour vous orienter vers le
            <strong> massage</strong> le plus adapté .
          </p>
          <p className="contact__banner__subtitle">
            N’hésitez pas à me contacter pour poser vos questions, discuter de
            vos envies, ou simplement en savoir plus sur{" "}
            <b>mes prestations & tarifs.</b>
          </p>
          <DisplayContactInfo bannerMode={true} />
          <p className="contact__banner__subtitle">
            Vous pouvez <b>m’écrire directement</b> à l’aide du formulaire
            ci-dessous. Je vous répondrai avec plaisir pour échanger sur vos
            besoins ou vous aider à choisir le <strong>massage</strong> qui vous
            correspond le mieux .
          </p>
        </article>
      }
    />
  );
};

export default ContactBanner;
