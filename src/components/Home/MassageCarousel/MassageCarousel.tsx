import { type FC } from "react";
import "./_MassageCarousel.scss";
import { massages } from "@data/massages";
import { ClockCircleOutlined, CreditCardOutlined } from "@ant-design/icons";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import CustomCarousel from "@components/shared/CustomCarousel/CustomCarousel";
import type { Massage } from "models/Massage";
import type { MassageOption } from "models/MassageOption";

type MassageSlide = Massage & {
  option?: MassageOption;
};

const MassageCarousel: FC = () => {
  const slides = massages.flatMap((massage): MassageSlide[] => {
    if (!massage.options) return [massage];

    return massage.options.map((option) => ({
      ...massage,
      option,
    }));
  });

  return (
    <section className="massage__list">
      <TitleSection titleText="Mes Massages" />

      <p className="massage__list__text">
        Une bulle de douceur où chacun, et chaque membre de la famille pourra
        trouver sa place pour se ressourcer.
      </p>

      <CustomCarousel
        carouselContent={slides.map((slide, i) => (
          <div key={i} className="slide__container">
            <div className="massage-card">
              <img alt={slide.title} src={slide.option?.image ?? slide.image} />

              <div className="massage-card__content">
                <h3 className="massage-card__title">
                  {slide.title}
                  {slide.option && <> - {slide.option.label}</>}
                </h3>

                <p>{slide.option?.description ?? slide.description}</p>

                <div className="massage-card__small__infos">
                  <span>
                    <ClockCircleOutlined />{" "}
                    {slide.option?.duration ?? slide.duration}
                  </span>
                  <span>
                    <CreditCardOutlined />{" "}
                    {slide.option?.prices.join(" - ") ??
                      slide.prices?.join(" - ")}{" "}
                    €
                  </span>
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
