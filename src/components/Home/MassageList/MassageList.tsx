import { useEffect, useState, type FC } from "react";
import "./_MassageList.scss";
import { Carousel } from "antd";
import { massages } from "@data/massages";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import CustomQuote from "@components/shared/CustomQuote/CustomQuote";

const MassageList: FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) setSlidesToShow(1);
      else if (window.innerWidth < 1125) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="massage__list">
      <TitleSection titleText="Mes Massages" />

      <p className="massage__list__text">
        Une bulle de douceur où chacun, et chaque membre de la famille pourra
        trouver sa place pour se ressourcer.
      </p>

      <Carousel
        arrows
        adaptiveHeight={true}
        draggable={true}
        dots={true}
        infinite={true}
        slidesPerRow={slidesToShow}
      >
        {massages.map((massage) => (
          <div key={massage.id} className="slide__container">
            <div className="custom-card">
              <img alt={massage.title} src={massage.image} />
              <div className="custom-card__content">
                <h3 className="custom-card__title">{massage.title}</h3>
                <p>{massage.description}</p>
                <div className="custom-card__small__infos">
                  <span>{massage.duration}</span>
                  <span>
                    {massage.price
                      ? `${massage.price}€`
                      : "Tarif et durée sur mesure"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Carousel>

      <ButtonBase children="Voir tous les massages" link="/prestations" />

      <CustomQuote text="« Le Toucher est un art sacré hérité des traditions spirituelles, transmis dans la Présence. »" />
    </section>
  );
};

export default MassageList;
