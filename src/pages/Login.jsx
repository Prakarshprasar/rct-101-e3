import React, { useState, useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const {login}=useContext(AuthContext)
  return (
    <div>
      Login <br />
      <input data-cy="login-email" placeholder="Enter E-mail" /><br />
      <input data-cy="login-password"  placeholder="Enter Password" type={"password"} /><br />
      <button data-cy="login-submit" onClick={login}>Login</button>
    </div>
  );
};

export default Login;
