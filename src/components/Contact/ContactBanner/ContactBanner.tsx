import type { FC } from "react";
import "./_ContactBanner.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import DisplayContactInfo from "@components/shared/DisplayContactInfo/DisplayContactInfo";

const ContactBanner: FC = () => {
  return (
    <section className="banner">
      <TitleSection titleText="Me Contacter" />
      <p className="banner__subtitle">
        Je réponds à vos questions et vous accompagne pour trouver le massage
        qui correspond le mieux à vos besoins.
      </p>
      <DisplayContactInfo bannerMode={true} />
    </section>
  );
};

export default ContactBanner;
