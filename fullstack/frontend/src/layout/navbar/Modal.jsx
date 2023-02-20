import React from "react";
import { Link } from "react-router-dom";
import "../navbar/navbar.scss";

const Modal = () => {
  return (
    <>
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
        style={{ tabindex: "-1" }}
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
                  </li>
                  <li className="modal_list">
                    <a href="causes" className="modal_link">
                      Causes
                    </a>
                    <ul>
                      <li className="modal_list">
                        <Link to="causes" className="modal_link">
                          Causes
                        </Link>
                      </li>
                      {/* <li className="modal_list">
                        <Link to="causes/:id" className="modal_link">
                          Causes Detail
                        </Link>
                      </li> */}
                      <li className="modal_list">
                        <Link to="donatenow" className="modal_link">
                          Donate Now
                        </Link>
                      </li>
                    </ul>
                  </li>
                  <li className="modal_list">
                    <Link to="events/:id" className="modal_link">
                      Events
                    </Link>
                    {/* <ul>
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
                    </ul> */}
                  </li>
                  <li className="modal_list">
                    <Link to="news" className="modal_link">
                      News
                    </Link>
                    {/* <ul>
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
                    </ul> */}
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
                          <i className="fa-brands fa-facebook-f"></i>
                        </a>
                        <a href="/" className="list2">
                          <i className="fa-brands fa-twitter"></i>
                        </a>
                        <a href="/" className="list3 ">
                          <i className="fa-brands fa-youtube"></i>
                        </a>
                        <a href="/" className="list4">
                          <i className="fa-brands fa-google-plus-g"></i>
                        </a>
                      </li>

                      <li className="modal_list">
                        <Link to="donatenow" className="modal_link">
                          <button className="modal_button">Donate Now</button>
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
    </>
  );
};

export default Modal;
