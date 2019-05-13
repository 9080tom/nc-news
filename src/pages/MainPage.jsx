import React from "react";
import LoginPage from "../pages/LoginPage";
import TopicBar from "./TopicBar";
import Articles from "./Articles";
import { Router } from "@reach/router";

const MainPage = () => (
  <div className="MainPage">
    <TopicBar />
    <Router>
      <Articles path="/" />
      <LoginPage path="/login" />
    </Router>
  </div>
);

export default MainPage;
