import type { FC } from "react";
import "./_GiftBanner.scss";
import ButtonBase from "../ButtonBase/ButtonBase";
import bannerLeft from "@assets/banner/gift-banner-left.jpeg";
import bannerRight from "@assets/banner/gift-banner-right.jpeg";

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
          <p className="gift-banner__subtitle">
            ...Offrez un massage bien-être à domicile à vos proches ! 🎁
          </p>
          <p className="gift-banner__subtitle">
            En ce moment, profitez de 10€ de réduction sur les massages de 1h et
            plus !
          </p>
        </div>
        <ButtonBase children="Contactez-moi" link="/contact" />
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
