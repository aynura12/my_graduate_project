import React from "react";
import { Link } from "react-router-dom";
import "../home1/recent.scss";
import donationLogo from "../../media/smalllogo.png";

const Recent = () => {
  return (
    <>
      <div className="recent">
        <div className="container">
          <div className="recent_title">
            <img src={donationLogo} alt="logo" />
            <h2>Recent Blog Posts</h2>
            <p>NEWS AND UPDATES</p>
          </div>
          <div className="row">
            <div className="recent_left col-lg-6 col-md-12">
              <img
                src="https://oxpitan-gatsby.vercel.app/static/blog-img-4fd84ee6c266b3a36e40b7edc4663fe8.jpg"
                alt="help-img"
              />
              <h2>A place where start new life with peace</h2>
              <span>MIKE HARDSON</span>
              <span>3 COMMENTS</span>
              <p>
                Aliq is notm hendr erit a augue insu image pellen tes que id
                erat quis sollicitud. Lorem ipsum dolor sit amet, consectetur
                adipiscing ullam blandit hendrerit faucibus suspendisse.
              </p>
              <Link to="newsdetail">
                <button>READ MORE</button>
              </Link>
            </div>
            <div className=" col-lg-6 col-md-12">
              <div className="recent_right">
                {" "}
                <ul className="recent_list">
                  <li>
                    <img
                      src="https://oxpitan-gatsby.vercel.app/static/blog-img2-35b5a659e6b754026ea3ea16bc6bf1fb.jpg"
                      alt="img"
                    />
                    <div>
                      <p>07 MAR, 2019</p>
                      <h2>Let’s together provide them a healthy food</h2>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://oxpitan-gatsby.vercel.app/static/blog-img3-97496374e4e1e766e41fbb289cac84e9.jpg"
                      alt="img"
                    />
                    <div>
                      <p>04 MAR, 2019</p>
                      <h2>Building clean water system for poor</h2>
                    </div>
                  </li>
                  <li>
                    <img
                      src="https://oxpitan-gatsby.vercel.app/static/blog-img4-bebe58b75d17818cd494eb4726ac59d3.jpg"
                      alt="img"
                    />
                    <div>
                      <p>29 FEB, 2019</p>
                      <h2>Become a volunteer you will feel the benefits</h2>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3121656.012188483!2d47.75453!3d40.17585849999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m3!3e6!4m0!4m0!5e0!3m2!1sen!2s!4v1675951153732!5m2!1sen!2s"
          style={{ width: "100%", height: "100vh" }}
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>

      <section className="home_end">
        <div className="row">
          <div className="end_left col-lg-6 col-md-12">
            <h2>Sponsor an entire trending project</h2>{" "}
            <Link to="donatenow">
              <button>BECOME AN SPONSOR</button>
            </Link>
          </div>
          <div className="end_right col-lg-6 col-md-12">
            <h2>Take a look a the popular causes</h2>
            <Link to="donatenow">
              <button>BECOME AN SPONSOR</button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Recent;
