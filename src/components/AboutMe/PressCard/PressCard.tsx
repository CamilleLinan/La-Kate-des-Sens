import "./_PressCard.scss";
import type { FC } from "react";
import type { PressArticle } from "@models/PressArticle";
import { Tag } from "antd";
import ExternalLinkIcon from "@assets/icons/external-link-icon.svg?react";

interface PressCardProps {
  article: PressArticle;
}

const PressCard: FC<PressCardProps> = ({ article }) => {
  return (
    <a
      href={article.url}
      target="_blank"
      rel="noopener noreferrer"
      className="press__card"
      aria-label={`Lire l'article : ${article.title}`}
    >
      <div className="press__card__top">
        <Tag className="press__card__journal">{article.journal}</Tag>

        <span className="press__card__date">{article.date}</span>
      </div>

      <h3 className="press__card__title">{article.title}</h3>

      <p className="press__card__excerpt">{article.excerpt}</p>

      <span className="press__card__cta">
        Lire l'article
        <ExternalLinkIcon />
      </span>
    </a>
  );
};

export default PressCard;
