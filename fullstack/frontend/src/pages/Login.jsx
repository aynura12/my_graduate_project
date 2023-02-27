import React, { useEffect,useState } from "react";
import axios from "axios";
import { Helmet } from "react-helmet-async";
import { mainContext } from "../Context/ContextProvider";
import { useContext } from "react";
import "../style/login.scss";
import { Link } from "react-router-dom";
const Login = () => {
  const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop();
  }, []);


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const handleSubmit = (event) => {
  //     event.preventDefault();
  //     axios.post('http://127.0.0.1:3070/login/', { email, password })
  //         .then((response) => {

  //             console.log("succcess", response)
  //             document.cookie = `token=${response.data.token}; expires=${new Date(Date.now() + 36000000).toUTCString()}; path=/`;
  //             window.location.href = '/admin';
  //             setEmail('');
  //             setPassword('');

  //         })
  //         .catch((error) => {
  //             console.log("catch", error)
  //         });
  //     window.alert("success login")
  // };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email || !password) {
      window.alert("Please fill in all fields and login or sign up.");
      return;
    }
    axios
      .post("http://127.0.0.1:3070/login/", { email, password })
      .then((response) => {
        console.log("success", response);
        document.cookie = `token=${response.data.token}; expires=${new Date(
          Date.now() + 36000000
        ).toUTCString()}; path=/`;
        window.location.href = "/admin";
        setEmail("");
        setPassword("");
        window.alert("Success login");
      })
      .catch((error) => {
        console.log("catch", error);
        window.alert("Don't find such account.");
      });
  };
  return (
    <>
      <div className="login">
        {" "}
        <Helmet>
          <title>Login</title>
        </Helmet>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="login_title">
                <h2>Login</h2>
                <Link to="/">
                  <button>Back Home</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section>  <div className="login__wrapper">
      <div style={{ width: "20%", textAlign: "center" }}>
        <div> <img src="http://layerdrops.com/oxpitan/images/section-icon.png" alt="" /></div>
        <h3 style={{ color: "#e36955", marginBottom: "30px" }}>LOGIN</h3>
        <form
          onSubmit={handleSubmit}
          style={{ display: "flex", flexDirection: "column", gap: "10px" }}
        >
          <div>
            {" "}
            <input
              className="login-inp"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            {" "}
            <input
              className="login-inp"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          <button className="login-button" type="submit">
            Log in
          </button>
          <div className="d-flex justify-content-around">
            <Link className="login-links" to="/password">
              Forgot password?
            </Link>
           
            <Link className="login-links" to="/register">
              Register
            </Link>
          </div>
        </form>
      </div>
    </div></section>
    </>
  );
};

export default Login;
