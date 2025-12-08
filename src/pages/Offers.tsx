import type { FC } from "react";
import OfferDiscovery from "@components/Offers/OfferDiscovery/OfferDiscovery";
import OfferGift from "@components/Offers/OfferGift/OfferGift";
import OfferParrain from "@components/Offers/OfferParrain/OfferParrain";
import OfferRequest from "@components/Offers/OfferRequest/OfferRequest";

const Offers: FC = () => {
  return (
    <section className="offers">
      <OfferDiscovery />
      <OfferGift />
      <OfferParrain />
      <OfferRequest />
    </section>
  );
};

export default Offers;
