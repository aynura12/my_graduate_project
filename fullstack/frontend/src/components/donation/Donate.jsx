import React from "react";
import "../donation/donate.scss";
// import { useForm } from "react-hook-form";
// import { yupResolver } from "@hookform/resolvers/yup";
// import { formSchema } from "../schema/formSchema";
// import { useState } from "react";
// import axios from "axios";
const Donate = () => {
  // const [state, setState] = useState({
  //     money:"",
  //     fullName: "",
  //     email: "",
  //     comment: "",
  //   });
  //   const handleChange = async (e) => {
  //     setState({ ...state, [e.target.name]: e.target.value });
  //   };
  //   const addData = async (id) => {
  //     if (!state.fullName || !state.email || !state.comment) return;
  //     await axios.post("", state);
  //     setState({
  //       fullName: "",
  //       email: "",
  //       comment: "",
  //     });
  //   };
  //   const onSubmit = (data) => {
  //     console.log(data);
  //     addData();
  //   };
  //   const {
  //     register,
  //     handleSubmit,
  //     formState: { errors },
  //   } = useForm({
  //     resolver: yupResolver(formSchema),
  //   });
  return (
    <form className="donate">
      <div className="your_donation">
        <h2>Enter Your Donation</h2>
        <span>$</span>
        <input type="number" />
      </div>
      <div className="personal_info">
        <h2>Personal Info</h2>
        <div className="personal_input">
          <input type="text" placeholder="First Name..." />
          <input type="text" placeholder="Last Name..." />
        </div>
        <div className="personal_input">
          <input type="email" placeholder="Email Address..." />
          <input type="number" placeholder="Phone Number..." />
        </div>
        <div className="personal_input">
          <input type="text" placeholder="First Name..." />
          <select  aria-label="Default select example">
            <option selected>Country...</option>
            <option value="1">USA</option>
            <option value="2">UK</option>
            <option value="3">PAKISTAN</option>
            <option value="3">BANGLADESH</option>
            <option value="3">INDIA</option>
          </select>
        </div>
        <textarea placeholder="Leave a Comment...   "></textarea>
      </div>
      <div className="payment_info">
        <h2>Payment Info</h2>
        <div className="payment_input">
          <input type="number" placeholder="Card Number..." />
          <input type="text" placeholder="MM/YY..." />
        </div>
        <div className="payment_input">
          <input type="email" placeholder="Card Code(CVC)..." />
          <input type="number" placeholder="Billing Address..." />
        </div>
        <div className="payment_input">
          <input type="text" placeholder="City..." />
          <select  aria-label="Default select example">
            <option selected>Country...</option>
            <option value="1">USA</option>
            <option value="2">UK</option>
            <option value="3">PAKISTAN</option>
            <option value="3">BANGLADESH</option>
            <option value="3">INDIA</option>
          </select>
        </div>
      </div>
      <button>Donate now</button>
    </form>
  );
};

export default Donate;
