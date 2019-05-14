import React, { Component } from "react";
import "./App.css";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
class App extends Component {
  state = {
    loggedInUser: ""
  };
  render() {
    return (
      <div className="App">
        <Header loggedInUser={this.state.loggedInUser} />
        <MainPage
          className="MainPage"
          loggedInUser={this.state.loggedInUser}
          logInUser={this.logInUser}
        />
      </div>
    );
  }
  logInUser = userName => {
    this.setState({ loggedInUser: userName });
  };
}

export default App;
