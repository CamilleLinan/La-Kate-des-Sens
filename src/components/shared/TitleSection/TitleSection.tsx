import type { FC } from "react";
import "./_TitleSection.scss";
import lotusIcon from "@assets/lotus_title.png";

interface TitleSectionProps {
  titleText: string;
}

const TitleSection: FC<TitleSectionProps> = ({ titleText }) => {
  return (
    <h2 className="title">
      <img src={lotusIcon} alt="" className="deco-icon" />
      {titleText}
      <img src={lotusIcon} alt="" className="deco-icon" />
    </h2>
  );
};

export default TitleSection;
