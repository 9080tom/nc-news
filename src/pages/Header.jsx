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
