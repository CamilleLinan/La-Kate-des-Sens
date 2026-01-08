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
    <section id={`${bannerType}`} className="ad-banner">
      <img
        src={imgSrcLeft}
        alt={imgAlt}
        className="ad-banner__img ad-banner__img--left"
      />
      <article className="ad-banner__content">
        <div>
          <h3 className="ad-banner__title">{title}</h3>
          {subtitles.map((subtitle, i) => (
            <p className="ad-banner_subtitle" key={i}>
              {subtitle}
            </p>
          ))}
        </div>

        <ButtonBase btnContent="Contactez-moi" link="/contact" />
      </article>

      <img
        src={imgSrcRight}
        alt="ad-banner"
        className="ad-banner__img ad-banner__img--right"
      />
    </section>
  );
};

export default CustomAdBanner;
