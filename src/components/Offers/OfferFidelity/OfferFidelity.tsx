import type { FC } from "react";
import "./_OfferFidelity.scss";

const OfferFidelity: FC = () => {
  return (
    <section className="offers">
      <article className="offers__block fidelity">
        <h3 className="offers__title">Programme de Fidélité</h3>
        <p className="offers__text">
          Pour vous remercier de votre <b>fidélité</b>, chaque séance vous
          permet de <b>cumuler des tampons</b> sur votre carte de fidélité.
        </p>

        <p className="offers__text">
          Une fois <b>5 tampons acquis</b>, vous avez droit à{" "}
          <b>30% de réduction</b> sur votre séance.
        </p>

        <p className="offers__text">
          Et une fois <b>complète</b>, profitez d’un avantage exclusif : une{" "}
          <b>séance gratuite</b> !
        </p>
      </article>
    </section>
  );
};

export default OfferFidelity;
