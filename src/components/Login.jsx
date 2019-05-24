import React from "react";
import { Link } from "@reach/router";

const Login = props => (
  <Link to="/login">
    {props.loggedIn ? <button>Login</button> : <button>Logout</button>}{" "}
  </Link>
);

export default Login;
