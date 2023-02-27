import React, { useEffect, useState } from "react";
import "../Home/charity.scss";
import axios from "axios";
// import $ from "jquery";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const Charity = () => {
  const [data, setData] = useState([]);
  const [states, setStates] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/counter");
    setData(res.data);
  };
  useEffect(() => {
    getData();
    getState();
  }, []);

  const getState = async () => {
    const res = await axios.get("http://localhost:8080/charity");
    setStates(res.data);
  };
  // var a = 0;
  // $(window).scroll(function () {
  //     var oTop = $("#counter-box").offset().top - window.innerHeight;
  //     if (a == 0 && $(window).scrollTop() > oTop) {
  //         $(".counter").each(function () {
  //             var $this = $(this),
  //                 countTo = $this.attr("data-number");
  //             $({
  //                 countNum: $this.text()
  //             }).animate(
  //                 {
                 
  //                     countNum: countTo
  //                 },
  
  //                 {
  //                     duration: 2000,
  //                     easing: "swing",
  //                     step: function () {
  //                         // $this.text(Math.ceil(this.countNum));  
  //                         $this.text(
  //                             Math.ceil(this.countNum).toLocaleString("en")
  //                         );
  //                     },
  //                     complete: function () {
  //                         $this.text(
  //                             Math.ceil(this.countNum).toLocaleString("en")
  //                         );
  //                         // alert('finished');
  //                     }
  //                 }
  //             );
  //         });
  //         a = 1;
  //     }
  // });
  
  return (
    <div className="charity">
      <div className="container">
        <div className="row g-0 align-items-center justify-content-center">
          <div className="charity_left_area col-lg-6 col-md-12">
            {data.map((datas) => {
              return (
                <div className="charity_left align-items-center" key={datas._id}>
                  <div className="charity_left_icon">
                    <i className ="fa-solid fa-hands-holding-circle"></i>
                  </div>
                  <div className="ps-3" id="counter-box">
                    <h3>
                      <span className="counter" data-number={datas.count}></span>
                    </h3>
                    <p>{datas.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="col-lg-6 col-md-12">
            <Swiper className="text_slide py-2"
              modules={[Navigation, Pagination, Scrollbar, A11y]}
              spaceBetween={50}
              slidesPerView={1}
              navigation
            >
              {states?.map((state) => {
                return(<SwiperSlide
                  key={state._id}
                  className="charity_right"
                  style={{ backgroundColor: state.color }}
                >
                  <i className="fa-solid fa-quote-left"></i>
                  <h3>{state.title}</h3>
                  <p className="charity_right_text">{state.text}</p>
                </SwiperSlide>)
              })}
            </Swiper>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
