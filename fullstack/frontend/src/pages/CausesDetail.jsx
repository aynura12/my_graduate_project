import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/causesdetail.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { format } from "date-fns";
const CausesDetail = () => {
  const [state, setState] = useState({
    fullName: "",
    email: "",
    comment: "",
  });
  const handleChange = async (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (!state.fullName || !state.email || !state.comment) return;
    await axios.post("http://localhost:8080/causeComment", state);
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

  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/causeComment");
    setData(res.data);
  };
  useEffect(() => {
    getData();
    getRecent();
    getCause()
  }, []);

  const [recent, setRecent] = useState([]);
  const getRecent = async () => {
    const res = await axios.get("http://localhost:8080/causeRecent");
    setRecent(res.data);
  };
  const {id}=useParams()
  const [cause, setCause] = useState([]);
  const getCause = async () => {
    const res = await axios.get(`http://localhost:8080/cause/`+id);
    setCause(res.data);
  };
  return (
    <>
      <Helmet>
        <title>Causes Detail</title>
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
                  src={cause.image}
                  alt="img"
                />
                <div className="card_bottom">
                  <div>
                    <h2>{cause.title}</h2>
                    <ul>
                      <li>
                        <i className="fa-solid fa-bullseye"></i>
                        Goal: <span>${cause.goal}</span>
                      </li>
                      <li className="causes_list">
                        <i className="fa-solid fa-chart-line"></i>Raised:
                        <span>{cause.raised}0</span>
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
              </div>
              <div className="causes_detail_comment ">
                <h2>Comments</h2>
                {data?.map((datas) => {
                  return (
                    <div className="detail_comment_bottom">
                      <img src={datas.image} alt="img" />
                      <div className="bottom_title">
                        <div className="title_left">
                          <div className="left">
                            <h4>{datas.fullName}</h4>
                            {/* <span >{format(datas.createdAt, 'dd/mm/yyyy')}</span> */}
                            <span>{datas.createdAt}</span>
                          </div>
                          <Link to="/">
                            <button>reply</button>
                          </Link>
                        </div>
                        <p>{datas.comment}</p>
                      </div>
                    </div>
                  );
                })}

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
                      <i className="fa fa-tag"></i> Education
                    </li>
                    <li>
                      <i className="fa fa-map-marker"></i>Wrightwood, Canada
                    </li>
                  </ul>
                </div>
              </div>

              <div className="recent_donations">
                <h2>Recent Donations</h2>
                {recent?.map((recents) => {
                  return (
                    <div className="recent_donations_title">
                      <img src={recents.image} alt="img" />
                      <div className="recent_donations_text">
                        <span className="span">${recents.payment}</span>
                        <h4>
                          {recents.fullName}
                          <span>{recents.createdAt}</span>
                        </h4>
                        <ul>
                          <li>{recents.text}</li>
                        </ul>
                      </div>
                    </div>
                  )
                })}
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
