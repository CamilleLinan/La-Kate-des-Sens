import { useEffect, useState, type FC } from "react";
import "./_MassageTimeline.scss";
import { massages } from "@data/massages";
import { ClockCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

const MassageTimeline: FC = () => {
  const classicMassages = massages.filter((m) => !m.options);
  const optionMassages = massages.filter((m) => m.options);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) return;

    setTimeout(() => {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 0);
  }, []);

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
      <div id="classics" className="massages__grid">
        {classicMassages.map((massage, i) => (
          <div
            id={massage.id}
            key={i}
            className={`massages__block ${
              isMobile
                ? i % 2 === 0
                  ? "massages__block--light"
                  : "massages__block--rose"
                : i % 4 === 0 || i % 4 === 3
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

            {massage.prices && (
              <p className="massages__info">
                <span>
                  <ClockCircleOutlined /> {massage.duration}
                </span>
                <span>
                  <CreditCardOutlined /> {massage.prices?.join(" - ")} €
                </span>
              </p>
            )}

            {i % 2 === 0 && <div className="massages__dot" />}
          </div>
        ))}
        <div className="massages__line"></div>
      </div>

      <p className="massages__text bonus">
        *Les massages <b>« Carpe Diem »</b> et <b>« L’Éveil des Sens »</b>{" "}
        englobent le corps entier, de la tête jusqu’au bout des pieds et des
        mains.
      </p>

      {optionMassages.map((massage) => (
        <div id="options" key={massage.id} className="massages--options">
          <div className="massages--options__intro">
            <TitleSection titleText="Moments à partager" />

            <h3 className="massages--options__title">{massage.title}</h3>

            {massage.descriptionLong.map((desc, i) => (
              <p key={i} className="massages__desc">
                {desc}
              </p>
            ))}

            {massage.bonus && (
              <p className="massages__bonus">{massage.bonus}</p>
            )}
          </div>

          <div className="massages--options__container">
            {massage.options?.map((option, i) => (
              <div key={i} className="massages__block">
                <h4 className="massages__title">{option.label}</h4>

                <p className="massages__desc">{option.description}</p>

                <p className="massages__info">
                  <span>
                    <ClockCircleOutlined /> {option.duration}
                  </span>
                  <span>
                    <CreditCardOutlined /> {option.prices?.join(" - ")} €
                  </span>
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}

      <ButtonBase btnContent="Prendre rendez-vous" link="/contact" />
    </section>
  );
};

export default MassageTimeline;
