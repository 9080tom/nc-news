import React from "react";
import { Link } from "@reach/router";

const Login = props => (
  <Link to="/login">
    {props.loggedIn ? (
      <button className="buttons">Login</button>
    ) : (
      <button className="buttons">Logout</button>
    )}{" "}
  </Link>
);

export default Login;
