import type { FC } from "react";
import "./_OfferDiscovery.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";
import giftIllu from "@assets/gift-illu.webp";

const OfferDiscovery: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <div>
          <TitleSection titleText="Mes Offres" />
          <img src={giftIllu} alt="gift-illustration" className="offers__img" />

          <article className="offers__block discovery">
            <h3 className="offers__title">Offre Découverte</h3>
            <div className="underline"></div>

            <p className="offers__text">
              Profitez de <b>10€ de réduction</b> sur votre première séance de{" "}
              <strong>massage</strong>. Une belle occasion de découvrir un
              moment de détente et de bien-être.
            </p>
          </article>
        </div>
      }
    />
  );
};

export default OfferDiscovery;
