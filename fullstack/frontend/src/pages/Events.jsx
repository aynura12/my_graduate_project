import React from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/events.scss";
import { useState, useEffect } from "react";
import { mainContext } from "../Context/ContextProvider";
import { useContext } from "react";
const Events = () => {
  const { events, setEvents,ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  const [sorted, setSorted] = useState({ sorted: "day", reversed: false });
  const sorteddata = () => {
    setSorted({ sorted: "day", reversed: !sorted.reversed });
    const datacopy = [...events];
    datacopy.sort((a, b) => {
      if (sorted.reversed) {
        return b.day - a.day;
      } else {
        return a.day - b.day;
      }
    });
    setEvents(datacopy);
  };

  return (
    <>
      <Helmet>
        <title>Events</title>
      </Helmet>
      <section className="event">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="events_title">
                <h2>Events</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="events_area">
        <div className="container">
          <button onClick={sorteddata}>Sorted</button>
          <div className="row">
            {events.map((event) => {
              return (
                <div className="col-lg-4 col-md-6" key={event._id}>
                  <div className="events_card">
                    <img src={event.image} alt="img" />
                    <span
                      style={{ backgroundColor: event.color }}
                      className="date_of_card "
                    >
                      <span className="day_date">{event.day}</span>
                      <span className="month_date">{event.month}</span>
                    </span>
                    <div className="events_text">
                      <Link
                        style={{ textDecoration: "none" }}
                        to={`${event._id}`}
                      >
                        {" "}
                        <h3
                          className="events_title1"
                          style={{ color: event.color }}
                        >
                          {event.title}
                        </h3>
                      </Link>

                      <ul>
                        <li
                          className="events_list1"
                          style={{ color: event.color }}
                        >
                          {event.watch}
                        </li>
                        <li
                          className="events_list1"
                          style={{ color: event.color }}
                        >
                          {event.name}
                        </li>
                      </ul>
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

export default Events;
