import React from "react";
import "../donation/donate.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useState, useEffect } from "react";
import axios from "axios";
const Donate = () => {
  //   // Function will execute on click of button
  //   const onButtonClick = () => {
  //     // using Java Script method to get PDF file
  //     fetch('Graduation Project (1).pdf').then(response => {
  //         response.blob().then(blob => {
  //             // Creating new object of PDF file
  //             const fileURL = window.URL.createObjectURL(blob);
  //             // Setting various property values
  //             let alink = document.createElement('a');
  //             alink.href = fileURL;
  //             alink.download = 'Graduation Project (1).pdf';
  //             alink.click();
  //         })
  //     })
  // }
  // const [datas, setDatas] = useState([]);
  const [state, setState] = useState({
    money: 0,
    firstName: "",
    lastName: "",
    email: "",
    number: 0,
    address: "",
    // country: "",
    comment: "",
    cardNumber: 0,
    mm: "",
    cvc: 0,
    billingAddress: "",
    city: "",
  });
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const addData = async () => {
    if (
      !state.money ||
      !state.firstName ||
      !state.lastName ||
      !state.email ||
      !state.number ||
      !state.address ||
      // !state.country ||
      !state.comment ||
      !state.cardNumber ||
      !state.mm ||
      !state.cvc ||
      !state.billingAddress ||
      !state.city
    )
      return;
    await axios.post("http://localhost:8080/donate", state);
    setState({
      money: 0,
      firstName: "",
      lastName: "",
      email: "",
      number: 0,
      address: "",
      // country: "",
      comment: "",
      cardNumber: 0,
      mm: "",
      cvc: 0,
      billingAddress: "",
      city: "",
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

  // const getData = async () => {
  //   const res = await axios.get("http://localhost:8080/aboutList");
  //   setDatas(res.data);
  // };

  // useEffect(() => {
  //   getData();
  // }, []);
  return (
    <form className="donate" onSubmit={handleSubmit(onSubmit)}>
      <div className="your_donation">
        <h2>Enter Your Donation</h2>
        <div>
          <div>
            <input
              type="number"
              {...register("money")}
              onChange={handleChange}
              value={state.money}
              name="money"
              placeholder="Donation..."
            />
          </div>
          {errors.money ? (
            <p style={{ color: "red", fontSize: 15 }}>
              {errors.money?.message}
            </p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="personal_info">
        <h2>Personal Info</h2>
        <div className="personal_input">
          <div>
            <div>
              <input
                type="text"
                {...register("firstName")}
                value={state.firstName}
                onChange={handleChange}
                name="firstName"
                placeholder="First Name..."
              />
            </div>
            <div>
              {errors.firstName ? (
                <div>
                  <p style={{ color: "red" }}>{errors.firstName.message}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
          </div>
          <div>
            <div>
              <input
                type="text"
                {...register("lastName")}
                value={state.lastName}
                onChange={handleChange}
                name="lastName"
                placeholder="Last Name..."
              />
            </div>
            {errors.lastName ? (
              <p style={{ color: "red" }}>{errors.lastName.message}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="personal_input">
          <div>
            <div>
              <input
                type="email"
                {...register("email")}
                value={state.email}
                onChange={handleChange}
                name="email"
                placeholder="Email Address..."
              />
            </div>
            {errors.email ? (
              <p style={{ color: "red" }}>{errors.email.message}</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div>
              <input
                type="number"
                {...register("number")}
                value={state.number}
                onChange={handleChange}
                name="number"
                placeholder="Phone Number..."
              />
            </div>
            {errors.number ? (
              <p style={{ color: "red" }}>{errors.number.message}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="personal_input">
          <div>
            <div>
              <input
                type="text"
                {...register("address")}
                value={state.address}
                onChange={handleChange}
                placeholder="Address..."
              />
            </div>
            {errors.number ? (
              <p style={{ color: "red" }}>{errors.number.message}</p>
            ) : (
              <></>
            )}
          </div>

          {/* <select onChange={handleChange}>
            <option  selected>Country...</option>
            {datas?.map((data) => {
              return (
               
                
                <option key={data._id} value={data._id} name="country">
                  {data.country}
                </option>
              );
            })}
          </select> */}
        </div>
        <div>
          <div>
            <textarea
              value={state.comment}
              {...register("comment")}
              onChange={handleChange}
              name="comment"
              placeholder="Leave a Comment...   "
            ></textarea>
          </div>
          {errors.comment ? (
            <p style={{ color: "red" }}>{errors.comment.message}</p>
          ) : (
            <></>
          )}
        </div>
      </div>
      <div className="payment_info">
        <h2>Payment Info</h2>
        <div className="payment_input">
          <div>
            <div>
              <input
                type="number"
                {...register("cardNumber")}
                value={state.cardNumber}
                onChange={handleChange}
                name="cardNumber"
                placeholder="Card Number..."
              />
            </div>
            {errors.cardNumber ? (
              <p style={{ color: "red" }}>{errors.cardNumber.message}</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div>
              <input
                type="text"
                {...register("mm")}
                onChange={handleChange}
                value={state.mm}
                name="mm"
                placeholder="MM/YY..."
              />
            </div>
            {errors.mm ? (
              <p style={{ color: "red" }}>{errors.mm.message}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="payment_input">
          <div>
            <div>
              <input
                type="number"
                {...register("cvc")}
                onChange={handleChange}
                value={state.cvc}
                name="cvc"
                placeholder="Card Code(CVC)..."
              />
            </div>
            {errors.cvc ? (
              <p style={{ color: "red" }}>{errors.cvc.message}</p>
            ) : (
              <></>
            )}
          </div>
          <div>
            <div>
              <input
                type="text"
                {...register("billingAddress")}
                onChange={handleChange}
                value={state.billingAddress}
                name="billingAddress"
                placeholder="Billing Address..."
              />
            </div>
            {errors.billingAddress ? (
              <p style={{ color: "red" }}>{errors.billingAddress.message}</p>
            ) : (
              <></>
            )}
          </div>
        </div>
        <div className="payment_input">
          <div>
            <div>
              <input
                type="text"
                {...register("city")}
                onChange={handleChange}
                value={state.city}
                name="city"
                placeholder="City..."
              />
            </div>
            {errors.city ? (
              <p style={{ color: "red" }}>{errors.city.message}</p>
            ) : (
              <></>
            )}
          </div>

          {/* <select onChange={handleChange}>
            <option selected>Country...</option>
            {datas?.map((data) => {
              return (
                <option value={data._id} name="country">
                  {data.country}
                </option>
              );
            })}
          </select> */}
        </div>
      </div>
      <button onClick={() => addData()}>Donate now</button>
      {/* <center>
                <h1>Welcome to Geeks for Geeks</h1>
                <h3>Click on below button to download PDF file</h3>
                <button onClick={onButtonClick}>
                    Download PDF
                </button>
            </center> */}
    </form>
  );
};

export default Donate;
