import { useEffect, useState, type FC } from "react";
import "./_MassageTimeline.scss";
import { massages } from "@data/massages";
import { ClockCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

const MassageTimeline: FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 980);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="massages">
      <TitleSection titleText="Mes Massages" />
      <p className="massages__text">
        Une bulle de douceur où chacun, et chaque membre de la famille pourra
        trouver sa place pour se ressourcer.
      </p>
      <div className="massages__grid">
        {massages.map((massage, index) => (
          <div
            key={massage.id}
            className={`massages__block ${
              isMobile
                ? index % 2 === 0
                  ? "massages__block--light"
                  : "massages__block--rose"
                : index % 4 === 0 || index % 4 === 3
                ? "massages__block--light"
                : "massages__block--rose"
            }`}
          >
            <div className="massages__container">
              <h3 className="massages__title">{massage.title}</h3>

              {massage.descriptionLong.map((desc, i) => (
                <p key={i} className="massages__desc">
                  {desc}
                </p>
              ))}

              {massage.bonus && (
                <p className="massages__bonus">{massage.bonus}</p>
              )}
            </div>

            {massage.price ? (
              <p className="massages__info">
                <span>
                  <ClockCircleOutlined /> {massage.duration}
                </span>
                <span>
                  <CreditCardOutlined /> {massage.price} €
                </span>
              </p>
            ) : (
              <p className="massages__info noprice">
                Tarif et durée sur mesure
              </p>
            )}

            {index % 2 === 0 && <div className="massages__dot" />}
          </div>
        ))}
        <div className="massages__line"></div>
      </div>

      <p className="massages__text bonus">
        *Les massages <b>« Carpe Diem »</b> et <b>« L’Éveil des Sens »</b>{" "}
        englobent le corps entier, de la tête jusqu’au bout des pieds et des
        mains.
      </p>

      <ButtonBase children="Prendre rendez-vous" link="/contact" />
    </section>
  );
};

export default MassageTimeline;
