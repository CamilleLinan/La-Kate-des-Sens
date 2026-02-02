import type { FC, ReactNode } from "react";
import "./_CustomAdBanner.scss";
import ButtonBase from "../../ButtonBase/ButtonBase";

interface CustomAdBannerProps {
  imgSrc?: string;
  imgSrcLeft?: string;
  imgSrcRight?: string;
  imgAlt: string;
  bannerType?: string;
  title: string;
  subtitles: ReactNode[];
}

const CustomAdBanner: FC<CustomAdBannerProps> = ({
  imgSrc,
  imgSrcLeft,
  imgSrcRight,
  imgAlt,
  bannerType,
  title,
  subtitles,
}) => {
  return (
    <section id={`${bannerType}`} className="ad-banner">
      {imgSrcLeft ? (
        <img
          src={imgSrcLeft}
          alt={imgAlt}
          className="ad-banner__img ad-banner__img--left"
        />
      ) : (
        <img
          src={imgSrc}
          alt={imgAlt}
          className="ad-banner__img ad-banner__img--alone"
        />
      )}
      <article className="ad-banner__content">
        <div>
          <h3 className="ad-banner__title">{title}</h3>
          {subtitles.map((subtitle, i) => (
            <p className="ad-banner__subtitle" key={i}>
              {subtitle}
            </p>
          ))}
        </div>

        <ButtonBase btnContent="Contactez-moi" link="/contact" />
      </article>

      {imgSrcRight && (
        <img
          src={imgSrcRight}
          alt="ad-banner"
          className="ad-banner__img ad-banner__img--right"
        />
      )}
    </section>
  );
};

export default CustomAdBanner;
