import type { FC } from "react";
import Banner from "@components/shared/Banner/Banner";
import Presentation from "@components/Home/Presentation/Presentation";
import MassageList from "@components/Home/MassageList/MassageList";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <Presentation />
      <MassageList />
    </>
  );
};

export default Home;
