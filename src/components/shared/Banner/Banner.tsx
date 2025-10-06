import type { FC } from "react";
import "./_Banner.scss";
import illu from "@assets/banner/illu_banner1.png";
import ButtonBase from "../ButtonBase/ButtonBase";

const Banner: FC = () => {
  return (
    <section className="banner">
      <div className="banner-container">
        <article className="banner-container-text">
          <div>
            <h2 className="title">Votre spécialiste massages, à domicile</h2>
            <p>
              Je m'appelle Catherine, passionnée par le bien-être et l’art du
              lâcher-prise. À travers mes massages, j’offre à chacun un moment
              de douceur et de reconnexion à soi.
            </p>
            <p>
              Offrez-vous une parenthèse de sérénité, simplement, chez vous.
            </p>
          </div>
          {/* <p>
            Je m'appelle Catherine et je suis passionnée par le bien-être et
            l'épanouissement personnel. Ma philosophie de vie, "carpe diem",
            m'inspire à vivre chaque instant pleinement et à profiter de chaque
            opportunité qui se présente à moi. C'est cette approche qui m'a
            conduite à me former en massage bien-être.
          </p>

          <p>
            Au fil de ma formation, j'ai découvert l'importance de prendre soin
            de soi, tant sur le plan physique que mental. Le massage bien-être
            est pour moi un moyen d'apporter détente et sérénité à ceux qui en
            ont besoin. J'aime créer un espace où chacun peut se ressourcer, se
            reconnecter à soi-même et lâcher prise.
          </p>

          <p>
            Mon objectif est de vous offrir une expérience unique et
            personnalisée, adaptée à vos besoins. Que vous cherchiez à réduire
            le stress, à soulager des tensions ou simplement à vous accorder un
            moment de douceur, je suis là pour vous accompagner.
          </p> */}

          <ButtonBase children="Prendre rendez-vous" />
        </article>
        <img src={illu} alt="banniere" className="banner-container-img" />
      </div>
    </section>
  );
};

export default Banner;
