import React from "react";
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import { Link } from "@reach/router";

const Header = props => (
  <div className="header">
    <div>
      <Link to="/">
        NC <br />
        News
      </Link>
    </div>
    <SearchBar />
    {console.log(props.loggedInUser)}
    {props.loggedInUser ? (
      <div>
        logged in as {props.loggedInUser}
        <Login loggedIn={false} />
      </div>
    ) : (
      <div>
        logged out
        <Login loggedIn={true} />
      </div>
    )}
  </div>
);

export default Header;
