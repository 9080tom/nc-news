import React, { Component } from "react";
import "./App.css";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
class App extends Component {
  state = {
    loggedInUser: undefined
  };
  render() {
    return (
      <div className="App">
        <Header />
        <MainPage className="MainPage" />
      </div>
    );
  }
  logInUser = userName => {
    this.setState({ loggedInUser: userName });
  };
}

export default App;
