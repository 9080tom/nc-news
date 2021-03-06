import React, { Component } from "react";
import "./App.css";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
class App extends Component {
  state = {
    loggedInUser: {}
  };
  render() {
    return (
      <div className="App">
        <Header loggedInUser={this.state.loggedInUser} />
        <MainPage
          className="MainPage"
          loggedInUser={this.state.loggedInUser.username}
          logInUser={this.logInUser}
        />
      </div>
    );
  }
  logInUser = user => {
    this.setState({ loggedInUser: user });
  };
  componentDidMount() {
    if (
      localStorage.loggedInUser === "undefined" ||
      localStorage.loggedInUser === undefined
    ) {
    } else {
      this.logInUser(JSON.parse(localStorage.loggedInUser));
    }
  }
}

export default App;
