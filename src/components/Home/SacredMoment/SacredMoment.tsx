import type { FC } from "react";
import "./_SacredMoment.scss";
import illu_pres from "@assets/banner/illu_pres.webp";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomQuote from "@components/shared/CustomQuote/CustomQuote";
import { LinkOutlined } from "@ant-design/icons";
import { CONTACT_PARTNERSHIP } from "@utils/constants";
import CustomNavLink from "@components/shared/CustomNavLink/CustomNavLink";

const SacredMoment: FC = () => {
  return (
    <section className="instant__sacre">
      <div className="intro">
        <TitleSection titleText="Instant Sacré" />
        <div>
          <p>
            Besoin de vous <b>relaxer</b>, de <b>relâcher les tensions</b> ou
            simplement de <strong>prendre soin de vous</strong> ?
          </p>
          <p>
            Offrez-vous un moment de <b>détente</b> avec un{" "}
            <strong>massage bien-être</strong>. Une parenthèse pour vous aider à{" "}
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
          <div className="underline"></div>

          <p>
            Je me déplace jusqu'à chez vous (dans le secteur de{" "}
            <strong>Bernay</strong> et ses environs), ou si vous venez à mon
            domicile, au <strong>Mesnil-en-Ouche</strong>, vous serez accueillis
            dans une ambiance <b>calme et apaisante</b>.
          </p>
        </div>

        <div className="block">
          <h3>
            Un <strong>massage bien-être</strong> unique
          </h3>
          <div className="underline"></div>

          <p>
            Le <strong>massage bien-être</strong> est un outil précieux pour
            vous accompagner vers une <b>détente profonde</b>, une reconnexion{" "}
            <b>corps – cœur – esprit</b>.
          </p>
          <p>
            Peu importe le nom exotique qu'on lui donne (massage balinais,
            massage suédois, …), il restera avant tout un moment de{" "}
            <b>pure détente</b>. Chaque séance est une combinaison{" "}
            <b>adaptée</b> à vos besoins.
          </p>
          <p>
            Pour sublimer chaque soin, j’utilise notamment les huiles gourmandes{" "}
            <b>« Secret de Miel »</b>, proposées en partenariat avec Amélie Api
            Miel, conseillère de la marque. Leur <b>texture douce</b> et leur{" "}
            <b>parfum délicatement sucré</b> ajoutent une touche{" "}
            <b>sensorielle</b> supplémentaire aux massages.
            <br />
          </p>

          <CustomNavLink
            title="Page Facebook Amélie Api Miel"
            linkExt={CONTACT_PARTNERSHIP.facebookUrl}
            navContent={
              <>
                <LinkOutlined />
                <span>Découvrir la marque</span>
                <span>🐝</span>
              </>
            }
          />
        </div>

        <div className="block">
          <h3>Une approche intuitive</h3>
          <div className="underline"></div>

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
