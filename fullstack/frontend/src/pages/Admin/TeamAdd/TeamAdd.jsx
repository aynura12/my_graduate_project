import React from 'react'
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../TeamAdd/teamAdd.scss"
const TeamAdd = () => {
  return (
    <>  <Helmet>
    <title>TeamAdd</title>
  </Helmet>
  <section className="teamAdd">
    <div className="container">
      <div className="row">
        <div className="col-lg-12">
          <div className="teamAdd_title">
            <h2>TeamAdd</h2>
            <Link to="/home1">
              <button>Back Home</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  </section></>
  )
}

export default TeamAdd