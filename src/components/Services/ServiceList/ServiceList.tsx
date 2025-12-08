import type { FC } from "react";
import "./_ServiceList.scss";
import { services } from "@data/services";
import { oils } from "@data/oils";
import Icon from "@assets/lotus.svg?react";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import CustomList from "@components/shared/CustomList/CustomList";
import CustomBanner from "@components/shared/CustomBanner/CustomBanner";

const ServiceList: FC = () => {
  return (
    <CustomBanner
      bannerContent={
        <article className="services">
          <TitleSection titleText="Mes Prestations" />
          <div className="services__content">
            <p className="services__text">
              Lorsque je me rends chez vous tout est fait pour transformer votre
              espace en un <b>lieu de sérénité</b>. Chaque détail est
              soigneusement étudié pour recréer une ambiance <b>spa</b> dans
              votre domicile.
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

            <p className="services__text">
              Pour les massages à domicile*, j’arrive environ{" "}
              <b>10 à 15 minutes</b> avant l’heure convenue afin de préparer
              sereinement la table, le matériel et l’ambiance. L’installation et
              le rangement s’effectuent en dehors du temps du massage.
            </p>
            <p className="services__text">
              Votre massage se terminera par une remise au monde, en prenant le
              temps d’apprécier le soin reçu autour d’un thé ou d’une
              infusion... Un pur moment de détente.
            </p>
            <p className="services__note">
              * Les frais de déplacement sont à ajouter aux tarifs des
              prestations. Ils varient en fonction de votre localisation.
            </p>
            <p className="services__quote">
              Les massages bien-être que je pratique sont destinés au bien-être
              et à la détente du corps et de l'esprit. <br /> Ils ne sont ni
              médicaux, ni à visée thérapeutique, et n'ont aucun caractère
              sexuel ou naturiste.
            </p>
          </div>
        </article>
      }
    />
  );
};

export default ServiceList;
