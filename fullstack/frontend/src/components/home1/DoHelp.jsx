import React from "react";
import donationLogo from "../../media/smalllogo.png";
import { Link } from "react-router-dom";
import "../home1/dohelp.scss";
const DoHelp = () => {
  return (
    <div className="dohelp">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 col-md-12">
            <img
              src="https://oxpitan-gatsby.vercel.app/static/helping-img-549e82105b5ffb59be5191a04a18fb83.jpg"
              alt="help-img"
            />
            <br />
            <img src={donationLogo} alt="" />
            <h2>Charity activities are taken place around the world</h2>
            <p>
              Aliq is notm hendr erit a augue insu image pellen tes que id erat
              quis simply free text sollicitud. Lorem ipsum dolor sit not amet,
              consectetur adipiscing ullam blandit simply free text hendrerit
              faucibus suspendisse.
            </p>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="dohelp_form">Burani yazacaqsan</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoHelp;
