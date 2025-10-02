import { useEffect, useState, type FC } from "react";
import "./_MassageList.scss";
import { Card, Carousel } from "antd";
import { massages } from "@data/massages";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

const { Meta } = Card;

const MassageList: FC = () => {
  const [slidesToShow, setSlidesToShow] = useState(4);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 600) setSlidesToShow(1);
      else if (window.innerWidth < 900) setSlidesToShow(2);
      else if (window.innerWidth < 1200) setSlidesToShow(3);
      else setSlidesToShow(4);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section className="massage-list">
      <TitleSection titleText="Mes Massages" />
      <Carousel
        arrows
        adaptiveHeight={true}
        draggable={true}
        dots={true}
        infinite={true}
        slidesPerRow={slidesToShow}
      >
        {massages.map((massage) => (
          <div key={massage.id} className="slide-container">
            <Card cover={<img alt={massage.title} src={massage.image} />}>
              <Meta
                title={massage.title}
                description={
                  <>
                    <p>{massage.description}</p>
                    <p className="card-small-infos">
                      <strong>{massage.duration}</strong>
                      <strong>
                        {massage.price
                          ? `${massage.price}€`
                          : "Tarif et durée sur mesure"}
                      </strong>
                    </p>
                  </>
                }
              />
            </Card>
          </div>
        ))}
      </Carousel>
      <ButtonBase children="Voir tous les massages" />
    </section>
  );
};

export default MassageList;
