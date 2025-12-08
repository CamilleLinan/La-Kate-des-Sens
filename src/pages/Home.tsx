import type { FC } from "react";
import GiftBanner from "@components/shared/GiftBanner/GiftBanner";
import HomeBanner from "@components/Home/HomeBanner/HomeBanner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageCarousel from "@components/Home/MassageCarousel/MassageCarousel";
import OpinionCarousel from "@components/Home/OpinionCarousel/OpinionCarousel";
import HomeRequest from "@components/Home/HomeRequest/HomeRequest";

const Home: FC = () => {
  return (
    <section className="home">
      <GiftBanner />
      <HomeBanner />
      <SacredMoment />
      <MassageCarousel />
      <OpinionCarousel />
      <HomeRequest />
    </section>
  );
};

export default Home;
