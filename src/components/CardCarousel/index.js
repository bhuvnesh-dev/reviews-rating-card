import React, { useState } from "react";
// import dynamic from "next/dynamic";
import { DivCardCarouselContainer } from "./styles";
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

// const AliceCarousel = dynamic(() => import("react-alice-carousel"), {
//     ssr: false,
//   });

const responsive = {
  0: { items: 1 },
  768: { items: 2 },
  980: { items: 3, itemsFit: "contain" },
};

function CardCarousel(props) {
    const {items} = props;
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleSlideChanged = (event) => {
    const { item } = event;
    setCurrentIndex(item);
  };
  return (
    <DivCardCarouselContainer>
      {items?.length ? (
        <AliceCarousel
          mouseTracking
          autoPlay
          autoPlayInterval={2000}
          autoPlayDirection='rtl'
          items={items}
          responsive={responsive}
          controlsStrategy="alternate"
          activeIndex={currentIndex}
          onSlideChanged={handleSlideChanged}
        />
      ) : null}
    </DivCardCarouselContainer>
  );
}

export default CardCarousel;
