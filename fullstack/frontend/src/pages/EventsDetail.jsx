import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../pageStyle/eventsDetail.scss";
const EventsDetail = () => {
  return (
    <>
      <Helmet>
        <title>Events Detail</title>
      </Helmet>
      <section className="events_detail">
        {" "}
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events_detail_title">
                <h2>Events Detail</h2>
                <Link to="/home1">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events_detail_image">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <img
                src="http://layerdrops.com/oxpitan/images/img19.jpg"
                alt="img"
              />
              <span className="date_of_card card2">
                <span className="day_date">9</span>
                <span className="month_date">mart</span>
              </span>
            </div>
          </div>
        </div>
      </section>
      <section className="events_detail_area">
        <div className="container">
          <div className="row">
            <div className="col-lg-7 col-md-12">
              <div className="detail_left">
                <h3>Play for the world</h3>
                <p>
                  There are many variations of passages of Lorem Ipsum
                  available, but the majority have suffered alteration in some
                  form, by injected humour, or randomised words which don't look
                  even slightly believable. If you are going to use a passage of
                  Lorem Ipsum, you need to be sure there isn't anything
                  embarrassing hidden in the middle of text.
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with
                    the release of Letraset sheets containing Lorem Ipsum
                    passages, and more recently with desktop publishing software
                    like Aldus PageMaker including versions of Lorem Ipsum ley
                    of type and scrambled it to make a type specimen book.
                  </p>
                </p>
                <h3>Event Requirements</h3>
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
                <Link to="/volunteer">
                  <button>Register Now</button>
                </Link>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="detail_right">
                <h3>Event Details</h3>
                <ul class="detail_list">
                  <li>
                    <span className="span1">Starting Time:</span> 8:00AM to 2:00PM
                  </li>
                  <li>
                    <span className="span2">Date:</span>9 March, 2019
                  </li>
                  <li>
                    <span className="span3">Category:</span>Health
                  </li>
                  <li>
                    <span className="span4">Phone:</span>666 888 0000
                  </li>
                  <li>
                    <span className="span5">Website:</span>Info@event.com
                  </li>
                  <li>
                    <span className="span6">Location:</span>8 Street, San Marcos London D29, UK
                  </li>
                </ul>
              </div>
              <div>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d96753.25799868624!2d-74.077644!3d40.728157!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2sus!4v1676124329284!5m2!1sen!2sus"
                  style={{ width: "100%", height: "60vh" }}
                  allowfullscreen=""
                  loading="lazy"
                  referrerpolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default EventsDetail;
