import React, { useRef, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../header/header1.scss";
import { Link } from "react-router-dom";
import donationLogo from "../../media/smalllogo.png";
const Header1 = () => {

  const [isPlaying,setIsPlaying]=useState(false)
  const videoRef=useRef(null)

  const togglePlay=()=>{
    if(isPlaying){
      videoRef.current.pause(
      );
    }
    else{
      videoRef.current.play()
    }
    setIsPlaying(!isPlaying)
  }
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
      >
        <SwiperSlide className="slider1">
          <div className="slider_left"></div>
          <div className="slider_text">
            <p>welcome to oxpitan</p>
            <h2>Lend the helping hand get involved</h2>
            <Link to="/about">
              <button>Read more</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider2">
          {" "}
          <div className="slider_left"></div>
          <div className="slider_text">
            <p>welcome to oxpitan</p>
            <h2>Lend the helping hand get involved</h2>
            <Link to="/about">
              <button>Read more</button>
            </Link>
          </div>
        </SwiperSlide>
        <SwiperSlide className="slider3">
          {" "}
          <div className="slider_left"></div>
          <div className="slider_text">
            <p>welcome to oxpitan</p>
            <h2>Lend the helping hand get involved</h2>
            <Link to="/about">
              <button>Read more</button>
            </Link>
          </div>
        </SwiperSlide>
      </Swiper>

      <div className="header_bottom_area">
        <div className="header_bottom_left">
          <div>
            <img src={donationLogo} alt="" />
          </div>
          <h4 className="header_left_title">Hunger is stalking the globe</h4>
        </div>
        <div className="header_bottom_right">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="header_bottom_video">
                  <video style={{objectFit:"cover"}} ref={videoRef} width="100%"    preload="auto">
                    <source src="https://youtu.be/-TYNA4Ztpy4" type="video/mp4"/>
                  </video>
                  <button className="header_video_button" onClick={togglePlay}> <i className="fa fa-play"></i></button>
                  {/* <Link
                    to="https://youtu.be/-TYNA4Ztpy4"
                    className="header_video_link"
                  >
                    <button >
                     
                    </button>
                  </Link> */}
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header_right_title">
                  <h4 className="right_title">
                    We are here to support you every step of the way.
                  </h4>
                  <p className="right_text">
                    Watch us how we take care of everyone
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header1;
