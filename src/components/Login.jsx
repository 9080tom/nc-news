import React from "react";
import { Link } from "@reach/router";

const Login = props => (
  <div>
    <Link to="/login">
      {props.loggedIn ? <button>Login</button> : <button>Logout</button>}{" "}
    </Link>
  </div>
);

export default Login;
