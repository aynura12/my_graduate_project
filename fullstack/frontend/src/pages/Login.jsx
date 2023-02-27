import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { mainContext } from "../Context/ContextProvider";
import { useContext} from "react";
const Login = () => {
  const { ToTop } = useContext(mainContext);
  useEffect(() => {
    ToTop()
  }, []);
  return (
    <div>
      <Helmet>
        <title>Login</title>
      </Helmet>
      Login
    </div>
  );
};

export default Login;
