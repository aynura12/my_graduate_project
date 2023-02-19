import React from 'react'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
const CommentAdd = () => {
  return (
    <>  <Helmet>
    <title>Gallery</title>
  </Helmet>
  <section className="gallery">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="galerry_title">
            <h2>Gallery</h2>
            <Link  to="/admin">
              <button>Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default CommentAdd