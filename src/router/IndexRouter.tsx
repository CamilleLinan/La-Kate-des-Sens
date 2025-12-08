import type { FC } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ScrollToTop from "@utils/ScrollToTop";
import Layout from "@components/shared/Layout/Layout";
import Home from "../pages/Home";
import Services from "../pages/Services";
import AboutMe from "../pages/AboutMe";
import Offers from "../pages/Offers";
import Opinions from "../pages/Opinions";
import Contact from "../pages/Contact";

const IndexRouter: FC = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path="/prestations" element={<Services />} />
          <Route path="/qui-suis-je" element={<AboutMe />} />
          <Route path="/offres" element={<Offers />} />
          <Route path="/avis" element={<Opinions />} />
          <Route path="/contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default IndexRouter;
