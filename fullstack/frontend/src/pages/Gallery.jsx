import React from "react";
import { Helmet } from "react-helmet-async";
import "../style/gallery.scss";
import { Link } from "react-router-dom";
import "animate.css";
import { useContext } from "react";
import { mainContext } from "../Context/ContextProvider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css";
import { useEffect } from "react";
const Gallery = () => {
  const { gallerys ,ToTop} = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  return (
    <>
      <Helmet>
        <title>Gallery</title>
      </Helmet>
      <section className="gallery">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="galerry_title">
                <h2>Gallery</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery_area">
        <div className="container">
          {" "}
          <div className="row">
            {gallerys?.map((gallery) => {
              return (
                <div className="col-lg-4 col-md-6" key={gallery._id}>
                  <div className="gallery_photo">
                    <img src={gallery.image} alt="img" />
                    <div className="gallery_color"></div>
                    <button
                      type="button"
                      className="modal_button"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      data-bs-whatever="@getbootstrap"
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>

                  <div
                    className="modal fade"
                    id="exampleModal"
                    // tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="modal-dialog">
                      <div className="modal-content">
                      <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                        <div className="modal-body">
                          <Swiper
                            modules={[Navigation, Pagination, Scrollbar, A11y]}
                            spaceBetween={50}
                            slidesPerView={1}
                            navigation
                          >
                            <SwiperSlide className="modal_slide1"></SwiperSlide>
                            <SwiperSlide className="modal_slide2"></SwiperSlide>
                            <SwiperSlide className="modal_slide3"></SwiperSlide>
                            <SwiperSlide className="modal_slide4"></SwiperSlide>
                            <SwiperSlide className="modal_slide5"></SwiperSlide>
                            <SwiperSlide className="modal_slide6"></SwiperSlide>
                          </Swiper>
                        </div>
                       
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
