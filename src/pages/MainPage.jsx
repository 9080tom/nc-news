import React from "react";
import LoginPage from "../pages/LoginPage";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage";
import { Router } from "@reach/router";
import { ShowError } from "../components/ShowError";

const MainPage = props => (
  <div className="MainPage">
    <Router>
      <Articles path="/" loggedInUser={props.loggedInUser} />
      <Articles path="/users/:username/" loggedInUser={props.loggedInUser} />
      <Articles
        path="/users/:username/:sort"
        loggedInUser={props.loggedInUser}
      />
      <Articles path="/home/:sort" loggedInUser={props.loggedInUser} />
      <ArticlePage
        path="/articles/:article_id"
        logInUser={props.logInUser}
        loggedInUser={props.loggedInUser}
      />
      <Articles path="/topic/:topic/" loggedInUser={props.loggedInUser} />

      <Articles path="/topic/:topic/:sort" loggedInUser={props.loggedInUser} />
      <LoginPage
        path="/login"
        logInUser={props.logInUser}
        loggedInUser={props.loggedInUser}
      />
      <ShowError path="/notFound" />
      <ShowError default />
    </Router>
  </div>
);

export default MainPage;
