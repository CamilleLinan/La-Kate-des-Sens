import type { FC } from "react";
import "./_CustomRequest.scss";
import ButtonBase, {
  type BtnProps,
} from "@components/shared/ButtonBase/ButtonBase";
import illu_request from "@assets/illu_request.png";

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
    <section className={`custom-request ${column && "column"}`}>
      <img src={illu_request} alt="" className="illu-pres" />

      <div className="custom-request-container">
        <h3 className="custom-request-title">{title}</h3>

        <p>{description}</p>
      </div>

      <div className="btns">
        {buttons.map((btn, i) => (
          <ButtonBase key={i} {...btn} />
        ))}
      </div>
    </section>
  );
};

export default CustomRequest;
