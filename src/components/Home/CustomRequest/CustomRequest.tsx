import type { FC } from "react";
import "./_CustomRequest.scss";
import ButtonBase from "@components/shared/ButtonBase/ButtonBase";
import illu_request from "@assets/illu_request.png";

const CustomRequest: FC = () => {
  return (
    <section className="custom-request">
      <img src={illu_request} alt="" className="illu-pres" />
      <div className="custom-request-container">
        <h3 className="custom-request-title">
          Vous avez une demande particulière ?
        </h3>
        <p>
          Chaque personne est unique, et chaque massage peut être adapté à vos
          besoins. Pour un soin entièrement personnalisé, contactez-moi et
          créons ensemble votre moment bien-être.
        </p>
      </div>
      <ButtonBase children="Demander un devis" />
    </section>
  );
};

export default CustomRequest;
