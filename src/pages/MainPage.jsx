import React from "react";
import LoginPage from "../pages/LoginPage";
import Articles from "./Articles";
import { Router } from "@reach/router";

const MainPage = () => (
  <div className="MainPage">
    <Router>
      <Articles path="/" />
      <Articles path="/home/:sort" />
      <LoginPage path="/login" />
    </Router>
  </div>
);

export default MainPage;
