import type { FC } from "react";
import OfferDiscovery from "@components/Offers/OfferDiscovery/OfferDiscovery";
import OfferGift from "@components/Offers/OfferGift/OfferGift";
import OfferParrain from "@components/Offers/OfferParrain/OfferParrain";
import OfferRequest from "@components/Offers/OfferRequest/OfferRequest";
import OfferFidelity from "@components/Offers/OfferFidelity/OfferFidelity";

const Offers: FC = () => {
  return (
    <section className="offers">
      <OfferDiscovery />
      <OfferFidelity />
      <OfferGift />
      <OfferParrain />
      <OfferRequest />
    </section>
  );
};

export default Offers;
