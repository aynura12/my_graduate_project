import React from "react";
import { Helmet } from "react-helmet-async";
import donationLogo from "../media/smalllogo.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../schema/formSchema";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../pageStyle/contact.scss";
const Contact = () => {
  const [state, setstate] = useState({
    fullName: "",
    email: "",
    number: "",
    message: "",
  });
  const handleChange = async (e) => {
    setstate({ ...state, [e.target.name]: e.target.value });
  };

  const addData = async (id) => {
    if (!state.fullName || !state.email || !state.number || !state.message)
      return;
    await axios.post("", state);
    setstate({
      fullName: "",
      email: "",
      number: "",
      message: "",
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
        <title>Contact</title>
      </Helmet>
      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="contact_title">
                <h2>Contact</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_area">
        <div className="container">
          <div className="row">
            <div className="contact_left col-lg-6 col-md-12">
              <img src={donationLogo} alt="ilogo" />
              <h2>Get in Touch With Us</h2>
              <h6>WRITE A MESSAGE</h6>
              <p>
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis sollicitud. Lorem ipsum is simply free text dolor sit
                amet, consectetur adipiscing ullam blandit hendrerit faucibus
                suspendisse.
              </p>
              <ul>
                <li className="list1 list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </a>
                </li>
                <li className="list2 list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </li>
                <li className="list3 list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-pinterest"></i>
                    </div>
                  </a>
                </li>
                <li className="list4 list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 col-md-12">
              <form className="form">
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

                <input
                  type="number"
                  {...register("number")}
                  onChange={handleChange}
                  value={state.number}
                  name="number"
                  placeholder="Phone number..."
                />
                {errors.number ? (
                  <span style={{ color: "red" }}>{errors.number.message}</span>
                ) : (
                  <></>
                )}

                <input
                  type="text"
                  {...register("message")}
                  onChange={handleChange}
                  value={state.message}
                  name="message"
                  placeholder="Write a message..."
                />
                {errors.message ? (
                  <span style={{ color: "red" }}>{errors.message.message}</span>
                ) : (
                  <></>
                )}
                <button onClick={handleSubmit(onSubmit)}>SEND MESSAGE</button>
              </form>
            </div>
          </div>
        </div>
      </section>
      <section className="contact_bottom">
        <div className="container">
          <div className="row">
            <div className="contact_about list col-lg-4 col-md-12">
              <h2>About</h2>
              <p>
                Lorem ipsum is simply free text dolor sit amet, duise
                consectetur ullam blandit
              </p>
            </div>
            <div className="contact_address list col-lg-4 col-md-12 ">
              <h2>Address</h2>
              <p>660 broklyn street , 88 new york, United states of america</p>
            </div>
            <div className="contact_number list col-lg-4 col-md-12">
              <h2>Contact</h2>
              <p>needhelp@oxpitan.com </p>
              <p>666 888 000</p>
            </div>
          </div>
        </div>
      </section>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96753.25799868624!2d-74.077644!3d40.728157!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sus!4v1676124329284!5m2!1sen!2sus"
        style={{ width: "100%", height: "100vh" }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
};

export default Contact;
