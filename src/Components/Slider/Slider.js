import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import photo1 from "../../img/food1.jpg"
import photo2 from "../../img/food2.jpg"
import photo3 from "../../img/food3.jpg"
// Import Swiper styles
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';

import './Slider.scss';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default function App() {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide><img  src={photo1} alt="Food 1" /></SwiperSlide>
        <SwiperSlide><img  src={photo2} alt="Food 2" /></SwiperSlide>
        <SwiperSlide><img  src={photo3} alt="Food 3" /></SwiperSlide>
      </Swiper>
    </>
  );
}
