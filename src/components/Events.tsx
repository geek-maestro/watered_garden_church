// src/components/Events.jsx

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Scrollbar, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/scrollbar';
import 'swiper/css/effect-cards';

const Events = () => {
  return (
    <div className='absolute bottom-[-10%] left-1/2 transform -translate-x-1/2 w-4/5 md:w-3/4 lg:w-2/3 z-50'>
      <Swiper
        slidesPerView={2}
        spaceBetween={10}
        modules={[Scrollbar, EffectFade]}
        effect="fade"
        autoplay
        className="h-[120px] w-full"
      >
        <SwiperSlide>
          <div className="bg-gray-200 p-4 rounded-lg h-full shadow-lg self-center">Event 1</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">Event 2</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">Event 3</div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-gray-200 p-4 rounded-lg shadow-lg">Event 4</div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Events;
