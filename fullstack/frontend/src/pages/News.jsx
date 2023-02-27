import React from "react";
import { useContext } from "react";
import { mainContext } from "../Context/ContextProvider";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/news.scss";
import { useEffect } from "react";
const News = () => {
  const { news ,ToTop} = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  return (
    <>
      <Helmet>
        <title>News</title>
      </Helmet>
      <section className="new">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news_title">
                <h2>News</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_area">
        <div className="container">
          <div className="row">
            {news?.map((n) => {
              return (
                <div className="col-lg-6 col-md-12" key={n._id}>
                  <div className="news_card">
                    <span className="news_of_card ">
                      <span
                        className="news_date card1"
                        style={{ backgroundColor: n.color }}
                      >
                        {n.date}
                      </span>
                    </span>
                    <img src={n.image} alt="img" />
                    <div className="news_text">
                      <Link to={`${n._id}`} className="news_link">
                        <h3 className="news_title1">{n.title}</h3>
                      </Link>
                      <p>{n.text}</p>
                      <Link to={`${n._id}`}>
                        <button>Read More</button>
                      </Link>
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

export default News;
