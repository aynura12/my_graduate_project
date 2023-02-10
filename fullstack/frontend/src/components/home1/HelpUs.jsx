import React from "react";
import { Link } from "react-router-dom";
import "../home1/helpus.scss";
const HelpUs = () => {
  return (
    <div className="help_us">
      <div className="container">
        <div class="help_us_title">
          <h2>We Believe that We can Save More Lifes with you</h2>
        </div>
        <div className="row">
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon1">
                <i class="fa-solid fa-dove"></i>
              </div>
              <h4 class="help_title">Hope</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon2">
               
                <i class="fa-solid fa-hands-praying"></i>
              </div>

              <h4 class="help_title">Prayers</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon3">
                <i class="fa-solid fa-globe"></i>
              </div>

              <h4 class="help_title">Peace</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="help_card">
              <div className="help_card_icon4">
                <i class="fa-solid fa-hand-holding-dollar"></i>
              </div>
              <h4 class="help_title">Donation</h4>
              <p class="help_text">
                Lorem ipsum is simply free text available in the market
                wesbites.
              </p>
            </div>
          </div>
        </div>
        <Link to="/donatenow" className="help_link">
          <button>Donate Now</button>
        </Link>
      </div>
    </div>
  );
};

export default HelpUs;
