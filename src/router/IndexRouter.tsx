import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@utils/ScrollToTop";
import Layout from "@components/shared/Layout/Layout";
import Home from "../pages/Home";
import Benefits from "../pages/Benefits";
import AboutMe from "../pages/AboutMe";

const IndexRouter: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/prestations" element={<Benefits />} />
          <Route path="/qui-suis-je" element={<AboutMe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
