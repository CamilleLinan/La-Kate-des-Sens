import type { FC } from "react";
import OfferDiscovery from "@components/Offers/OfferDiscovery/OfferDiscovery";
import OfferGift from "@components/Offers/OfferGift/OfferGift";
import OfferParrain from "@components/Offers/OfferParrain/OfferParrain";
import OfferRequest from "@components/Offers/OfferRequest/OfferRequest";

const Offers: FC = () => {
  return (
    <>
      <OfferDiscovery />
      <OfferGift />
      <OfferParrain />
      <OfferRequest />
    </>
  );
};

export default Offers;
