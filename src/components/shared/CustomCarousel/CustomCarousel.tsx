import { useEffect, useState, type FC, type ReactNode } from "react";
import "./_CustomCarousel.scss";
import { Carousel } from "antd";

interface CustomCarouselProps {
  carouselContent: ReactNode;
}

const CustomCarousel: FC<CustomCarouselProps> = ({ carouselContent }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 680) setSlidesToShow(1);
      else if (window.innerWidth < 1125) setSlidesToShow(2);
      else setSlidesToShow(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Carousel
      arrows
      draggable={true}
      dots={true}
      infinite={true}
      slidesPerRow={slidesToShow}
    >
      {carouselContent}
    </Carousel>
  );
};

export default CustomCarousel;
