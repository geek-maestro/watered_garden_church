// src/components/Hero.jsx

import React from "react";
import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectFade,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import Events from "./Events";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Hero = () => {
  return (
    <div className="relative h-[87vh] flex items-center justify-center">
      <Swiper
        slidesPerView={1}
        pagination={{ clickable: true }}
        navigation
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay]}
        effect="fade"
        className="h-full w-full"
        autoplay ={{delay: 3000, disableOnInteraction: false}}
        loop={true}
      >
        <SwiperSlide>
          <img
            src="/img.jpeg"
            alt="Slide 1"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img2.jpg"
            alt="Slide 2"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img3.jpg"
            alt="Slide 3"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            src="/img4.webp"
            alt="Slide 4"
            className="object-cover w-full h-full"
          />
        </SwiperSlide>
      </Swiper>

      {/* Events Swiper Overlay */}
      <Events />
    </div>
  );
};

export default Hero;
