import type { FC } from "react";
import HomeBanner from "@components/Home/HomeBanner/HomeBanner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageList from "@components/Home/MassageList/MassageList";
import HomeRequest from "@components/Home/HomeRequest/HomeRequest";

const Home: FC = () => {
  return (
    <>
      <HomeBanner />
      <SacredMoment />
      <MassageList />
      <HomeRequest />
    </>
  );
};

export default Home;
