import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { mainContext } from "../Context/ContextProvider";
import { useContext } from "react";
const Register = () => {
  const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  return (
    <div>
      <Helmet>
        <title>Register</title>
      </Helmet>
      Register
    </div>
  );
};

export default Register;
