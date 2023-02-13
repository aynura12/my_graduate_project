import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/newsDetail.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios";
const NewsDetail = () => {
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
                <span>26 FEB,2019</span>
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
                      <Link to="/" className="left_link">
                        Charity
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="left_link">
                        POOR
                      </Link>
                    </li>
                    <li>
                      <Link to="/" className="left_link">
                        Love
                      </Link>
                    </li>
                  </ul>
                </div>
                <div className="tags_right">
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
              <div className="detail_comment_top">
                <img
                  src="http://layerdrops.com/oxpitan/images/post-box-img.jpg"
                  alt="img"
                />
                <div>
                  <h2>Kevin Martin</h2>
                  <p>
                    Cursus massa at urnaaculis estie. Sed aliquamellus vitae
                    ultrs condmentum lightly believable. If you are going to use
                    a of you need to be sure there isn't anything embarrassing.
                  </p>
                </div>
              </div>
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
                    going to return the favour my being there for you every step
                    along this journey. Stay strong
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
                    <span style={{ color: "red" }}>{errors.email.message}</span>
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
                  <span style={{ color: "red" }}>{errors.comment.message}</span>
                ) : (
                  <></>
                )}
                <button onClick={handleSubmit(onSubmit)}>submit now</button>
              </form>
            </div>

            <div className="news_right col-lg-4 col-md-12">
              <input type="text" placeholder="Search" />
              <div className="recent_posts">
                <h3> Recent Posts</h3>

                <div className="post">
                  <img
                    src="http://layerdrops.com/oxpitan/images/author-avatar5.jpg"
                    alt="img"
                  />
                  <div>
                    {" "}
                    <h4>Learn how access to clean</h4>
                    <h4>Water</h4>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="http://layerdrops.com/oxpitan/images/author-avatar6.jpg"
                    alt="img"
                  />
                  <div>
                    {" "}
                    <h4>Build school for poor</h4>
                    <h4>Childrens</h4>
                  </div>
                </div>
                <div className="post">
                  <img
                    src="http://layerdrops.com/oxpitan/images/author-avatar7.jpg"
                    alt="img"
                  />
                  <div>
                    {" "}
                    <h4>Together to help the world</h4>
                    <h4>Better</h4>
                  </div>
                </div>
              </div>
              <div className="categories">
                <h3>Categories</h3>
                <ul>
                  <li>
                    <a href="/">Charity</a>
                  </li>
                  <li>
                    <a href="/">Fundrising</a>
                  </li>
                  <li>
                    <a href="/">Donations</a>
                  </li>
                  <li>
                    <a href="/">Save Lifes</a>
                  </li>
                  <li>
                    <a href="/">Health</a>
                  </li>
                  <li>
                    <a href="/">Education</a>
                  </li>
                  <li>
                    <a href="/">Food</a>
                  </li>
                  <li>
                    <a href="/">Water</a>
                  </li>
                </ul>
              </div>
              <div className="popular_tags">
                <div>
                  <Link to="/" className="popular_link">
                    <button> Charity</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> poor </button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> love</button>
                  </Link>
                </div>
                <div>
                  <Link to="/" className="popular_link">
                    <button> donations</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button> health</button>
                  </Link>
                  <Link to="/" className="popular_link">
                    <button>save</button>
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

export default NewsDetail;
