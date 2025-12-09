import { type FC } from "react";
import "./_OpinionList.scss";
import { opinions } from "@data/opinions";

const OpinionList: FC = () => {
  return (
    <section className="opinions__list">
      <div className="opinions__list__grid">
        {opinions.slice().map((opinion, i) => (
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
    </section>
  );
};

export default OpinionList;
