import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/news.scss";
const News = () => {
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
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_area">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12">
              <div className="news_card">
                <span className="news_of_card ">
                  <span className="news_date card1">09 MAR,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                      A place where start new life with peace
                    </h3>
                  </Link>
                  <ul>
                    <li>MIKE HARDSON</li>
                    <li> 3 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="news_card ">
                <span className="news_of_card ">
                  <span className="news_date card2">07 MAR,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img5.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                      We can make a difference in families lives
                    </h3>
                  </Link>
                  <ul>
                    <li>JESSICA BROWN</li>
                    <li> 2 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="news_card ">
                <span className="news_of_card ">
                  <span className="news_date card3">04 MAR,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img6.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                      Build school for poor childrens
                    </h3>
                  </Link>
                  <ul>
                    <li>JOHN SMITH</li>
                    <li> 1 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="news_card ">
                <span className="news_of_card ">
                  <span className="news_date card4">29 FEB,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img7.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                    Learn how access to clean water
                    </h3>
                  </Link>
                  <ul>
                    <li>KEVIN HART</li>
                    <li> 4 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="news_card ">
                <span className="news_of_card ">
                  <span className="news_date card5">25 FEB,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img8.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                    Do something crazy to raise money
                    </h3>
                  </Link>
                  <ul>
                    <li>CHRISTINE EVE</li>
                    <li> 1 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12">
              <div className="news_card ">
                <span className="news_of_card ">
                  <span className="news_date card6">04 MAR,2019</span>
                </span>
                <img
                  src="http://layerdrops.com/oxpitan/images/blog-img9.jpg"
                  alt="img"
                />
                <div className="news_text">
                  <Link to="/newsdetail" className="news_link">
                    <h3 className="news_title1">
                    Together to help the world better
                    </h3>
                  </Link>
                  <ul>
                    <li>MIKE HARDSON</li>
                    <li> 1 COMMENTS</li>
                  </ul>
                  <p>
                    Aliq is notm hendr erit a augue insu image pellen tes que id
                    erat quis sollicitud. Lorem ipsum dolor sit amet,
                    consectetur adipiscing ullam blandit hendrerit faucibus
                    suspendisse.
                  </p>
                  <Link to="/newsdetail">
                    <button>Read More</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default News;
