import { type FC, useState } from "react";
import "./_OpinionList.scss";
import { opinions } from "@data/opinions";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";

const PAGE_SIZE = 5;

const OpinionList: FC = () => {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const handleViewMore = () => {
    setVisibleCount((prev) => Math.min(prev + PAGE_SIZE, opinions.length));
  };

  return (
    <section className="opinions__list">
      <div className="opinions__list__grid">
        {opinions.slice(0, visibleCount).map((opinion, i) => (
          <div
            key={i}
            className={`opinions__list__block ${
              i % 2 === 0
                ? "opinions__list__block--light"
                : "opinions__list__block--rose"
            }`}
          >
            <div className="opinions__list__container">
              <h3 className="opinions__list__title">{opinion.name}</h3>
              <p className="opinions__list__desc">{opinion.opinion}</p>
            </div>

            {opinion.massage && (
              <p className="opinions__list__info">
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

export default OpinionList;
