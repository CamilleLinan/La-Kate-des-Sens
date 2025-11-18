import type { FC } from "react";
import "./_OfferGift.scss";
import CustomList from "@components/shared/CustomList/CustomList";
import Icon from "@assets/lotus.svg?react";
import { offers } from "@data/offers";

const OfferGift: FC = () => {
  return (
    <article className="offers__block gift">
      <h3 className="offers__title">Bons Cadeaux</h3>
      <p className="offers__text">
        Envie de faire plaisir à un proche&nbsp;? Le bon cadeau est idéal pour
        offrir un moment de relaxation unique, une pause bien-être dont on se
        souvient.
      </p>
      <p className="offers__text">
        Les bons cadeaux sont valables <b>6 mois</b> à compter de la date
        d’achat. Ils ne sont ni échangeables, ni remboursables.
      </p>

      <CustomList icon={Icon} className="offers__giftlist" items={offers} />
    </article>
  );
};

export default OfferGift;
