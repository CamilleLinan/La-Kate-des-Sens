import type { FC, ReactNode } from "react";
import "./_CustomAdBanner.scss";
import ButtonBase from "../../ButtonBase/ButtonBase";

interface CustomAdBannerProps {
  imgSrcLeft: string;
  imgSrcRight: string;
  imgAlt: string;
  bannerType?: string;
  title: string;
  subtitles: ReactNode[];
}

const CustomAdBanner: FC<CustomAdBannerProps> = ({
  imgSrcLeft,
  imgSrcRight,
  imgAlt,
  bannerType,
  title,
  subtitles,
}) => {
  return (
    <section className={`gift-banner ${bannerType}`}>
      <img
        src={imgSrcLeft}
        alt={imgAlt}
        className={`gift-banner__img left ${bannerType}`}
      />
      <article className={`gift-banner__content ${bannerType}`}>
        <div>
          <h3 className="gift-banner__title">{title}</h3>
          {subtitles.map((subtitle, i) => (
            <p className="gift-banner_subtitle" key={i}>
              {" "}
              {subtitle}{" "}
            </p>
          ))}
        </div>

        <ButtonBase btnContent="Contactez-moi" link="/contact" />
      </article>

      <img
        src={imgSrcRight}
        alt="gift-banner"
        className={`gift-banner__img right ${bannerType}`}
      />
    </section>
  );
};

export default CustomAdBanner;
