import React from "react";
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import NcNews from "../images/logo.png";
import { Link } from "@reach/router";

const Header = props => (
  <div className="header">
    <div>
      <Link to="/">
        <img src={NcNews} alt="logo" className="logo" />
      </Link>
    </div>
    <SearchBar />
    {props.loggedInUser.username ? (
      <div>
        logged in as {props.loggedInUser.username}
        <img
          src={props.loggedInUser.avatar_url}
          alt="avatar"
          className="avatar"
        />
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
