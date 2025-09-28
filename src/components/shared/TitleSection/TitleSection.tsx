import type { FC } from "react";
import "./_TitleSection.scss";
import Icon from "@assets/deco_lotus.svg?react";

interface TitleSectionProps {
  titleText: string;
}

const TitleSection: FC<TitleSectionProps> = ({ titleText }) => {
  return (
    <h2 className="title">
      <Icon className="deco-icon" />
      {titleText}
      <Icon className="deco-icon" />
    </h2>
  );
};

export default TitleSection;
