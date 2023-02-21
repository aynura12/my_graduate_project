import React from "react";
import { Helmet } from "react-helmet-async";
import "../style/gallery.scss";
import { Link } from "react-router-dom";
import "animate.css";
import { useContext } from "react";
import { mainContext } from "../Context/ContextProvider";
// import axios  from "axios"
const Gallery = () => {
  const { data } = useContext(mainContext);
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
                <Link to="/home1">
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
            {data?.map((datas) => {
              return (
                <div className="col-lg-4 col-md-6" key={datas._id}>
                  <div className="gallery_photo">
                    <img src={datas.image} alt="img" />
                    <div className="gallery_color"></div>
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
