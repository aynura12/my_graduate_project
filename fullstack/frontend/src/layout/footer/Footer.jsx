import React from "react";
import { Link } from "react-router-dom";
import ConnectIcon from "../../components/ConnectIcon/ConnectIcon";
import "../footer/footer.scss";
const Footer = () => {
  return (
    <section id="footer">
      <div className="container">
        <div className="footer_title">
          <img
            src="http://layerdrops.com/oxpitan/images/section-icon.png"
            alt="img"
          />
          <h2>Newsletter</h2>
          <p>STAY UPDATED</p>
          <div id="footer_form">
            <input type="email" placeholder="Email address" />{" "}
            <button>Subcribe</button>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <h3>About</h3>
            <ul>
              <li>
                <Link id="footer_link" to="/cause">
                  Causes
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/about">
                  About
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  New Campaign
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Site Map
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="">
                  Events
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Explore</h3>
            <ul>
              <li>
                <Link id="footer_link" to="/cause">
                  Press Release
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/about">
                  Contact
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Blog Posts
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Social Connect
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="">
                  Help Topics
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Links</h3>
            <ul className="footer_list">
              <li>
                <Link id="footer_link" to="/cause">
                  Podcasts
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/about">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Videos
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Terms Of Use
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Blog</h3>
            <ul>
              <li>
                <Link id="footer_link" to="/cause">
                  Care For All People
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/about">
                  Build School For Kids
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Being Volunteer
                </Link>
              </li>
              <li>
                <Link id="footer_link" to="/">
                  Raise Fund To Help
                </Link>
              </li>
            </ul>
          </div>
          <div className="col">
            <h3>Contact</h3>
            <ul>
              <li>
                <Link id="footer_link" to="/cause">
                  660 Broklyn Street, 88 New York
                </Link>
              </li>
              <li>
                <Link
                  id="footer_link"
                  to="http://layerdrops.com/oxpitan/team.html"
                >
                  Needhelp@Oxpitan.Com
                </Link>
              </li>
              <li style={{ paddingBottom: "30px" }}>
                <Link id="footer_link" to="/">
                  666 888 0000
                </Link>
              </li>
              <li>
                <ConnectIcon />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <p>
                © Copyright 2019 by <a href="/">Layerdrops.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
