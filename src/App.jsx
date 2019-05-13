import React from "react";
import "./App.css";
import Header from "./pages/Header";
import MainPage from "./pages/MainPage";
function App() {
  return (
    <div className="App">
      <Header />
      <MainPage className="MainPage" />
    </div>
  );
}

export default App;
