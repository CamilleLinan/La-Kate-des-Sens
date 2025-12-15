import type { FC } from "react";
import "./_GiftBanner.scss";
import ButtonBase from "../ButtonBase/ButtonBase";
import bannerLeft from "@assets/banner/gift-banner-left.webp";
import bannerRight from "@assets/banner/gift-banner-right.webp";

const GiftBanner: FC = () => {
  return (
    <section className="gift-banner">
      <img
        src={bannerLeft}
        alt="gift-banner"
        className="gift-banner__img left"
      />
      <article className="gift-banner__content">
        <div>
          <h3 className="gift-banner__title">
            Noël approche, faites plaisir...
          </h3>
          <p className="gift-banner_subtitle">
            ...Offrez un <strong>massage bien-être à domicile</strong> à vos
            proches ! 🎁
          </p>
          <p className="gift-banner_subtitle">
            En ce moment, profitez de <b>10€ de réduction</b> sur les massages
            de 1h et plus !
          </p>
        </div>
        <ButtonBase btnContent="Contactez-moi" link="/contact" />
      </article>
      <img
        src={bannerRight}
        alt="gift-banner"
        className="gift-banner__img right"
      />
    </section>
  );
};

export default GiftBanner;
