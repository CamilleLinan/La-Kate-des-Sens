import type { FC } from "react";
import "./_OfferBanner.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";
import giftIllu from "@assets/gift-illu.webp";
import { OFFERS_DATES } from "@utils/constants";
import isActiveOffer from "@utils/IsActiveOffer";
import Icon from "@assets/lotus.svg?react";

const OfferBanner: FC = () => {
  const showOfferNewYear = isActiveOffer(OFFERS_DATES.newYear);
  const showOfferValentine = isActiveOffer(OFFERS_DATES.valentine);

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

          {showOfferNewYear && (
            <article className="offers__block offer-banner temporary">
              <h3 className="offers__title">Offre du Moment</h3>
              <div className="underline"></div>

              {showOfferNewYear && (
                <p className="offers__text">
                  En ce moment, profitez de <b>-20% sur tous les massages</b>{" "}
                  jusqu'au 31 janvier 2026.
                </p>
              )}
            </article>
          )}

          {showOfferValentine && (
            <article className="offers__block offer-banner temporary">
              <h3 className="offers__title">
                💜 Offre spéciale Saint-Valentin 💜
              </h3>
              <div className="underline"></div>

              <div className="offers__list">
                <ul>
                  <li>
                    <Icon />
                    <span>
                      Le massage{" "}
                      <a
                        href="/prestations#eveil-des-sens"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        « L'Éveil des Sens »
                      </a>{" "}
                      est à <b>40€</b> au lieu de 60€ (1h) ;
                    </span>
                  </li>
                  <li>
                    <Icon />
                    <span>
                      Le massage{" "}
                      <a
                        href="/prestations#carpe-diem"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        « Le CarpeDiem »
                      </a>{" "}
                      est à <b>50€</b> au lieu de 70€ (1h30) ;
                    </span>
                  </li>
                </ul>
              </div>
            </article>
          )}
        </div>
      }
    />
  );
};

export default OfferBanner;
