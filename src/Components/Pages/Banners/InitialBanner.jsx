import React, { useEffect } from 'react';
import {
  Carousel,
  CarouselItem,
  CarouselControl
} from 'reactstrap';

import Banner1 from "./assets/images/background-rampage-banner-one.jpg";
import Banner2 from "./assets/images/the-flash-tv-series-gs.jpg";
import Banner3 from "./assets/images/netflix-series-5120x2880-16538.jpg";

import "./assets/style/style.scss";

const items = [
  { src: Banner1 },
  { src: Banner2 },
  { src: Banner3 }
];

function InitialBanner() {
  const [activeIndex, setActiveIndex] = React.useState(0);
  const [animating, setAnimating] = React.useState(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next();
    }, 5000);
    return () => clearInterval(interval);
  }, [activeIndex, animating]);

  const slides = items.map((item, index) => {
    return (
      <CarouselItem
        onExiting={() => setAnimating(true)}
        onExited={() => setAnimating(false)}
        key={index}
      >
        <img src={item.src} alt={`Slide ${index + 1}`} />
      </CarouselItem>
    );
  });

  return (
    <Carousel
      activeIndex={activeIndex}
      next={next}
      previous={previous}
      className="carousel-fade"
    >
      {slides}
      <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
      <CarouselControl direction="next" directionText="Next" onClickHandler={next} />
    </Carousel>
  );
}

export default InitialBanner;
