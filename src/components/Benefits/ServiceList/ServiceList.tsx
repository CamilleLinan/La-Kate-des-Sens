import type { FC } from "react";
import "./_ServiceList.scss";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import { services } from "@data/services";
import Icon from "@assets/lotus.svg?react";

const ServiceList: FC = () => {
  return (
    <section className="prestations">
      <TitleSection titleText="Mes Prestations" />
      <div className="prestations__content">
        <p className="prestations__text">
          Lorsque je me rends chez vous tout est fait pour transformer votre
          espace en un <b>lieu de sérénité</b>. Chaque détail est soigneusement
          étudié pour recréer une ambiance <b>spa</b> dans votre domicile.
        </p>

        <ul className="prestations__list">
          {services.map((service, i) => (
            <li key={i}>
              <Icon className="icon" />
              {service}
            </li>
          ))}
        </ul>

        <p className="prestations__text">
          Pour les massages à domicile*, j’arrive environ <b>10 à 15 minutes</b>{" "}
          avant l’heure convenue afin de préparer sereinement la table, le
          matériel et l’ambiance. L’installation et le rangement s’effectuent en
          dehors du temps du massage.
        </p>
        <p className="prestations__note">
          * Les frais de déplacement sont à ajouter aux tarifs des prestations.
          Ils varient en fonction de votre localisation.
        </p>
        <p className="prestations__quote">
          Les massages bien-être que je pratique sont destinés au bien-être et à
          la détente du corps et de l'esprit. <br /> Ils ne sont ni médicaux, ni
          à visée thérapeutique, et n'ont aucun caractère sexuel ou naturiste.
        </p>
      </div>
    </section>
  );
};

export default ServiceList;
