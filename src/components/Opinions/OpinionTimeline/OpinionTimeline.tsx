import { type FC, useState } from "react";
import "./_OpinionTimeline.scss";
import { opinions } from "@data/opinions";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

const PAGE_SIZE = 5;

const OpinionTimeline: FC = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, opinions.length));
  };

  return (
    <section className="opinions">
      <div className="opinions__grid">
        {opinions.slice(0, visibleCount).map((opinion, i) => (
          <div
            key={i}
            className={`opinions__block ${
              i % 2 === 0 ? "opinions__block--light" : "opinions__block--rose"
            }`}
          >
            <div className="opinions__container">
              <h3 className="opinions__title">{opinion.name}</h3>
              <p className="opinions__desc">{opinion.opinion}</p>
            </div>

            {opinion.massage && (
              <p className="opinions__info">
                <span>{opinion.massage}</span>
              </p>
            )}
          </div>
        ))}
      </div>

      {visibleCount < opinions.length && (
        <ButtonBase onClick={handleViewMore} btnContent="Voir plus" />
      )}
    </section>
  );
};

export default OpinionTimeline;
