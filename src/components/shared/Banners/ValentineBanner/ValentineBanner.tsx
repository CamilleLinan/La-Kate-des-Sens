import type { FC } from "react";
import "./_ValentineBanner.scss";
import banner from "@assets/banner/candles1.jpg";
import Icon from "@assets/icons/lotus.svg?react";
import CustomAdBanner from "../CustomAdBanner/CustomAdBanner";

const ValentineBanner: FC = () => {
  return (
    <CustomAdBanner
      imgSrc={banner}
      imgAlt="gift-banner"
      bannerType="valentine"
      title="💜 Offre spéciale Saint-Valentin 💜"
      subtitles={[
        <div>
          <ul>
            <li>
              <Icon />
              <span>
                Le massage{" "}
                <a
                  href="/prestations#carpe-diem"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  « Le CarpeDiem »
                </a>{" "}
                est à <b>50€</b> au lieu de 70€ (1h30)
              </span>
            </li>
            <li>
              <Icon />
              <span>
                Le massage{" "}
                <a
                  href="/prestations#eveil-des-sens"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  « L'Éveil des Sens »
                </a>{" "}
                est à <b>40€</b> au lieu de 60€ (1h)
              </span>
            </li>
          </ul>
        </div>,
      ]}
    />
  );
};

export default ValentineBanner;
