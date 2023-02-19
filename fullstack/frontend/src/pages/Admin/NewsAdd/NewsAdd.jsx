import React from 'react'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../NewsAdd/newsAdd.scss"
const NewsAdd = () => {
  return (
    <>  <Helmet>
    <title> NewsAdd </title>
  </Helmet>
  <section className="newsAdd">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="newsAdd_title">
            <h2> NewsAdd </h2>
            <Link to="/admin">
              <button>Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default NewsAdd