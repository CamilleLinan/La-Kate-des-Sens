import type { FC } from "react";
import "./_SacredMoment.scss";
import illu_pres from "@assets/illu_pres.png";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomQuote from "@components/shared/CustomQuote/CustomQuote";

const SacredMoment: FC = () => {
  return (
    <section className="instant__sacre">
      <div className="intro">
        <TitleSection titleText="Instant Sacré" />
        <div>
          <p>
            Besoin de vous <b>relaxer</b>, de <b>relâcher les tensions</b> ou
            simplement de
            <b>prendre soin de vous</b> ?
          </p>
          <p>
            Offrez-vous un moment de <b>détente</b> et de <b>relaxation</b> avec
            un massage bien-être. Une parenthèse pour vous aider à{" "}
            <b>lâcher prise</b>.
          </p>
          <p>
            Et pour <b>remercier</b> celles et ceux qui reviennent
            régulièrement, une <b>carte de fidélité</b> est disponible afin de
            vous offrir des <b>avantages</b> au fil des séances.
          </p>
        </div>
      </div>

      <div className="content">
        <img src={illu_pres} alt="" className="illu__pres" />
        <div className="block">
          <h3>Où se déroulent les séances ?</h3>
          <p>
            Je me déplace jusqu'à chez vous (dans le secteur de <b>Bernay</b> et
            ses environs), ou si vous venez à mon domicile, à{" "}
            <b>Mesnil-en-Ouche</b>, vous serez accueillis dans une ambiance{" "}
            <b>calme et apaisante</b>.
          </p>
        </div>

        <div className="block">
          <h3>Un massage bien-être unique</h3>
          <p>
            Le massage bien-être est un outil précieux pour vous accompagner
            vers une <b>détente profonde</b>, une reconnexion{" "}
            <b>corps – cœur – esprit</b>. Je vous propose des massages bien-être
            uniques et personnalisés.
          </p>
          <p>
            Peu importe le nom exotique qu'on lui donne (massage balinais,
            massage suédois, …), il restera avant tout un moment de{" "}
            <b>pure détente</b>. Chaque séance est une combinaison{" "}
            <b>adaptée</b> à vos besoins.
          </p>
        </div>

        <div className="block">
          <h3>Une approche intuitive</h3>
          <p>
            Je me fie avant tout à mon intuition, en écoutant les{" "}
            <b>tensions du corps</b>, mais aussi en étant attentive à ce que
            vous <b>ressentez</b>.
          </p>
        </div>
      </div>

      <CustomQuote
        text={
          <span>
            « <b>Happycultrice :</b> Femme qui crée son miel des petits bonheurs
            de la vie »
          </span>
        }
      />
    </section>
  );
};

export default SacredMoment;
