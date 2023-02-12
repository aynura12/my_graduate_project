import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/newsDetail.scss";
const NewsDetail = () => {
  return (
    <>
      <Helmet>
        <title>News Detail</title>
      </Helmet>
      <section className="news_detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="news_detail_title">
                <h2>News Detail</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="news_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="detail_card_image">
                  <span >26 FEB,2019</span>
                <img
                  src="http://layerdrops.com/oxpitan/images/img20.jpg"
                  alt="img"
                />
              </div>
              <div className="detail_card_title">
                <h2>Do something crazy to raise money</h2>
                <ul>
                  <li>CHRISTINE EVE</li>
                  <li>2 COMMENTS</li>
                </ul>
                <p>
                  Aliq is notm hendr erit a augue insu image pellen tes que id
                  erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                  adipiscing ullam blandit hendrerit faucibus suspendisse. There
                  are many variations of passages of Lorem Ipsum available, but
                  the majority have suffered alteration in some form, by
                  injected humour, or randomised words which don't look even
                  slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.{" "}
                </p>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. It has survived not only five centuries, but
                  also the leap into electronic typesetting, remaining
                  essentially unchanged. It was popularised in the 1960s with
                  the release of Letraset sheets containing Lorem Ipsum
                  passages, and more recently with desktop publishing software
                  like Aldus PageMaker including versions of Lorem Ipsum ley of
                  type and scrambled it to make a type specimen book.
                </p>
              </div>
              <div className="detail_tags">
                <div className="tags_left">
                  <span>Tags</span>
                  <ul>
                    <li>
                      <Link to="/" className="left_link">Charity</Link>
                    </li>
                    <li>
                      <Link to="/" className="left_link">POOR</Link>
                    </li>
                    <li>
                      <Link to="/" className="left_link">Love</Link>
                    </li>
                  </ul>
                </div>
                <div className="tags_right">
                <ul>
                  <li >
                    <a href="/">
                      <div>
                        <i className="icon1 fa-brands fa-twitter"></i>
                      </div>
                    </a>
                  </li>
                  <li >
                    <a href="/">
                      <div>
                        <i className="icon2 fa-brands fa-facebook-f"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div>
                        <i className="icon3 fa-brands fa-pinterest"></i>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/">
                      <div>
                        <i className="icon4 fa-brands fa-instagram"></i>
                      </div>
                    </a>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsDetail;
