import type { FC } from "react";
import Banner from "@components/shared/Banner/Banner";
import Presentation from "@components/Home/Presentation/Presentation";

const Home: FC = () => {
  return (
    <>
      <Banner />
      <Presentation />
    </>
  );
};

export default Home;