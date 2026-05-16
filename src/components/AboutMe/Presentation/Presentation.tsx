import type { FC } from "react";
import "./_Presentation.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";
import profil from "@assets/profil/profil.webp";
import sakuraFrame from "@assets/profil/sakura-frame.webp";

const Presentation: FC = () => {
  return (
    <>
      <CustomBanner
        bannerContent={
          <article className="about">
            <TitleSection titleText="Qui suis-je ?" />

            <div className="about__text">
              <div className="about__profil">
                <div className="about__profil__images">
                  <img
                    src={profil}
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
                    , m’inspire à vivre chaque instant pleinement et à profiter
                    de chaque opportunité qui se présente à moi.
                  </p>
                  <p>
                    C’est cette approche qui m’a conduite à me former en
                    <strong> massage bien-être</strong>. Au fil de ma formation,
                    j’ai découvert l’importance de{" "}
                    <strong>prendre soin de soi</strong>, tant sur le plan
                    physique que mental.
                  </p>
                </div>
              </div>

              <p>
                J’aime créer un espace où chacun peut se <b>ressourcer</b>, se{" "}
                <b>reconnecter à soi-même</b> et <strong>lâcher prise</strong>.
                Mon objectif est de vous offrir une{" "}
                <strong>expérience unique et personnalisée</strong>, adaptée à
                vos besoins — que vous cherchiez à réduire le stress, à soulager
                des tensions ou simplement à vous accorder un{" "}
                <strong>moment de douceur</strong>.
              </p>
            </div>
          </article>
        }
      />
    </>
  );
};

export default Presentation;
