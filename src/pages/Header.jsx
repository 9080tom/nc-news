import React from "react";
import SearchBar from "../components/SearchBar";
import TopicBar from "./TopicBar";
import Login from "../components/Login";
import { Link } from "@reach/router";

const Header = () => (
  <div className="header">
    <div>
      <Link to="/">
        NC <br />
        News
      </Link>
    </div>
    <TopicBar />
    <SearchBar />
    <Login />
  </div>
);

export default Header;
