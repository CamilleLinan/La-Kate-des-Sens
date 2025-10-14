import type { FC } from "react";
import Banner from "@components/shared/Banner/Banner";
import SacredMoment from "@components/Home/SacredMoment/SacredMoment";
import MassageList from "@components/Home/MassageList/MassageList";
import CustomRequest from "@components/shared/CustomRequest/CustomRequest";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <SacredMoment />
      <MassageList />
      <CustomRequest />
    </>
  );
};

export default Home;
