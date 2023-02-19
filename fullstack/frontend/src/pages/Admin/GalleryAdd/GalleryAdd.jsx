import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../GalleryAdd/galleryAdd.scss";
const GalleryAdd = () => {
  return (
    <>
      {" "}
      <Helmet>
        <title>GalleryAdd</title>
      </Helmet>
      <section className="galleryAdd">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="galleryAdd_title">
                <h2>GalleryAdd</h2>
                <Link to="/admin">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GalleryAdd;
