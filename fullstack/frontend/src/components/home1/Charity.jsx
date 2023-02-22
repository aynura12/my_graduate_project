import React, { useEffect, useState } from "react";
import "../home1/charity.scss";
import axios from "axios";
import $ from "jquery";
const Charity = () => {
  const [data, setData] = useState([]);
  const getData = async () => {
    const res = await axios.get("http://localhost:8080/counter");
    setData(res.data);
  };
  useEffect(() => {
    getData();
  }, []);
  $(document).ready(function () {
    $(".counter").each(function () {
      var $this = $(this),
        countTo = $this.attr("data-count");
      $({ countNum: $this.text() }).animate(
        {
          countNum: countTo,
        },
        {
          duration: 1000,
          easing: "linear",
          step: function () {
            $this.text(Math.floor(this.countNum));
          },
          complete: function () {
            $this.text(this.countNum);
          },
        }
      );
    });
  });
  return (
    <div className="charity">
      <div className="container">
        <div className="row g-0">
          <div className="col-lg-6 col-md-12">
            {data.map((datas) => {
              return (
                <div className="charity_left">
                  <div className="charity_left_icon">
                  <i class="fa-solid fa-hands-holding-circle"></i>
                  </div>
                  <div>
                    <h3>
                      <span className="counter" data-count={datas.count}></span>
                    </h3>
                    <p>{datas.title}</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="charity_right col-lg-6 col-md-12">
            <h3>
              " Every man must decide whether he will walk in the light of
              creative altruism or in the darkness of destructive selfishness.
            </h3>
            <p className="charity_right_text">Martin Luther King, jr</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charity;
