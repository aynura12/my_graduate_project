import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/causesdetail.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios";
const CausesDetail = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    comment: "",
  });
  const handleChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async (id) => {
    if (!state.fullName || !state.email || !state.comment) return;
    await axios.post("", state);
    setState({
      fullName: "",
      email: "",
      comment: "",
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    addData();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <>
      <Helmet>
        <title>Couses Detail</title>
      </Helmet>
      <section className="causes_detail">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causes_detail_title">
                <h2>Causes Detail</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="causes_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 col-md-12">
              <div className="causes_detail_card">
                <img
                  src="https://layerdrops.com/oxpitan/images/img12.jpg"
                  alt="img"
                />
                <div className="card_bottom">
                  <div>
                    <h2>Save Poor Childrens</h2>
                    <ul>
                      <li>
                        <i class="fa-solid fa-bullseye"></i>
                        Goal: <span>$30,000</span>
                      </li>
                      <li class="causes_list">
                        <i class="fa-solid fa-chart-line"></i>Raised:
                        <span>25,270</span>
                      </li>
                    </ul>
                  </div>
                  <Link to="/donatenow">
                    <button>Donate now</button>
                  </Link>
                </div>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
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
                  like.
                </p>
              </div>
              <div className="area_image row">
                {" "}
                <div className="col-lg-6 col-md-12">
                  <img
                    src="https://layerdrops.com/oxpitan/images/img13.jpg"
                    alt=""
                  />
                </div>
                <div className="col-lg-6 col-md-12">
                  <img
                    src="https://layerdrops.com/oxpitan/images/img14.jpg"
                    alt="img"
                  />
                </div>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book
                </p>
              </div>
              <div className="causes_detail_comment ">
                <h2>Comments</h2>
                <div className="detail_comment_bottom">
                  <img
                    src="http://layerdrops.com/oxpitan/images/comment-avatar.jpg"
                    alt="img"
                  />
                  <div className="bottom_title">
                    <div className="title_left">
                      <div className="left">
                        <h4>David Marks </h4>
                        <span>4 hours ago</span>
                      </div>
                      <Link to="/">
                        <button>reply</button>
                      </Link>
                    </div>
                    <p>
                      Sending love. My nephews Nick and Anthony Salaber are your
                      teammates, so I know the caliber person you are. Our whole
                      family is sending our best to you and your family.
                    </p>
                  </div>
                </div>
                <div className="detail_comment_bottom">
                  <img
                    src="http://layerdrops.com/oxpitan/images/comment-avatar2.jpg"
                    alt="img"
                  />
                  <div className="bottom_title">
                    <div className="title_left">
                      <div className="left">
                        <h4>Christine Eve</h4>
                        <span>3 hours ago</span>
                      </div>
                      <Link to="/">
                        <button>reply</button>
                      </Link>
                    </div>
                    <p>
                      You're a champ. Your in my thoughts and prayers every day.
                      You're the best teammate a bloke could ask for and we're
                      going to return the favour my being there for you every
                      step along this journey. Stay strong
                    </p>
                  </div>
                </div>
                <form className="form">
                  <h3>Leave a Comment</h3>
                  <div className="form_top">
                    <input
                      type="text"
                      {...register("fullName")}
                      onChange={handleChange}
                      value={state.fullName}
                      name="fullName"
                      placeholder="Full Name..."
                    />
                    {errors.fullName ? (
                      <span style={{ color: "red" }}>
                        {errors.fullName.message}
                      </span>
                    ) : (
                      <></>
                    )}
                    <input
                      type="email"
                      {...register("email")}
                      onChange={handleChange}
                      value={state.email}
                      name="email"
                      placeholder="E-mail..."
                    />
                    {errors.email ? (
                      <span style={{ color: "red" }}>
                        {errors.email.message}
                      </span>
                    ) : (
                      <></>
                    )}
                  </div>

                  <textarea
                    type="text"
                    {...register("comment")}
                    onChange={handleChange}
                    value={state.comment}
                    name="comment"
                    placeholder="Leavee a Comment..."
                  />
                  {errors.comment ? (
                    <span style={{ color: "red" }}>
                      {errors.comment.message}
                    </span>
                  ) : (
                    <></>
                  )}
                  <button onClick={handleSubmit(onSubmit)}>submit now</button>
                </form>
              </div>
            </div>
            <div className="col-lg-4 col-md-12">
              <div className="organizer">
                <img
                  src="https://layerdrops.com/oxpitan/images/author-avatar.jpg"
                  alt="img"
                />
                <div className="organizer_title">
                  <span>CREATED APRIL 11, 2018</span>
                  <h4>
                    Organizer: <a href="/"> Jessica Smith</a>
                  </h4>
                  <ul>
                    <li>
                      <i class="fa fa-tag"></i> Education
                    </li>
                    <li>
                      <i class="fa fa-map-marker"></i>Wrightwood, Canada
                    </li>
                  </ul>
                </div>
              </div>

              <div className="recent_donations">
                <h2>Recent Donations</h2>
                <div className="recent_donations_title">
                  <img
                    src="https://layerdrops.com/oxpitan/images/author-avatar2.jpg"
                    alt="img"
                  />
                  <div className="recent_donations_text">
                    <span className="span">$20</span>
                    <h4>
                      David Marks <span>3 HOURS AGO</span>
                    </h4>
                    <ul>
                      <li>God bless you dear</li>
                    </ul>
                  </div>
                </div>
                <div className="recent_donations_title">
                  <img
                    src="https://layerdrops.com/oxpitan/images/author-avatar3.jpg"
                    alt="img"
                  />
                  <div className="recent_donations_text">
                    <span className="span">$35</span>
                    <h4>
                    Jean Jerome <span>10 HOURS AGO </span>
                    </h4>
                    <ul>
                      <li>My prayers are with you</li>
                    </ul>
                  </div>
                </div>
                <div className="recent_donations_title">
                  <img
                    src="https://layerdrops.com/oxpitan/images/author-avatar4.jpg"
                    alt="img"
                  />
                  <div className="recent_donations_text">
                    <span className="span">$160</span>
                    <h4>
                    Kistin Eve<span> 1 DAY AGO</span>
                    </h4>
                    <ul>
                      <li>Wishing you blessings</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="recent_donations_connect">
                <h2>Share Cause</h2>
                  <ul>
                    <li>
                      <a href="/">
                        <div>
                          <i className="icon1 fa-brands fa-twitter"></i>
                        </div>
                      </a>
                    </li>
                    <li>
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
      </section>
    </>
  );
};

export default CausesDetail;
