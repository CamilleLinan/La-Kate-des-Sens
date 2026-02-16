import type { FC } from "react";
import "./_ServiceBanner.scss";
import { services } from "@data/services";
import { oils } from "@data/oils";
import Icon from "@assets/lotus.svg?react";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomList from "@components/shared/CustomList/CustomList";
import CustomBanner from "@components/shared/Banners/CustomBanner/CustomBanner";
import { LinkOutlined } from "@ant-design/icons";
import { CONTACT_PARTNERSHIP } from "@utils/constants";
import CustomNavLink from "@components/shared/CustomNavLink/CustomNavLink";
import photo from "@assets/frames/photokate3.webp";

const ServiceList: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <article className="services">
          <TitleSection titleText="Mes Prestations" />

          <div className="frame-box">
            <img src={photo} alt="gift-illustration" className="photo" />
          </div>

          <div className="services__content">
            <p className="services__text">
              Lorsque je me rends chez vous tout est fait pour transformer votre
              espace en un <b>lieu de sérénité</b>. Chaque détail est
              soigneusement étudié pour recréer une ambiance{" "}
              <strong>spa</strong> dans votre domicile.
            </p>

            <CustomList
              items={services}
              icon={Icon}
              className="service__item"
            />

            <article className="oils__list">
              <div>
                <h3 className="oils__list__title">Les huiles Bio utilisées</h3>
                <span>&nbsp;- Douceur olfactive</span>
              </div>
              <CustomList items={oils} icon={Icon} className="oil__item" />
            </article>

            <article className="services__partner">
              <p className="services__text">
                <span>
                  Parmi ces huiles, j’ai le plaisir de travailler avec la gamme{" "}
                  <b>« Secret de Miel »</b>, connue pour ses{" "}
                  <b>textures douces</b> et ses <b>parfums naturels</b> issus de
                  la ruche.{" "}
                </span>
                <span>
                  Grâce à mon partenariat avec Amélie Api Miel, conseillère de
                  la marque, je sélectionne des huiles qui{" "}
                  <b>nourrissent la peau</b> tout en offrant une expérience
                  sensorielle <b>chaleureuse et apaisante</b>.
                </span>
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
            </article>

            <div className="separator"></div>

            <p className="services__text">
              Pour les massages à domicile*, j’arrive environ{" "}
              <b>10 à 15 minutes</b> avant l’heure convenue afin de préparer
              sereinement la table, le matériel et l’ambiance. L’installation et
              le rangement s’effectuent <b>en dehors</b> du temps du massage.
            </p>
            <p className="services__text">
              Votre massage se terminera par une <b>remise au monde</b>, en
              prenant le temps d’apprécier le soin reçu autour d’un thé ou d’une
              infusion... Un pur moment de <strong>détente</strong>.
            </p>
            <p className="services__note">
              * Les frais de déplacement sont à ajouter aux tarifs des
              prestations. Ils varient en fonction de votre localisation.
            </p>
            <p className="services__quote">
              Les massages que je pratique sont destinés au bien-être et à la
              détente du corps et de l'esprit. <br /> Ils ne sont ni médicaux,
              ni à visée thérapeutique, et n'ont aucun caractère sexuel ou
              naturiste.
            </p>
          </div>
        </article>
      }
    />
  );
};

export default ServiceList;
