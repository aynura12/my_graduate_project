import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar1.scss";
import logo  from "../../media/logo.png"
const Navbar1 = () => {
  return (
    <div>
      <div className="navbar_top">
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-left-list">
                <li className="list">
                  <a href="/" className="link">
                    <div className="navbar_top_left">
                      <i className="fa-solid fa-envelope"></i>
                    </div>
                    needhelp@oxpitan.com
                  </a>
                </li>
                <li className="list ">
                  <a href="/" className="link d-block ms-3">
                    <i className="fa-solid fa-phone telephone"></i> 666 888 0
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-7 col-sm-12 d-flex d-md-block justify-content-center">
              <ul className="lists navbar-right-list">
                <li className="list">
                  <Link to="login" className="link">
                    Login
                  </Link>
                </li>
                <li className="list">
                  <Link to="register" className="link">
                    Register
                  </Link>
                </li>
                <li className="list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-twitter"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-facebook-f"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-pinterest"></i>
                    </div>
                  </a>
                </li>
                <li className="list">
                  <a href="/" className="link">
                    <div>
                      <i className="fa-brands fa-instagram"></i>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="navbar_bottom">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 col-5 ">
              <div className="bottom_left_logo d-block d-md-flex">
                <img
                  src={logo}
                  alt=""
                />
                <Link className="link d-lg-block d-md-none d-sm-none d-xs-none  ms-md-4" to="/donatenow">
                  <button>DONATE NOW</button>
                </Link>
              </div>
            </div>

            <div className="col-lg-7 col-7 d-flex justify-content-end align-items-center">
              <ul className="bottom_lists d-none d-lg-flex justify-content-end">
                <li className="home bottom_list">
                  <Link to="home1" className="bottom_link">
                    Home
                  </Link>
                  <ul className="home_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="home1" className="bottom_link">
                        Home1
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="home2" className="bottom_link">
                        Home2
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="causes bottom_list">
                  <a href="/" className="bottom_link">
                    Causes
                  </a>
                  <ul className="causes_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="causes" className="bottom_link">
                        Causes
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="causesdetail" className="bottom_link">
                        Causes Detail
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="donatenow" className="bottom_link">
                        Donate Now
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="events bottom_list">
                  <a href="/" className="bottom_link">
                    Events
                  </a>
                  <ul className="events_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="events" className="bottom_link">
                        Events
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="eventsdetail" className="bottom_link">
                        Events Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="news bottom_list">
                  <a href="/" className="bottom_link">
                    News
                  </a>
                  <ul className="news_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="news" className="bottom_link">
                        News
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="news/:id" className="bottom_link">
                        News Detail
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="pages bottom_list">
                  <a href="/" className="bottom_link">
                    Pages
                  </a>
                  <ul className="pages_drop dropdown_lists">
                    <li className="bottom_list">
                      <Link to="about" className="bottom_link">
                        About
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="gallery" className="bottom_link">
                        Gallery
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="volunteer" className="bottom_link">
                        Become a Volunteer
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="ourteam" className="bottom_link">
                        Our Team
                      </Link>
                    </li>
                    <li className="bottom_list">
                      <Link to="sponsors" className="bottom_link">
                        Sponsors
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="bottom_list">
                  <Link to="contact" className="bottom_link">
                    Contact
                  </Link>
                </li>
              </ul>
              <div
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                className="hamburger_icon d-block w-0 h-0 px-3 py-2 d-lg-none "
              >
                <i className="fa-solid fa-bars"></i>
              </div>

              <div
                className="modal fade"
                id="exampleModal"
                tabindex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
              >
                <div className="modal-dialog">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div className="modal-body">
                      <div>
                        <ul>
                          <li className="modal_list">
                            <Link to="home1" className="modal_link">
                              Home
                            </Link>
                            <ul>
                              <li className="modal_list">
                                <Link to="home1" className="modal_link">
                                  Home1
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="home2" className="modal_link">
                                  Home2
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="modal_list">
                            <a href="/" className="modal_link">
                              Causes
                            </a>
                            <ul>
                              <li className="modal_list">
                                <Link to="causes" className="modal_link">
                                  Causes
                                </Link>
                              </li>
                              <li className="modal_list">
                               <Link to="causes/:id" className="modal_link">Causes Detail</Link>
                              </li>
                              <li className="modal_list">
                                <Link to="donatenow" className="modal_link">
                                  Donate Now
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="modal_list">
                            <a href="/" className="modal_link">
                              Events
                            </a>
                            <ul>
                              <li className="modal_list">
                                <Link to="events/:id" className="modal_link">
                                  Events
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="eventsdetail" className="modal_link">
                                  Events Detail
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="modal_list">
                            <a href="/" className="modal_link">
                              News
                            </a>
                            <ul>
                              <li className="modal_list">
                                <Link to="news" className="modal_link">
                                  News
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="newsdetail" className="modal_link">
                                  News Detail
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="modal_list">
                            <a href="/" className="modal_link">
                              Pages
                            </a>
                            <ul>
                              <li className="modal_list">
                                <Link to="about" className="modal_link">
                                  About
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="gallery" className="modal_link">
                                  Gallery
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="volunteer" className="modal_link">
                                  Become a Volunteer
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="ourteam" className="modal_link">
                                  Our Team
                                </Link>
                              </li>
                              <li className="modal_list">
                                <Link to="sponsors" className="modal_link">
                                  Sponsors
                                </Link>
                              </li>
                            </ul>
                          </li>
                          <li className="modal_list">
                            <Link to="contact" className="modal_link">
                              Contact
                            </Link>
                            <ul>
                              <li className="modal_list modal_contact_list">
                                <a href="/" className="list1">
                                  <i class="fa-brands fa-facebook-f"></i>
                                </a>
                                <a href="/" className="list2">
                                  <i class="fa-brands fa-twitter"></i>
                                </a>
                                <a href="/" className="list3 ">
                                  <i class="fa-brands fa-youtube"></i>
                                </a>
                                <a href="/" className="list4">
                                  <i class="fa-brands fa-google-plus-g"></i>
                                </a>
                              </li>

                              <li className="modal_list">
                                <Link to="donatenow" className="modal_link">
                                  <button className="modal_button">
                                    Donate Now
                                  </button>
                                </Link>
                              </li>
                            </ul>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar1;
