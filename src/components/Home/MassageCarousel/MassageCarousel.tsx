import { type FC } from "react";
import "./_MassageCarousel.scss";
import { massages } from "@data/massages";
import { ClockCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import CustomCarousel from "@components/shared/CustomCarousel/CustomCarousel";

const MassageCarousel: FC = () => {
  return (
    <section className="massage__list">
      <TitleSection titleText="Mes Massages" />

      <p className="massage__list__text">
        Une bulle de douceur où chacun, et chaque membre de la famille pourra
        trouver sa place pour se ressourcer.
      </p>

      <CustomCarousel
        carouselContent={massages.map((massage) => (
          <div key={massage.id} className="slide__container">
            <div className="massage-card">
              <img alt={massage.title} src={massage.image} />
              <div className="massage-card__content">
                <h3 className="massage-card__title">{massage.title}</h3>
                <p>{massage.description}</p>
                <div className="massage-card__small__infos">
                  {massage.price ? (
                    <>
                      <span>
                        <ClockCircleOutlined /> {massage.duration}
                      </span>
                      <span>
                        <CreditCardOutlined /> {massage.price}
                        {massage.price2 && ` - ${massage.price2}`} €
                      </span>
                    </>
                  ) : (
                    <span>Tarif et durée sur mesure</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      ></CustomCarousel>

      <ButtonBase btnContent="Voir tous les massages" link="/prestations" />
    </section>
  );
};

export default MassageCarousel;
