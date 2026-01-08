import type { FC } from "react";
import "./_ChristmasBanner.scss";
import bannerLeft from "@assets/banner/gift-banner-left.webp";
import bannerRight from "@assets/banner/gift-banner-right.webp";
import CustomAdBanner from "../CustomAdBanner/CustomAdBanner";

const ChristmasBanner: FC = () => {
  return (
    <CustomAdBanner
      imgSrcLeft={bannerLeft}
      imgSrcRight={bannerRight}
      imgAlt="gift-banner"
      bannerType="christmas"
      title="Noël approche, faites plaisir..."
      subtitles={[
        <>
          ...Offrez un <strong>massage bien-être à domicile</strong> à vos
          proches ! 🎁
        </>,
        <>
          En ce moment, profitez de <b>10€ de réduction</b> sur les massages de
          1h et plus !
        </>,
      ]}
    />
  );
};

export default ChristmasBanner;
