import type { FC } from "react";
import "./_ContactBanner.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";
import { NavLink } from "react-router-dom";

const ContactBanner: FC = () => {
  return (
    <CustomBanner
      children={
        <article className="contact__banner">
          <TitleSection titleText="Me Contacter" />
          <p className="contact__banner__subtitle">
            Chaque personne est <b>unique</b>, et je prends le temps d’
            <b>écouter vos besoins </b> pour vous orienter vers le
            <b> massage le plus adapté</b>.
            <p>
              N’hésitez pas à me contacter pour poser vos questions, discuter de
              vos envies, ou simplement en savoir plus sur{" "}
              <NavLink to="/prestations">
                <b>mes prestations & tarifs.</b>
              </NavLink>
            </p>
          </p>
          <DisplayContactInfo bannerMode={true} />
          <p className="contact__banner__subtitle">
            Vous pouvez <b>m’écrire directement</b> à l’aide du formulaire
            ci-dessous. Je vous répondrai avec plaisir pour échanger sur vos
            besoins ou vous aider à{" "}
            <b>choisir le massage qui vous correspond le mieux</b>.
          </p>
        </article>
      }
    />
  );
};

export default ContactBanner;
