import React from "react";
import { Helmet } from "react-helmet-async";
import "../pageStyle/gallery.scss";
import { Link } from "react-router-dom";
import 'animate.css';
import { useState,useEffect ,useContext} from "react";
import {mainContext} from "../Context/ContextProvider"
import axios  from "axios"
const Gallery = () => {
 const{data,setData}=useContext(mainContext)
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
            {/* <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img4-4efd85fafb0c9e9189dc25ff06489489.jpg"
                  alt="img"
                />
                <div className="gallery_color"></div>
              </div>

            </div>
            <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img5-44dbb96797f2125ece71779b25652e24.jpg"
                  alt="img"
                />
                <div className="gallery_color"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img6-d990ddd224adf3f56450b8c7b3ad460f.jpg"
                  alt="img"
                />
                <div className="gallery_color"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img7-4d0da5a66f23a6bad2a83227bb337929.jpg"
                  alt="img"
                />
                <div className="gallery_color"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img8-1cc541d52f6072120e081f869330b7c1.jpg"
                  alt="img"
                />
                <div className="gallery_color"></div>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="gallery_photo">
                <img
                  src="https://oxpitan-gatsby.vercel.app/static/gallery-img9-ce77c47ee2e6df2a2232f737501f1658.jpg"
                  alt="img"
                />
                <div className="animate__backInLeft gallery_color"></div>
              </div>
            </div> */}
            {data?.map((datas)=>{
                return ( <div className="col-lg-4 col-md-12">
                <div className="gallery_photo">
                  <img
                    src={datas.image}
                    alt="img"
                  />
                  <div className="gallery_color"></div>
                </div>
              </div>)
              })}
           
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
