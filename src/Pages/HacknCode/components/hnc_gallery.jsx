import React from "react";
/* import { Consumer } from "../../../context"; */
import "../../../css/hnc_gallery.scss";
/* import { useRef, useState } from "react"; */
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";
import "swiper/swiper.scss";
/* import "swiper/css/effect-coverflow";
import "swiper/css/pagination"; */
import HnC1 from "../../../Assets/Images/HnC/HnC1.JPG";
import HnC2 from "../../../Assets/Images/HnC/HnC2.JPG";
import HnC3 from "../../../Assets/Images/HnC/HnC3.JPG";
import HnC4 from "../../../Assets/Images/HnC/HnC4.JPG";
import HnC5 from "../../../Assets/Images/HnC/HnC5.JPG";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";

SwiperCore.use([EffectCoverflow, Pagination]);
const Hnc_gallery = () => {
  /*   return (
    <Consumer>
      {(value) => {
        const { hnc_images } = value; */
  return (
    <div className="container-fluid my-5" id="hnc_Gallery">
      <div className="row mx-lg-5 align-items-center">
        <h1 className="text-center center-square mb-5">Gallery</h1>
        <div className="col-lg-12 col-md-12 col-sm-12" id="mask">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            centeredSlides={true}
            loop={true}
            autoplay={true}
            pagination={true}
            loopedSlides={5}
            className="mySwiper my-5"
          >
            <SwiperSlide>
              <img src={HnC1} alt="HnC 2019" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC2} alt="HnC 2019" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC3} alt="HnC 2019" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC4} alt="HnC 2019" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC5} alt="HnC 2019" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </div>
  );
  /*       }}
    </Consumer>
  ); */
};

export default Hnc_gallery;
