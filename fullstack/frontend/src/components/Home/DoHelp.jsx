import React, { useState } from "react";
import donationLogo from "../../media/smalllogo.png";
import "../Home/dohelp.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import axios from "axios";
const DoHelp = () => {
  const [state, setState] = useState({
    value: "",
    fullName: "",
    email: "",
    location: "",
    comment: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.value ||
      !state.fullName ||
      !state.email ||
      !state.location ||
      !state.comment
    )
      return;
    await axios.post("http://localhost:8080/donate", state);
    setState({
      value: "",
      fullName: "",
      email: "",
      location: "",
      comment: "",
    });
  };
  const onSubmit = (data) => {
    console.log(data);
    addData();
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  return (
    <div className="dohelp">
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
          <form className="dohelp_form">
            <div className="dohelp_form_title">
              <img
                src="http://layerdrops.com/oxpitan/images/section-icon.png"
                alt="img"
              />
              <h2>Make a Donation</h2>
              <p>DONATE US NOW</p>
            </div>
            <input
              type="text"
              {...register("firstName")}
              onChange={handleChange}
              value={state.firstName}
              name="firstName"
              placeholder="First Name..."
            />
            {errors.firstName ? (
              <span style={{ color: "red" }}>{errors.firstName.message}</span>
            ) : (
              <></>
            )}

            <textarea
              {...register("comment")}
              onChange={handleChange}
              value={state.comment}
              name="comment"
              placeholder="Leave a Comment...   "
            ></textarea>
            {errors.comment ? (
              <span style={{ color: "red" }}>{errors.comment.message}</span>
            ) : (
              <></>
            )}
            <div></div>

            <button>Continue Now</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default DoHelp;
