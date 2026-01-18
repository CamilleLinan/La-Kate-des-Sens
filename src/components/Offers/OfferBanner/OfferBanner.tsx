import type { FC } from "react";
import "./_OfferBanner.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";
import giftIllu from "@assets/gift-illu.webp";

const OfferBanner: FC = () => {
  const now = new Date();
  const endOfferDate = new Date("2026-01-31T23:59:59");

  const showOffer = now <= endOfferDate;

  return (
    <CustomBanner
      bannerContent={
        <div>
          <TitleSection titleText="Mes Offres" />
          <img src={giftIllu} alt="gift-illustration" className="offers__img" />

          <article className="offers__block offer-banner">
            <h3 className="offers__title">Offre Découverte</h3>
            <div className="underline"></div>

            <p className="offers__text">
              Profitez de <b>10€ de réduction</b> sur votre première séance de{" "}
              <strong>massage</strong>. Une belle occasion de découvrir un
              moment de détente et de bien-être.
            </p>
          </article>

          {showOffer && (
            <article className="offers__block offer-banner temporary">
              <h3 className="offers__title">Offre du Moment</h3>
              <div className="underline"></div>

              <p className="offers__text">
                En ce moment, profitez de <b>-20% sur tous les massages</b>{" "}
                jusqu'au 31 janvier 2026.
              </p>
            </article>
          )}
        </div>
      }
    />
  );
};

export default OfferBanner;
