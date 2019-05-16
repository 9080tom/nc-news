import React from "react";
import LoginPage from "../pages/LoginPage";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage";
import Users from "./Users";
import { Router } from "@reach/router";
import { ShowError } from "../components/ShowError";

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
      <Articles path="/users/:username" />
      <ShowError path="/notFound" />
      <ShowError default />
    </Router>
  </div>
);

export default MainPage;
