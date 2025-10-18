import type { FC } from "react";
import Banner from "@components/shared/Banner/Banner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageList from "@components/Home/MassageList/MassageList";
import HomeRequest from "@components/Home/HomeRequest/HomeRequest";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <SacredMoment />
      <MassageList />
      <HomeRequest />
    </>
  );
};

export default Home;
