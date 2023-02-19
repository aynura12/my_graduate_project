import React from 'react'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../ReadAdd/readAdd.scss"
const ReadAdd = () => {
  return (
    <>  <Helmet>
    <title>ReadAdd</title>
  </Helmet>
  <section className="readAdd">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="readAdd_title">
            <h2>ReadAdd</h2>
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

export default ReadAdd