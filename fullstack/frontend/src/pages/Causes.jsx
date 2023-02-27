import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import "../style/causes.scss";
import Cause from "../components/Home/Cause";
import { mainContext } from "../Context/ContextProvider";
import { useContext } from "react";
const Causes = () => {
  const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  return (
    <>
      <div className="causes_to">
        <Helmet>
          <title>Couses</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="causesto_title">
                <h2>Causes</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Cause/>
    </>
  );
};

export default Causes;
