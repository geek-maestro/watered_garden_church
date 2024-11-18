import React from "react";
import MinCard from "./MinCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Scrollbar, Autoplay, EffectCards, FreeMode, Virtual } from "swiper/modules";
import "swiper/css/bundle";

const Ministries = () => {
  const ministries = [
    {
      name: "Lorem Ipsum",
      content: "",
      image: "/img.jpeg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img2.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img3.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img.jpeg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img2.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img3.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img.jpeg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img2.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img3.jpg",
    },
    {
      name: "Lorem Ipsum",
      content:
        "Nulla vitae est at diam volutpat sagittis. Donec et nulla tellus. Fusce et orci at mi placerat mattis eget ut sapien. Cras viverra lorem vel lacus luctus pellentesque malesuada eu urna. Nam euismod ante libero, ac pulvinar eros sodales sed",
      image: "/img4.webp",
    },
  ];

  return (
    <div>
      <h2>Ministries</h2>
      <Swiper
        slidesPerView={4} // Change to 1 if you want to use EffectFade
        spaceBetween={20}
        modules={[Scrollbar, Autoplay, FreeMode]}
        autoplay={{ delay: 3000, disableOnInteraction: false, pauseOnMouseEnter : true }}
        loop = {true}
        className="flex w-full"
      >
        {ministries.map((min, index) => (
          <SwiperSlide key={index}>
            <MinCard item={min} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Ministries;
