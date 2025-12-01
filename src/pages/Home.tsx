import type { FC } from "react";
import HomeBanner from "@components/Home/HomeBanner/HomeBanner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageList from "@components/Home/MassageList/MassageList";
import HomeRequest from "@components/Home/HomeRequest/HomeRequest";
import GiftBanner from "@components/shared/GiftBanner/GiftBanner";
import OpinionList from "@components/Home/OpinionList/OpinionList";

const Home: FC = () => {
  return (
    <>
      <GiftBanner />
      <HomeBanner />
      <SacredMoment />
      <MassageList />
      <OpinionList />
      <HomeRequest />
    </>
  );
};

export default Home;
