import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../header/header1.scss";
const Header1 = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide className="slider1">
          <div className="slider1_left"></div>
        </SwiperSlide>
        <SwiperSlide className="slider2">
          {" "}
          <div className="slider2_left"></div>
        </SwiperSlide>
        <SwiperSlide className="slider3">
          {" "}
          <div className="slider3_left"></div>
        </SwiperSlide>
      </Swiper>

      <div className="header_bottom_area">
        <div className="container">
         <div className="header container">w ecjkcs</div>
        </div>
      
      </div>
    </div>
  );
};

export default Header1;
