import type { FC } from "react";
import "./_OfferDiscovery.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";

const OfferDiscovery: FC = () => {
  return (
    <section className="offers">
      <CustomBanner
        children={
          <div>
            <TitleSection titleText="Mes Offres" />

            <article className="offers__block discovery">
              <h3 className="offers__title">Offre Découverte</h3>
              <p className="offers__text">
                Profitez de <b>10€ de réduction</b> sur votre première séance de
                massage. Une belle occasion de découvrir un moment de détente et
                de bien-être.
              </p>
            </article>
          </div>
        }
      />
    </section>
  );
};

export default OfferDiscovery;
