import type { FC } from "react";
import "./_Presentation.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";
import CustomQuote from "@components/shared/CustomQuote/CustomQuote";
import aboutImage from "@assets/aboutme/freepik__adjust__34116.png";
import sakuraFrame from "@assets/aboutme/sakura-frame.png";

const Presentation: FC = () => {
  return (
    <CustomBanner
      children={
        <article className="about">
          <TitleSection titleText="Qui suis-je ?" />

          <div className="about__text">
            <div className="about__profil">
              <div className="about__profil__images">
                <img
                  src={aboutImage}
                  alt="Catherine - La Kate des Sens"
                  className="picture"
                />
                <img
                  src={sakuraFrame}
                  alt="Catherine - La Kate des Sens"
                  className="frame"
                />
              </div>
              <div>
                <p>
                  Je m'appelle <b>Catherine</b> et je suis passionnée par le
                  bien-être et l’épanouissement personnel. Ma philosophie de
                  vie,{" "}
                  <b>
                    <i>« Carpe Diem »</i>
                  </b>
                  , m’inspire à vivre chaque instant pleinement et à profiter de
                  chaque opportunité qui se présente à moi.
                </p>
                <p>
                  C’est cette approche qui m’a conduite à me former en
                  <b> massage bien-être</b>. Au fil de ma formation, j’ai
                  découvert l’importance de <b>prendre soin de soi</b>, tant sur
                  le plan physique que mental.
                </p>
              </div>
            </div>

            <p>
              J’aime créer un espace où chacun peut se ressourcer, se
              reconnecter à soi-même et <b>lâcher prise</b>. Mon objectif est de
              vous offrir une <b>expérience unique et personnalisée</b>, adaptée
              à vos besoins — que vous cherchiez à réduire le stress, à soulager
              des tensions ou simplement à vous accorder un moment de douceur.
            </p>
          </div>

          <CustomQuote
            text={
              <>
                <p className="quote__title">
                  <b>
                    « Take time to drink your tea » — Prenez le temps de boire
                    votre thé
                  </b>
                </p>
                <span>
                  Le bonheur est possible quand vous êtes capable de faire les
                  choses et d’être ce qui vous voulez être.
                </span>
                <br />
                <cite>— Thich Nhat Hanh, Réponses du cœur</cite>
              </>
            }
          />
        </article>
      }
    />
  );
};

export default Presentation;
