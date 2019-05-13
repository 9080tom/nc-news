import React from "react";
import "./App.css";

import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      <Header className="header" />
      <MainPage className="App-header" />
    </div>
  );
}

export default App;
