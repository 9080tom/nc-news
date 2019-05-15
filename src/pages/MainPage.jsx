import React from "react";
import LoginPage from "../pages/LoginPage";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage";
import NotFound from "./NotFound";
import Users from "./Users";

import { Router } from "@reach/router";

const MainPage = props => (
  <div className="MainPage">
    <Router>
      <Articles path="/" />
      <Articles path="/:topic" />
      <Articles path="/home/:sort" />
      <ArticlePage
        path="/articles/:article_id"
        logInUser={props.logInUser}
        loggedInUser={props.loggedInUser}
      />
      <LoginPage
        path="/login"
        logInUser={props.logInUser}
        loggedInUser={props.loggedInUser}
      />
      <Users path="/users/:username" />
      <NotFound default />
    </Router>
  </div>
);

export default MainPage;

//time ago?????
