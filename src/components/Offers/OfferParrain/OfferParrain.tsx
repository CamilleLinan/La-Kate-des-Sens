import type { FC } from "react";
import "./_OfferParrain.scss";

const OfferParrain: FC = () => {
  return (
    <article className="offers__block parrain">
      <h3 className="offers__title">Programme de Parrainage</h3>
      <div className="underline"></div>

      <p className="offers__text">
        Obtenez <b>1 heure de massage offerte</b> en recommandant mes services
        autour de vous.
      </p>
      <p className="offers__text">
        Pour chaque personne venant de votre part, vous cumulez
        <b> 10 minutes</b> de massage. <br />
        En parrainant <b>6 personnes</b>, vous bénéficiez ainsi d’une séance
        d’une heure offerte.
      </p>
      <p className="offers__text">
        N’hésitez pas à en parler à vos proches&nbsp;!
      </p>
    </article>
  );
};

export default OfferParrain;
