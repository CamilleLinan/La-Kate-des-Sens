import { type FC } from "react";
import "./_OpinionList.scss";
import { opinions } from "@data/opinions";
import RandomPick from "@utils/RandomPick";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import CustomCarousel from "@components/shared/CustomCarousel/CustomCarousel";
import CustomQuote from "@components/shared/CustomQuote/CustomQuote";

const OpinionList: FC = () => {
  // Select 9 opinions randomly
  const randomReviews = RandomPick(opinions, 9);

  return (
    <section className="opinion__list">
      <TitleSection titleText="Moments Partagés" />

      <CustomCarousel
        carouselContent={randomReviews.map((item, i) => (
          <div key={i} className="slide__container">
            <div className="opinion-card">
              <h3 className="opinion-card__title">{item.name}</h3>
              <p>{item.opinion}</p>
              {item.massage && (
                <span className="opinion-card__tag">{item.massage}</span>
              )}
            </div>
          </div>
        ))}
      ></CustomCarousel>

      <ButtonBase btnContent="Voir tous les avis" link="/avis" />

      <CustomQuote text="« Le Toucher est un art sacré hérité des traditions spirituelles, transmis dans la Présence. »" />
    </section>
  );
};

export default OpinionList;
