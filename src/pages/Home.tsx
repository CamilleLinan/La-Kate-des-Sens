import type { FC } from "react";
import Banner from "@components/shared/Banner/Banner";
import Presentation from "@components/Home/Presentation/Presentation";
import MassageList from "@components/Home/MassageList/MassageList";
import CustomRequest from "@components/Home/CustomRequest/CustomRequest";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <Presentation />
      <MassageList />
      <CustomRequest />
    </>
  );
};

export default Home;
