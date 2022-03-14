import React from "react";
/* import { Consumer } from "../../../context"; */
import "../../../css/hnc_gallery.scss";
/* import { useRef, useState } from "react"; */
import { Swiper, SwiperSlide } from "swiper/react";
/* import "swiper/swiper.scss"; */
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/lazy";
/* import "swiper/css/pagination"; */
import HnC1 from "../../../Assets/Images/HnC/HnC1.webp";
import HnC2 from "../../../Assets/Images/HnC/HnC2.webp";
import HnC3 from "../../../Assets/Images/HnC/HnC3.webp";
import HnC4 from "../../../Assets/Images/HnC/HnC4.webp";
import HnC5 from "../../../Assets/Images/HnC/HnC5.webp";
import HnC6 from "../../../Assets/Images/HnC/HnC6.webp";

import SwiperCore, { Autoplay, EffectCoverflow, Lazy } from "swiper";

SwiperCore.use([Autoplay, EffectCoverflow, Lazy]);

const Hnc_gallery = () => {
  return (
    <div className="container-fluid my-5" id="hnc_Gallery">
      <div className="row mx-lg-5 align-items-center">
        <h1 className="text-center center-square mb-5">Gallery</h1>
        <div className="col-lg-12 col-md-12 col-sm-12" id="mask">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              pauseOnMouseEnter: true,
              disableOnInteraction: false,
            }}
            slidesPerView={"auto"}
            coverflowEffect={{
              rotate: 50,
              stretch: 10,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            loop={true}
            /* pagination={{ dynamicBullets: true, type: "bullets" }} */
            loopedSlides={5}
            /* modules={Lazy} */
            lazy={true}
            className="mySwiper my-5"
          >
            <SwiperSlide>
              <img src={HnC1} alt="HnC 2019" className="swiper-lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img
                src={HnC6}
                alt="HnC 2019"
                className="swiper-lazy"
                style={{ objectFit: "cover", height: "350px" }}
              />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC3} alt="HnC 2019" className="swiper-lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC4} alt="HnC 2019" className="swiper-lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC5} alt="HnC 2019" className="swiper-lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
            </SwiperSlide>
            <SwiperSlide>
              <img src={HnC2} alt="HnC 2019" className="swiper-lazy" />
              <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
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
