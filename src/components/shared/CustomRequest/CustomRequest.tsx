import type { FC } from "react";
import "./_CustomRequest.scss";
import ButtonBase, {
  type BtnProps,
} from "@components/shared/ButtonBase/ButtonBase";
import illu_request from "@assets/banner/illu_request.webp";

interface CustomRequestProps {
  column?: boolean;
  title: string;
  description: string;
  buttons: BtnProps[];
}

const CustomRequest: FC<CustomRequestProps> = ({
  column = false,
  title,
  description,
  buttons,
}) => {
  return (
    <section className={`custom__request ${column && "column"}`}>
      <img src={illu_request} alt="" className="illu__pres" />

      <div className="custom__request__container">
        <h3 className="custom__request__title">{title}</h3>

        <p>{description}</p>
      </div>

      <div className={buttons.length <= 1 ? "btns" : "btns multi"}>
        {buttons.map((btn, i) => (
          <ButtonBase key={i} {...btn} />
        ))}
      </div>
    </section>
  );
};

export default CustomRequest;
