"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function PeekCarousel() {
  return (
    <Swiper
      modules={[Autoplay]}
      slidesPerView={1.3}
      centeredSlides
      spaceBetween={115}
      loop
      autoplay={{ delay: 2_500 }}
      className="relative"
    >
      {[
        "slider1.jpg",
        "slider2.jpg",
        "slider3.jpg",
        "slider4.jpg",
        "slider2.jpg",
        "slider3.jpg",
        "slider4.jpg",
      ].map((file, i) => (
        <SwiperSlide
          key={i}
          className={`
            overflow-hidden rounded-lg transition-all duration-300
            [&.swiper-slide-active]:max-w-6xl   /* centre slide = text width */
            [&.swiper-slide-active]:mx-auto
          `}
        >
          <img
            src={`/images/slider/${file}`}
            alt={`Slide ${i + 1}`}
            className="w-full h-[400px] md:h-[500px] object-cover"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
