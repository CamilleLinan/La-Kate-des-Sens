import type { FC } from "react";
import OfferBanner from "@components/Offers/OfferBanner/OfferBanner";
import OfferGift from "@components/Offers/OfferGift/OfferGift";
import OfferParrain from "@components/Offers/OfferParrain/OfferParrain";
import OfferRequest from "@components/Offers/OfferRequest/OfferRequest";
import OfferFidelity from "@components/Offers/OfferFidelity/OfferFidelity";

const Offers: FC = () => {
  return (
    <section className="offers">
      <OfferBanner />
      <OfferFidelity />
      <OfferGift />
      <OfferParrain />
      <OfferRequest />
    </section>
  );
};

export default Offers;
