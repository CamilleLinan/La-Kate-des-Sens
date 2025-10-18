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

          <ButtonBase children="Prendre rendez-vous" link="/reserver" />
        </article>
        <img src={illu} alt="banniere" className="banner-container-img" />
      </div>
    </section>
  );
};

export default Banner;
