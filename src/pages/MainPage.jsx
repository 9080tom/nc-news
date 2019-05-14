import React from "react";
import LoginPage from "../pages/LoginPage";
import Articles from "./Articles";
import ArticlePage from "./ArticlePage";
import NotFound from "./NotFound";

import { Router } from "@reach/router";

const MainPage = () => (
  <div className="MainPage">
    <Router>
      <Articles path="/" />
      <Articles path="/:topic" />
      <Articles path="/home/:sort" />
      <ArticlePage path="/articles/:article_id" />
      <LoginPage path="/login" />
      <NotFound default />
    </Router>
  </div>
);

export default MainPage;

//time ago?????
