import React from "react";
import SearchBar from "../components/SearchBar";
import Login from "../components/Login";
import NcNews from "../images/logo.png";
import { Link } from "@reach/router";
import { navigate } from "@reach/router";

const Header = props => (
  <div className="header">
    <div>
      <Link to="/">
        <img src={NcNews} alt="logo" className="logo" />
      </Link>
    </div>
    <SearchBar />

    {props.loggedInUser.username ? (
      <div className="dropdown">
        <div className="dropbtn">
          {" "}
          <img
            className="avatar"
            src={props.loggedInUser.avatar_url}
            alt="avatar"
          />
        </div>
        <div className="dropdown-content">
          <div>Logged in as {props.loggedInUser.username}</div>
          <button onClick={() => navigate("/createarticle")}>
            Create An Article
          </button>
          <button
            onClick={() => navigate(`/users/${props.loggedInUser.username}`)}
          >
            My articles
          </button>
          <button onClick={() => navigate("/login")}>Logout</button>
        </div>
      </div>
    ) : (
      <div>
        <Login loggedIn={true} />
      </div>
    )}
  </div>
);

export default Header;
