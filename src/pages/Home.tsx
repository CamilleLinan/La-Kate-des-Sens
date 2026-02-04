import type { FC } from "react";
// import ChristmasBanner from "@components/shared/Banners/ChristmasBanner/ChristmasBanner";
// import NewYearBanner from "@components/shared/Banners/NewYearBanner/NewYearBanner";
import HomeBanner from "@components/Home/HomeBanner/HomeBanner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageCarousel from "@components/Home/MassageCarousel/MassageCarousel";
import OpinionCarousel from "@components/Home/OpinionCarousel/OpinionCarousel";
import HomeRequest from "@components/Home/HomeRequest/HomeRequest";
import ValentineBanner from "@components/shared/Banners/ValentineBanner/ValentineBanner";
import isActiveOffer from "@utils/IsActiveOffer";
import { OFFERS_DATES } from "@utils/constants";

const Home: FC = () => {
  const showOfferValentine = isActiveOffer(OFFERS_DATES.valentine);

  return (
    <section className="home">
      {/* <ChristmasBanner /> */}
      {/* <NewYearBanner /> */}
      {showOfferValentine && <ValentineBanner />}
      <HomeBanner />
      <SacredMoment />
      <MassageCarousel />
      <OpinionCarousel />
      <HomeRequest />
    </section>
  );
};

export default Home;
