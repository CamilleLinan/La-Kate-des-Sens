import type { FC } from "react";
import "./_HomeBanner.scss";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";
import illu from "@assets/banner/illu_banner1.png";
import ButtonBase from "../../shared/ButtonBase/ButtonBase";

const HomeBanner: FC = () => {
  return (
    <>
      <CustomBanner
        bannerContent={
          <div className="banner__container">
            <article className="banner__container__text">
              <div>
                <h2 className="title">
                  Catherine, praticienne en massage bien-être
                </h2>
                <p>
                  Passionnée par le <b>bien-être</b> et{" "}
                  <b>l’art du lâcher-prise</b>, j’accompagne chacun à travers
                  des massages pensés comme de véritables{" "}
                  <b>moments de douceur</b> et de <b>reconnexion à soi</b>.
                </p>
                <p>
                  Offrez-vous une <b>parenthèse de sérénité</b>, simplement, au
                  Mesnil-en-Ouche ou à votre domicile.
                </p>
              </div>

              <ButtonBase btnContent="Prendre rendez-vous" link="/contact" />
            </article>
            <img src={illu} alt="banniere" className="banner__container__img" />
          </div>
        }
      />
    </>
  );
};

export default HomeBanner;
