import type { FC, ReactNode } from "react";
import "./_CustomBanner.scss";

interface CustomBannerProps {
  children: ReactNode;
}

const CustomBanner: FC<CustomBannerProps> = ({ children }) => {
  return <section className="banner">{children}</section>;
};

export default CustomBanner;
