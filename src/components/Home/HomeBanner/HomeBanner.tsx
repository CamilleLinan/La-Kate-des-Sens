import type { FC } from "react";
import "./_HomeBanner.scss";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";
import illu from "@assets/banner/illu_banner1.webp";
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
                  <span>
                    Catherine, praticienne en <strong>massage bien-être</strong>
                  </span>
                </h2>
                <p>
                  Passionnée par le <strong>bien-être</strong> et{" "}
                  <b>l’art du lâcher-prise</b>, j’accompagne chacun à travers
                  des massages pensés comme de véritables{" "}
                  <strong>moments de douceur</strong> et de{" "}
                  <b>reconnexion à soi</b>.
                </p>
                <p>
                  Offrez-vous une parenthèse de sérénité, simplement, au{" "}
                  <strong>Mesnil-en-Ouche</strong> ou à{" "}
                  <strong>votre domicile</strong>.
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
