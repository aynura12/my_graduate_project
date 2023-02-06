import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar1.scss";
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
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKYAAAAyCAYAAADWf6AiAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA2RpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDpCQjVDNzM3NDg5RjIxMUU5QUUxRkM1MTBGQTdERUVGQSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDpCQjVDNzM3Mzg5RjIxMUU5QUUxRkM1MTBGQTdERUVGQSIgeG1wOkNyZWF0b3JUb29sPSJBZG9iZSBQaG90b3Nob3AgQ1M1IFdpbmRvd3MiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OTM2Nzg3NDZCNDdFOTExOTk2MUUwRkUxREZBMkNFQiIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDozNTQ4NjFBN0VDMERFNDExOUVCQUFDRjQ5RjZDMEVBRSIvPiA8L3JkZjpEZXNjcmlwdGlv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"
                  alt=""
                />
                <Link className="link d-none d-md-block ms-md-4" to="donatenow">
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
                      <Link to="newsdetail" className="bottom_link">
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
                        class="btn-close"
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
                                <Link to="causesdetail" className="modal_link">
                                  Causes Detail
                                </Link>
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
                                <Link to="events" className="modal_link">
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
