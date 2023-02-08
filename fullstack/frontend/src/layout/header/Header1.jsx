import React from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "../header/header1.scss";
import { Link } from "react-router-dom";
const Header1 = () => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
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
        <div className="header_bottom_left">
          <div>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAOCAYAAAAmL5yKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpEQ0YzMTY1MzhBOTIxMUU5ODhGREFCQjdBNTY4OUY4RiIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpEQ0YzMTY1MjhBOTIxMUU5ODhGREFCQjdBNTY4OUY4RiIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTM2Nzg3NDZCNDdFOTExOTk2MUUwRkUxREZBMkNFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pqiw3PoAAADaSURBVHjaYvy4zoUBCGSBuB2IQRxmID7KzPu39ttFnsvfLnBrAtktQDE7IP4HxPuAuAqI78tMW8XAAmRIA/FlIOZnQAB/IPYA4jIgBmnmRZKLAGJfINYB4gdMQGIymmYYYAfiiWiaYYAbiKeCGCADvBjIAy4wA1jINIAZZsARMg04BTMgm0wDsmEGXAViJxI1ewLxeZgBILCfBENA0bsDxmFCkiDGEHcg3okswISmAGSIIx6bd6ELMmFReACLIR7oNuMzAGYISNNNIA7ApRkEGP///89ACQAIMAAz8CliAImDJQAAAABJRU5ErkJggg=="
              alt=""
            />
          </div>
          <h4 class="header_left_title">Hunger is stalking the globe</h4>
        </div>
        <div className="header_bottom_right">
          <div className="container">
            <div className="row">
              <div className="col-lg-4">
                <div className="header_bottom_video">
                  <Link to="https://youtu.be/-TYNA4Ztpy4" className="header_video_link">
                    <button className="header_video_button">
                      <i class="fa fa-play"></i>
                    </button>
                  </Link>
                </div>
              </div>
              <div className="col-lg-8">
                <div className="header_right_title">
                  <h4 class="right_title">
                    We are here to support you every step of the way.
                  </h4>
                  <p class="right_text">
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
