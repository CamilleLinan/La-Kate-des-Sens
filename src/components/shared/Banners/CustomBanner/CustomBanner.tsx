import type { FC, ReactNode } from "react";
import "./_CustomBanner.scss";

interface CustomBannerProps {
  bannerContent: ReactNode;
}

const CustomBanner: FC<CustomBannerProps> = ({ bannerContent }) => {
  return <section className="banner">{bannerContent}</section>;
};

export default CustomBanner;
