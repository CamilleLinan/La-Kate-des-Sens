import type { FC } from "react";
import "./_PressSection.scss";

import { articles } from "@data/pressArticle";

import CustomQuote from "@components/shared/CustomQuote/CustomQuote";
import TitleSection from "@components/shared/TitleSection/TitleSection";
import PressCard from "../PressCard/PressCard";

const PressSection: FC = () => {
  return (
    <>
      <section className="press">
        <div className="press__inner">
          <div className="press__header">
            <TitleSection titleText="La Kate des Sens dans la presse" />
          </div>

          <div className="press__cards">
            {articles.map((article) => (
              <PressCard key={article.url} article={article} />
            ))}
          </div>
        </div>
      </section>

      <CustomQuote
        text={
          <>
            <p className="quote__title">
              <b>
                « Take time to drink your tea » — Prenez le temps de boire votre
                thé
              </b>
            </p>

            <span>
              Le bonheur est possible quand vous êtes capable de faire les
              choses et d’être ce que vous voulez être.
            </span>

            <br />

            <cite>— Thich Nhat Hanh, Réponses du cœur</cite>
          </>
        }
      />
    </>
  );
};

export default PressSection;
